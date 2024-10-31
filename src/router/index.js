import { createRouter, createWebHistory } from 'vue-router';

// 컴포넌트 가져오기
import Main from '../views/Main.vue';
import Test from '../views/Test.vue';
import Menu from '../views/Menu.vue';
import Detail from '../views/Detail.vue'
import Hello from '../views/Hello.vue'
import Notice from '../views/Notice.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'
import Bookmarks from '../views/Bookmarks.vue'
import UserInfo from '../views/UserInfo.vue'
import SignUp from '../views/SignUp.vue'
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello,
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice,
  },{
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/search-city',
    name: 'SearchCity',
    component: Search,
  },
  {
    path: '/search-theme',
    name: 'SearchTheme',
    component: Search,
  },{
    path: '/bookmarks',
    name: 'Bookmarks',
    component: Bookmarks,
  },{
    path: '/user-info',
    name: 'UserInfo',
    component: UserInfo,
  },{
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
