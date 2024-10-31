import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router'; // 라우터 가져오기
import { createNaverMap } from "vue3-naver-maps";
import 'normalize.css';

const app = createApp(App)
app.use(router)
.use(createNaverMap, {
clientId: "ccehq59h8q", // Required
category: "ncp", // Optional
subModules: [], // Optional
})
app.mount('#app')
