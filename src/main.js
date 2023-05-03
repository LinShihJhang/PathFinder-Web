import { createApp } from 'vue';
import '@/assets/styles/element/index.scss';
import ElementPlus from 'element-plus';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

app.use(ElementPlus);
app.use(router);

app.mount('#app');
