<template>
  <div class="details-container">
    <div class="header">
      <button @click="goBack" class="back-button">목록으로 돌아가기</button>
    </div>

    <h2>{{ kindergarten.name }} 상세 정보</h2>
    
    <div class="info-section card">
      <h3>기본 정보</h3>
      <table class="info-table">
        <tbody>
          <tr>
            <th>운영시간</th>
            <td>{{ kindergarten.operatingHours }}</td>
          </tr>
          <tr>
            <th>구분</th>
            <td>{{ kindergarten.type }}</td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>{{ kindergarten.phone }}</td>
          </tr>
          <tr>
            <th>홈페이지</th>
            <td><a :href="kindergarten.website" target="_blank">{{ kindergarten.website }}</a></td>
          </tr>
        </tbody>
      </table>

      <button 
        @click="toggleLike" 
        class="like-button" 
        :class="{ liked: isLiked }"
      >
        <i :class="isLiked ? 'fas fa-heart' : 'far fa-heart'"></i> 좋아요
      </button>
    </div>


    <div class="tabs card">
      <h3>추가 정보</h3>
      <div class="tab-buttons">
        <button v-for="tab in tabs" :key="tab" @click="selectTab(tab)" :class="{ active: currentTab === tab }">
          {{ tab }}
        </button>
      </div>

      <div class="tab-content">
        <div v-if="currentTab === '건물 정보'">
          <table class="info-table">
            <tbody>
              <tr>
                <th>층수</th>
                <td>{{ kindergarten.building.floors }}</td>
              </tr>
              <tr>
                <th>총 면적</th>
                <td>{{ kindergarten.building.area }}㎡</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="currentTab === '수업 정보'">
          <table class="info-table">
            <tbody>
              <tr>
                <th>수업 일수</th>
                <td>{{ kindergarten.classDays }}일</td>
              </tr>
              <tr>
                <th>방과후 프로그램</th>
                <td>{{ kindergarten.afterSchoolPrograms.join(', ') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="currentTab === '안전 정보'">
          <table class="info-table">
            <tbody>
              <tr>
                <th>안전 교육</th>
                <td>{{ kindergarten.safetyEducation }}</td>
              </tr>
              <tr>
                <th>비상 대피 계획</th>
                <td>{{ kindergarten.emergencyPlan }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="currentTab === '시설 정보'">
          <table class="info-table">
            <tbody>
              <tr>
                <th>놀이터</th>
                <td>{{ kindergarten.playground ? '있음' : '없음' }}</td>
              </tr>
              <tr>
                <th>주차 공간</th>
                <td>{{ kindergarten.parking ? '있음' : '없음' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    
    <div class="map-container card">
      <h3>유치원 위치</h3>
      <naver-map
            style="width: 100%; height: 400px"
            :map-options="mapOptions"
        >
            <naver-marker
            latitude="37.51347"
            longitude="127.041722"
            />
        </naver-map>
    </div>
  </div>
</template>

<script>
import { NaverMap } from 'vue3-naver-maps'
import { NaverMarker } from 'vue3-naver-maps'

const mapOptions = {
  latitude: 37.51347,
  longitude: 127.041722,
  zoom: 13,
}

export default {
  components: {
    NaverMarker,
    NaverMap
  },
  data() {
    return {
      currentTab: '건물 정보',
      tabs: ['건물 정보', '수업 정보', '안전 정보', '시설 정보'],
      isLiked: false,
      kindergarten: {
        name: '유치원 이름',
        operatingHours: '09:00 - 18:00',
        type: '사립',
        phone: '010-1234-5678',
        website: 'http://example-kindergarten.com',
        latitude: 37.5665,
        longitude: 126.978,
        building: {
          floors: 3,
          area: 300,
        },
        classDays: 5,
        afterSchoolPrograms: ['미술', '체육'],
        safetyEducation: '정기 교육',
        emergencyPlan: '매년 훈련',
        playground: true,
        parking: false,
      },
    };
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab;
    },
    toggleLike() {
      this.isLiked = !this.isLiked;
    },
    goBack() {
      this.$router.push('/'); // 목록 페이지로 이동
    },
  },
};
</script>

<style scoped>
.details-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 20px auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.back-button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.like-button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
}

.like-button.liked {
  color: red;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.info-section, .map-container, .tabs {
  margin-bottom: 20px;
  padding: 15px; /* 카드 안쪽 여백 */
  background-color: #fff; /* 카드 배경 흰색 */
  border-radius: 8px; /* 모서리 둥글게 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 입체적인 그림자 */
}

.info-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.info-table th,
.info-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.info-table th {
  background-color: #f4f4f4;
}

.map-container {
  text-align: center;
  margin-bottom: 20px;
}

.tabs {
  margin-top: 20px;
}

.tab-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.tab-buttons button {
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
  margin: 0 5px;
}

.tab-buttons button.active {
  background-color: #0056b3; /* 활성화된 탭 색상 */
}

.tab-content {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.map-image {
  max-width: 100%;
  border-radius: 5px;
}
</style>
