<template>
  <nav class="menu-card">
    <h2 class="menu-title">전체 메뉴</h2>
    <ul>
      <li @click="navigateTo('/login')">
        로그인 <i class="fas fa-arrow-right icon"></i>
      </li>
      <li @click="navigateTo('/sign-up')">
        회원가입 <i class="fas fa-arrow-right icon"></i>
      </li>
      <li @click="navigateTo('/user-info')">
        내 정보 <i class="fas fa-arrow-right icon"></i>
      </li>
      <li @click="navigateTo('/search-city')">
        지역별 검색 <i class="fas fa-arrow-right icon"></i>
      </li>
      <li @click="navigateTo('/search-theme')">
        테마별 검색 <i class="fas fa-arrow-right icon"></i>
      </li>
      <li @click="navigateTo('/bookmarks')">
        즐겨찾기 <i class="fas fa-arrow-right icon"></i>
      </li>
      <li @click="navigateTo('/hello')">
        앱 소개 <i class="fas fa-arrow-right icon"></i>
      </li>
      <li @click="navigateTo('/notice')">
        공지사항 <i class="fas fa-arrow-right icon"></i>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.menu-card {
  background-color: #fff; /* 카드 배경 색상 */
  padding: 20px; /* 패딩 */
  border-radius: 8px; /* 모서리 둥글게 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 입체적인 그림자 */
  max-width: 400px; /* 최대 너비 설정 */
  margin: 20px auto; /* 중앙 정렬 */
}

.menu-title {
  margin: 0 0 15px 0; /* 소제목과 메뉴 간의 간격 */
  font-size: 24px; /* 소제목 크기 */
  text-align: center; /* 중앙 정렬 */
}

ul {
  list-style-type: none; /* 기본 목록 스타일 제거 */
  padding: 0; /* 패딩 제거 */
  margin: 0; /* 마진 제거 */
}

li {
  cursor: pointer; /* 커서 변경 */
  padding: 15px; /* 각 항목 패딩 */
  border-bottom: 1px solid #ccc; /* 하단 구분선 */
  display: flex; /* 수평 정렬을 위한 flex 설정 */
  justify-content: space-between; /* 항목 간 간격 조정 */
  align-items: center; /* 수직 정렬 */
  transition: background-color 0.3s; /* 배경색 전환 효과 */
}

li:hover {
  background-color: #e0e0e0; /* 호버 시 배경색 변경 */
}

.icon {
  margin-left: auto; /* 아이콘을 오른쪽으로 이동 */
}
</style>
