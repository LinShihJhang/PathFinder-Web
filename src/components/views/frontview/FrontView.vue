<template>
  <WrapContainer>
    <el-card class="search-card mb-4">
      <h1>搜尋</h1>

      <el-form :inline="true" size="large">
        <el-form-item style="width: 500px">
          <el-input v-model="searchWord" type="round" placeholder="搜尋換宿店家" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" @keydown.enter="onSubmit" tabindex="0"
            >搜尋</el-button
          >
          <el-button type="secondary" @click="reset" v-if="isSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <router-link
      :to="`/storeDetail/${store.id}`"
      v-for="store in storeList"
      :key="store.id"
      class="router-link"
    >
      <el-card class="mb-4">
        <el-row gutter="16">
          <el-col :span="18" :offset="1">
            <el-space wrap size="large">
              <div v-if="store.imgUrl" class="rounded block">
                <el-image style="width: 100px; height: 100px" :src="store.imgUrl" fit="cover" />
              </div>
              <img v-else src="@/assets/imgs/storeDefaultImg.png" class="rounded" />

              <div>
                <h3>{{ store.name }}</h3>
                <p class="secondary-text"><span></span>{{ store.address }}</p>
                <p class="secondary-text"><span></span>{{ store.tel }}</p>
              </div>
            </el-space>
          </el-col>

          <el-col :span="4" offset="1" class="accent-color comment-star"
            ><h1>4.5</h1>
            <p>4.5 stars ic</p>
          </el-col>
        </el-row>
      </el-card>
    </router-link>
  </WrapContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import WrapContainer from '../../global/WrapContainer.vue';

// common func
const storeList = ref([]);
function getAllStores() {
  axios
    .get('http://localhost:3000/stores')
    .then((res) => {
      storeList.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// init
onMounted(() => {
  getAllStores();
});

// search
const searchWord = ref('');
const isSearch = ref(false);
const onSubmit = () => {
  axios
    .get(`http://localhost:3000/stores?q=${searchWord.value}`)
    .then((res) => {
      storeList.value = res.data;
      isSearch.value = true;
    })
    .catch((err) => {
      console.log(err);
    });
};

// search reset
const reset = () => {
  searchWord.value = '';
  isSearch.value = false;
  getAllStores();
};
</script>

<style scoped>
.search-card {
  text-align: center;
  background-image: url('../../../assets/imgs/searchBg.png');
  width: 100%;
}

.search-card :v-deep(.el-card__body) {
  width: 100%;
}

.comment-star {
  text-align: right;
}
</style>
