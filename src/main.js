import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import one from '@/components/oneView.vue'
import two from '@/components/twoView.vue'
import three from '@/components/threeView.vue'
import four from '@/components/fourView.vue'
import five from '@/components/fiveView.vue'

import header from '@/components/Header.vue'
import footer from '@/components/Footer.vue'
import mart from '@/components/Mart.vue'
// 전역으로 등록
const app = createApp(App);
app.component('one', one);
app.component('two', two);
app.component('three', three);
app.component('four', four);
app.component('five', five);

app.component('headerView', header);
app.component('footerView', footer);
app.component('martView', mart);

app.use(store).use(router).mount('#app')