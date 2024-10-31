
<template>
    <div class="app-container">
        <AppHeader/>
        <div class="app-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import AppHeader from '../src/components/AppHeader.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.app-container {
  display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
  width: 100%; /* 전체 너비 사용 */
  height: 100vh; /* 전체 화면 높이 */
  margin: 0; /* 기본 마진 제거 */
  padding: 0; /* 기본 패딩 제거 */
}
.app-content {
  flex: 1; /* 남은 공간을 차지 */
  background-color: #f9f9f9; /* 콘텐츠 배경색 */
  margin-top: 75px;
  width: 100%; /* 가로 100% */
  
}
</style>
