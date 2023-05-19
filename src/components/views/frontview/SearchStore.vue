<template>
  <WrapContainer>
    <el-card class="search-card mb-3">
      <h1 class="mb-3">搜尋</h1>

      <el-form :inline="true" size="large" style="margin-bottom: -24px">
        <el-form-item style="width: 100%; max-width: 400px">
          <el-input v-model="keyword" type="round" placeholder="搜尋換宿店家" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="searchWord(keyword)"
            @keyup.enter="searchWord(keyword)"
            tabindex="0"
            >搜尋</el-button
          >
          <el-button type="secondary" @click="reset" v-if="isSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <ResultCard :stores="stores"></ResultCard>
  </WrapContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import WrapContainer from '../../global/WrapContainer.vue';
import ResultCard from '../../SearchStore/ResultCard.vue';

// common func & data
const keyword = ref('');
const stores = ref([]);
const isSearch = ref(false);

// const averageScore = computed((id) => {
//   const average = 0;
//   let total = 0;
//   let comments = [];
//   axios.get(`http://localhost:3000/stores/${id}?_embed=comments`).then((res) => {
//     comments = res.data;
//     comments.forEach((comment) => {
//       total += comment.score;
//     });
//   });
//   return average === 0 ? '-' : Math.floor(total / comments.length);
// });

// Init
const getStores = () => {
  axios
    .get('http://localhost:3000/stores')
    .then((res) => {
      stores.value = res.data;
    })
    .catch(() => {
      stores.value = [];
    });
};

const searchWord = (word) => {
  axios
    .get(`http://localhost:3000/stores?q=${word}`)
    .then((res) => {
      stores.value = res.data;
      isSearch.value = true;
    })
    .catch(() => {
      stores.value = [];
    });
};

onMounted(() => {
  const route = useRoute();
  if (route.query.keyword) {
    keyword.value = route.query.keyword;
    searchWord(keyword.value);
  } else {
    getStores();
  }
});

// reset
const reset = () => {
  keyword.value = '';
  isSearch.value = false;
  getStores();
};
</script>

<style scoped>
.search-card {
  text-align: center;
  background-image: url('../../../assets/imgs/SearchStore/searchBg.png');
  background-size: cover;
  width: 100%;
  padding: 20px 0;
}
</style>
