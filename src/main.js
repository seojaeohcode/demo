import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import status from './components/status'
import newPage from './components/newPage'
// 전역으로 등록
const app = createApp(App);
app.component('status',status);
app.component('newPage',newPage);

app.use(store).use(router).mount('#app')