<template>
  {{ storeData }}
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// get Store
const route = useRoute();
const storeData = ref({});
const getStore = () => {
  axios.get(`http://localhost:3000/stores/${route.params.id}?_embed=comments`).then((res) => {
    storeData.value = res.data;
  });
};
onMounted(() => {
  getStore();
});
</script>
