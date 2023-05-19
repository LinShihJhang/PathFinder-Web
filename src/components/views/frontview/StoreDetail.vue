<template>
  <WrapContainer>
    <router-link :to="{ name: 'searchStore' }" class="text-primary bold router-link mb-1"
      ><font-awesome-icon :icon="['fas', 'arrow-left']" class="me-1" />返回</router-link
    >

    <el-row :gutter="20" class="mt-2">
      <el-col :xs="24" :md="8">
        <StoreCard :averageStoreInfo="averageStoreInfo" :store="store"></StoreCard
      ></el-col>

      <el-col :xs="24" :md="16">
        <div class="d-flex align-center" style="justify-content: space-between">
          <p class="text-grey bold" style="margin: 0">{{ comments.length }} 則評論</p>
          <FilterSelection @selectVal="sorterComment"></FilterSelection>
        </div>

        <CommentCard :comments="comments"> </CommentCard>
      </el-col>
    </el-row>
  </WrapContainer>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import StoreCard from '@/components/StoreDetail/StoreCard.vue';
import WrapContainer from '../../global/WrapContainer.vue';
import CommentCard from '../../StoreDetail/CommentCard.vue';
import FilterSelection from '../../StoreDetail/FilterSelection.vue';

// store info
const store = ref({});
const comments = ref([]);
const averageDays = ref('');
const averageHours = ref('');
const averageScore = ref('');
const averageStoreInfo = computed(() => ({
  averageDays: averageDays.value,
  averageHours: averageHours.value,
  averageScore: averageScore.value,
}));

const getAverageInfo = (key) => {
  let total = 0;
  comments.value.forEach((comment) => {
    total += comment[key];
  });
  return total === 0 ? '-' : Math.floor(total / comments.value.length);
};

// comment info
const sorterComment = (sorter) => {
  if (sorter === 'scoreOrderAsc') {
    comments.value.sort((a, b) => (a.score > b.score ? 1 : -1));
  } else if (sorter === 'scoreOrderDesc') {
    comments.value.sort((a, b) => (a.score < b.score ? 1 : -1));
  } else if (sorter === 'DateOrderAsc') {
    comments.value.sort((a, b) => (a.createDate < b.createDate ? 1 : -1));
  } else if (sorter === 'DateOrderDesc') {
    comments.value.sort((a, b) => (a.createDate > b.createDate ? 1 : -1));
  }
};

// onMounted
const getStore = () => {
  const route = useRoute();
  axios.get(`http://localhost:3000/stores/${route.params.id}?_embed=comments`).then((res) => {
    store.value = res.data;
    comments.value = store.value.comments;
    averageDays.value = ref(getAverageInfo('workDays'));
    averageHours.value = ref(getAverageInfo('workHours'));
    averageScore.value = ref(getAverageInfo('score'));
  });
};

onMounted(() => {
  getStore();
});
</script>
