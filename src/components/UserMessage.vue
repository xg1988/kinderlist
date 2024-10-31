<template>
  <div class="login-status">
    <div v-if="!isLoggedIn">
      <button class="login-button" @click="login">안녕하세요! 로그인 해보세요</button>
    </div>
    <div v-else>
      {{ userName }}님 안녕하세요! <button class="logout-button" @click="logout">로그아웃</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      userName: '홍길동', // 예시 사용자 이름
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
      // 실제 로그인 로직 추가 가능
    },
    logout() {
      this.isLoggedIn = false;
      // 실제 로그아웃 로직 추가 가능
    },
  },
};
</script>

<style scoped>
.login-status {
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.login-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
 .logout-button {
    padding: 10px 10px;
    background-color: #007bff;
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
 }

</style>
