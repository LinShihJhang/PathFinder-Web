<template>
  <div class="d-flex align-center">
    <h2 class="me-2 text-accent">{{ scoreValue.averageScore }}</h2>
    <el-rate
      v-model="scoreValue.averageScore"
      disabled
      :colors="['#F48C2B', '#F48C2B', '#F48C2B']"
      size="large"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  averageScore: {
    type: Number,
    default: 0,
  },
});

const scoreValue = { ...props };
</script>
