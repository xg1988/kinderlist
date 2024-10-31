<template>
  <div class="login-container">
    <div class="login-card">
      <h1>로그인</h1>
      <img :src="KinderIcon" alt="설명" style="width: 180px;"/>
      <button class="naver-login-button" @click="loginWithNaver">
        네이버로 로그인
      </button>
    </div>
  </div>
</template>

<script>
import KinderIcon from '../assets/kinder_icon.jpg';
export default {
  data(){
    return {
      KinderIcon,
    }
  },
  methods: {
    loginWithNaver() {
      // 네이버 로그인 로직을 여기에 추가합니다.
      console.log("네이버 로그인 버튼 클릭됨");
      // 실제 로그인 로직을 구현할 수 있습니다.
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 위쪽 정렬 */
  height: 100vh; /* 전체 화면 높이 */
  padding-top: 50px; /* 상단 여백 추가 */
  background-color: #f7f7f7; /* 배경 색상 */
}

.login-card {
  background-color: #fff; /* 카드 배경 색상 */
  padding: 40px; /* 카드 안쪽 여백 */
  border-radius: 8px; /* 모서리 둥글게 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* 입체적인 그림자 */
  text-align: center; /* 텍스트 중앙 정렬 */
  width: 300px; /* 카드 너비 */
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
}

.naver-login-button {
  padding: 10px 20px;
  background-color: #03c75a; /* 네이버 브랜드 색상 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.naver-login-button:hover {
  background-color: #029c4a; /* 호버 색상 */
}
</style>
