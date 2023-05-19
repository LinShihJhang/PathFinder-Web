<template>
  <div v-if="props.stores.length > 0">
    <router-link
      :to="`/storeDetail/${store.id}`"
      v-for="store in props.stores"
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
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  stores: Array,
});

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
</script>

<style scoped>
.comment-star {
  display: flex;
  flex-direction: column;
}
</style>
