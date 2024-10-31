<template>
  <header class="header">
    <router-link to="/"><h1 class="title">유치원 정보조회  <i class="fas fa-child"></i></h1></router-link>
    <button class="menu-icon" @click="toggleMenu">
      <i class="fas fa-bars"></i> <!-- Font Awesome 아이콘 -->
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu() { 
        this.$router.push('/menu')
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ff8181;
  padding: 10px;
  /*box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.title {
  font-size: 22px;
  font-weight: bold;
  color: white;
}

.menu-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px; /* 아이콘 크기 조정 */
  color: #ffffff; /* 아이콘 색상 */
}
</style>
