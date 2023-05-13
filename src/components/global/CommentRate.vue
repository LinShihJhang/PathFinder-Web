<template>
  <div class="d-flex align-center">
    <h2 class="me-2 text-accent">{{ props.score }}</h2>
    <el-rate
      v-model="scoreValue.score"
      disabled
      :colors="['#F48C2B', '#F48C2B', '#F48C2B']"
      size="large"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  score: {
    type: Number,
    default: 0,
  },
});

const scoreValue = { ...props };
// rate v-modal為什麼不能直接用score
// const {scoreValue} = { ...props };  score會用誰的
// const scoreValue = ref(props.score);
// const scoreValue = ref(props.score); 為什麼要用ref包住？淺拷貝？
</script>
