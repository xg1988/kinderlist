<template>
  <div class="kindergarten-details">
    <h1>{{ kindergarten.name }}</h1>
    <div class="basic-info">
      <p><strong>운영시간:</strong> {{ kindergarten.operatingHours }}</p>
      <p><strong>구분:</strong> {{ kindergarten.type }}</p>
      <p><strong>전화번호:</strong> {{ kindergarten.phone }}</p>
      <p><strong>홈페이지:</strong> <a :href="kindergarten.website" target="_blank">{{ kindergarten.website }}</a></p>
      <button 
        @click="toggleLike" 
        class="like-button" 
        :class="{ liked: isLiked }"
      >
        <i :class="isLiked ? 'fas fa-heart' : 'far fa-heart'"></i> 좋아요
      </button>
    </div>

    <div class="map">
      <h3>지도</h3>
      <img :src="kindergarten.mapUrl" alt="유치원 위치 지도" />
    </div>

    <div class="tabs">
      <ul class="tab-list">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
        >
          {{ tab.title }}
        </li>
      </ul>

      <div class="tab-content">
        <div v-if="activeTab === 0">
          <h3>건물 정보</h3>
          <p>{{ kindergarten.buildingInfo }}</p>
        </div>
        <div v-if="activeTab === 1">
          <h3>수업 일수</h3>
          <p>{{ kindergarten.classDays }}</p>
        </div>
        <div v-if="activeTab === 2">
          <h3>방과 후 정보</h3>
          <p>{{ kindergarten.afterSchoolInfo }}</p>
        </div>
        <div v-if="activeTab === 3">
          <h3>안전 교육</h3>
          <p>{{ kindergarten.safetyEducation }}</p>
        </div>
        <div v-if="activeTab === 4">
          <h3>특별 프로그램</h3>
          <p>{{ kindergarten.specialPrograms }}</p>
        </div>
        <div v-if="activeTab === 5">
          <h3>교사 정보</h3>
          <p>{{ kindergarten.teacherInfo }}</p>
        </div>
        <div v-if="activeTab === 6">
          <h3>시설 소개</h3>
          <p>{{ kindergarten.facilityInfo }}</p>
        </div>
        <div v-if="activeTab === 7">
          <h3>부모 참여 프로그램</h3>
          <p>{{ kindergarten.parentPrograms }}</p>
        </div>
      </div>
    </div>

    <button class="list-button" @click="goToList">목록으로 돌아가기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      isLiked: false,
      tabs: [
        { title: '건물 정보' },
        { title: '수업 일수' },
        { title: '방과 후 정보' },
        { title: '안전 교육' },
        { title: '특별 프로그램' },
        { title: '교사 정보' },
        { title: '시설 소개' },
        { title: '부모 참여 프로그램' },
      ],
      kindergarten: {
        name: '예시 유치원',
        operatingHours: '오전 9시 - 오후 5시',
        type: '공립',
        phone: '010-1234-5678',
        website: 'https://example-kindergarten.com',
        mapUrl: 'https://via.placeholder.com/600x300.png?text=유치원+위치',
        buildingInfo: '3층 건물, 총 10개의 교실',
        classDays: '주 5일, 월요일부터 금요일까지',
        afterSchoolInfo: '방과 후 프로그램 운영',
        safetyEducation: '정기적인 안전 교육 실시',
        specialPrograms: '미술, 음악, 체육 등 특별 프로그램 운영',
        teacherInfo: '총 5명의 교사, 모두 자격증 보유',
        facilityInfo: '유치원 내 놀이터와 체육관 보유',
        parentPrograms: '부모 참여 수업 및 행사 운영',
      },
    };
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked;
    },
    goToList() {
      // 목록으로 돌아가는 로직 추가
      console.log("목록으로 돌아갑니다.");
      this.$router.push('/')
    },
  },
};
</script>

<style scoped>
.kindergarten-details {
  padding: 20px;
  background-color: #fff;
}

.basic-info,
.map,
.tabs {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.map img {
  width: 100%;
  height: auto;
}

.tabs {
  border-top: 1px solid #ccc;
}

.tab-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 열로 구성 */
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-bottom: 2px solid #ccc; /* 탭 구분선 */
}

.tab-list li {
  cursor: pointer;
  padding: 10px;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
}

.tab-list li:hover {
  background-color: #f0f0f0; /* 호버 효과 */
}

.tab-list li.active {
  background-color: #007bff; /* 선택된 탭의 배경색 */
  color: white; /* 선택된 탭의 글자색 */
}

.tab-content {
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
}

.like-button {
  background-color: #fff; /* 기본 배경색 */
  border: 2px solid #ccc; /* 테두리 색상 */
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s, color 0.3s;
}

.like-button.liked {
  background-color: #007bff; /* 활성화된 배경색 */
  color: white; /* 활성화된 글자색 */
}

.list-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
