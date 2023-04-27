import { createApp } from 'vue';
import BootstrapVueNext from 'bootstrap-vue-next';
import './assets/style/all.scss';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(BootstrapVueNext);
app.use(router);
app.mount('#app');
