<template>
  <div class="d-flex align-center">
    <h2 class="me-2 text-accent">{{ props.averageScore }}</h2>
    <el-rate
      v-model="scoreValue.averageScore"
      disabled
      :colors="['#F48C2B', '#F48C2B', '#F48C2B']"
      size="large"
    />
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  averageScore: {
    type: Number,
    default: 0,
  },
});

const scoreValue = ref({});
watch(
  () => props.averageScore,
  (newVal, oldVal) => {
    console.log(newVal);
    console.log(oldVal);
    scoreValue.value.averageScore = newVal;
  },
);
</script>
