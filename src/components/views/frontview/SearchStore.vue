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
            @keydown.enter="searchWord(keyword)"
            tabindex="0"
            >搜尋</el-button
          >
          <el-button type="secondary" @click="reset" v-if="isSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div v-if="storeList.length > 0">
      <router-link
        :to="`/storeDetail/${store.id}`"
        v-for="store in storeList"
        :key="store.id"
        class="router-link"
      >
        <el-card class="mb-3">
          <el-row gutter="16" class="align-center">
            <el-col :span="18" :offset="1">
              <div class="d-flex align-center">
                <div v-if="store.imgUrl" class="rounded block me-3">
                  <el-image
                    style="width: 100px; height: 100px"
                    :src="store.imgUrl"
                    fit="cover"
                    class="rounded"
                  />
                </div>
                <img
                  v-else
                  src="@/assets/imgs/storeDefaultImg.png"
                  style="border-radius: 16px"
                  class="me-3"
                />

                <div>
                  <h4 class="mb-1">{{ store.name }}</h4>
                  <p class="text-grey mb-1"><span></span>{{ store.address }}</p>
                  <p class="text-grey mb-1"><span></span>{{ store.tel }}</p>
                </div>
              </div>
            </el-col>

            <el-col :span="4" offset="1" class="text-accent comment-star"
              ><h1 class="mb-1">4.5</h1>
              <p>4.5 stars ic</p>
            </el-col>
          </el-row>
        </el-card>
      </router-link>
    </div>
    <div v-else style="text-align: center">無搜尋結果</div>
  </WrapContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import WrapContainer from '../../global/WrapContainer.vue';

// common func & data
const keyword = ref('');
const storeList = ref([]);
const isSearch = ref(false);
const getAllStores = () => {
  axios
    .get('http://localhost:3000/stores')
    .then((res) => {
      storeList.value = res.data;
    })
    .catch(() => {
      storeList.value = [];
    });
};

const searchWord = (word) => {
  axios
    .get(`http://localhost:3000/stores?q=${word}`)
    .then((res) => {
      storeList.value = res.data;
      isSearch.value = true;
    })
    .catch(() => {
      storeList.value = [];
    });
};

// init
onMounted(() => {
  const route = useRoute();

  if (keyword.value) {
    keyword.value = route.query.keyword;
    searchWord(keyword.value);
  } else {
    getAllStores();
  }
});

// search reset
const reset = () => {
  keyword.value = '';
  isSearch.value = false;
  getAllStores();
};
</script>

<style scoped>
.search-card {
  text-align: center;
  background-image: url('../../../assets/imgs/searchBg.png');
  background-size: cover;
  width: 100%;
  padding: 20px 0;
}

.comment-star {
  display: flex;
  flex-direction: column;
}
</style>
