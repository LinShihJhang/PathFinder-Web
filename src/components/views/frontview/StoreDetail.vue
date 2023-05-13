<template>
  <WrapContainer>
    <el-row :gutter="20">
      <el-col :xs="24" :md="8">
        <el-card>
          <el-space wrap size="large">
            <div v-if="store.imgUrl" class="rounded block">
              <el-image
                style="width: 100px; height: 100px"
                :src="store.imgUrl"
                fit="cover"
                class="rounded"
              />
            </div>
            <img v-else src="../../../assets/imgs/storeDefaultImg.png" class="rounded" />

            <div class="mb-5">
              <h3>{{ store.name }}</h3>
              <CommentRate :score="4.5"></CommentRate>
            </div>
          </el-space>

          <div class="secondary-text">
            <p class="mb-1">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="me-1" />{{ store.address }}
            </p>
            <p class="mb-1">
              <font-awesome-icon :icon="['fas', 'phone']" class="me-1" />{{ store.tel }}
            </p>
            <p class="mb-1">
              <font-awesome-icon :icon="['fas', 'clock']" class="me-1" />平均工時：
              {{ averageHours }}
            </p>
            <p class="mb-1">
              <font-awesome-icon :icon="['fas', 'calendar-days']" class="me-1" />平均換宿日：
              {{ averageDays }}
            </p>
            <el-button type="primary" class="ma">撰寫貼文</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :md="16">
        <el-card>card</el-card>
      </el-col>
    </el-row>
  </WrapContainer>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import WrapContainer from '../../global/WrapContainer.vue';
import CommentRate from '../../global/CommentRate.vue';

// common func & data
const route = useRoute();
const store = ref({});
const comments = ref([]);

// StoreData
// averageHours
const averageHours = ref(0);

const getAverageHours = () => {
  let hours = 0;
  comments.value.forEach((element) => {
    hours += element.workHours;
  });
  averageHours.value = hours === 0 ? '-' : Math.floor(hours / comments.value.length);
};

// averageDays
const averageDays = ref('');
const getAverageDays = () => {
  let days = 0;
  comments.value.forEach((element) => {
    days += element.workDays;
  });
  averageDays.value = days === 0 ? '-' : Math.floor(days / comments.value.length);
};

// store
const getStore = () => {
  axios.get(`http://localhost:3000/stores/${route.params.id}?_embed=comments`).then((res) => {
    store.value = res.data;
    comments.value = store.value.comments;
    getAverageHours();
    getAverageDays();
  });
};

onMounted(() => {
  getStore();
});
</script>
