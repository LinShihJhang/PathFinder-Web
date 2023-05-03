<template>
  <WrapContainer>
    <el-card class="searchCard mb-4">
      <h1>搜尋</h1>

      <el-form :inline="true" size="large">
        <el-form-item style="width: 400px">
          <el-input v-model="searchStore" type="round" placeholder="搜尋換宿店家" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜尋</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card v-for="store in storeList" :key="store.id" class="mb-4">
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
  </WrapContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import WrapContainer from '../../global/WrapContainer.vue';

// data
const storeList = ref([]);
const searchStore = ref('');

// init
onMounted(() => {
  axios
    .get('http://localhost:3000/stores')
    .then((res) => {
      storeList.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

// search
const onSubmit = () => {
  console.log(searchStore.value);
};
</script>

<style scoped>
.searchCard {
  text-align: center;
  background-image: url('../../../assets/imgs/searchBg.png');
  width: 100%;
}

.searchCard :v-deep(.el-card__body) {
  width: 100%;
}

.comment-star {
  text-align: right;
}
</style>
