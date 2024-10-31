<template>
  <div class="kindergarten-list">
    <!--<h2>유치원 정보 리스트</h2>-->
    <div class="kindergarten-container">
      <div v-for="kindergarten in kindergartens" :key="kindergarten.name" class="kindergarten-card">
        <div class="kindergarten-info">
          <div class="info">
            <strong>[{{ kindergarten.type }}] {{ kindergarten.city }} {{ kindergarten.district }}</strong>
            <p>{{ kindergarten.name }}</p>
            <p>운영시간: {{ kindergarten.hours }}</p>
          </div>
          <div class="button-group">
            <button @click="toggleLike(kindergarten)" class="like-button">
              <i :class="kindergarten.liked ? 'fas fa-heart' : 'far fa-heart'"></i>
            </button>
            <button class="detail-button" @click="goDetail()">상세보기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kindergartens: [
        {
          city: "서울",
          district: "강남구",
          name: "강남유치원",
          type: "공립",
          hours: "09:00 - 16:00",
          liked: false,
        },
        {
          city: "부산",
          district: "해운대구",
          name: "해운대유치원",
          type: "사립",
          hours: "08:30 - 17:30",
          liked: false,
        },
        {
          city: "인천",
          district: "남동구",
          name: "남동유치원",
          type: "공립",
          hours: "09:00 - 15:30",
          liked: false,
        },
        {
          city: "대구",
          district: "수성구",
          name: "수성유치원",
          type: "사립",
          hours: "09:00 - 18:00",
          liked: false,
        },
      ],
    };
  },
  methods: {
    toggleLike(kindergarten) {
      kindergarten.liked = !kindergarten.liked;
    },
    goDetail(){
      this.$router.push('/detail')
    }
  },
};
</script>

<style scoped>
.kindergarten-list {
  padding: 20px;
}

.kindergarten-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* 카드 간격 */
}

.kindergarten-card {
  flex: 1 1 250px; /* 기본 너비 250px로 조정 */
  background-color: #fff; /* 카드 배경 흰색 */
  border-radius: 8px; /* 모서리 둥글게 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 입체적인 그림자 */
  padding: 15px; /* 패딩 조정 */
  transition: transform 0.2s; /* 애니메이션 효과 */
}

.kindergarten-card:hover {
  transform: translateY(-2px); /* 호버 시 카드가 약간 떠오르는 효과 */
}

.kindergarten-info {
  display: flex; /* 수평 배치 */
  justify-content: space-between; /* 내용과 버튼 간의 간격 */
  align-items: center; /* 수직 정렬 */
  width: 100%; /* 전체 너비 사용 */
}

.info {
  flex-grow: 1; /* 정보 영역이 가능한 공간을 차지하게 함 */
}

.button-group {
  display: flex;
  flex-direction: column; /* 버튼을 세로로 배치 */
  align-items: flex-end; /* 오른쪽 정렬 */
}

.like-button, .detail-button {
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 80%; /* 버튼 너비를 카드의 80%로 설정 */
  margin-bottom: 5px; /* 버튼 간 간격 */
}

.like-button {
  background-color: #007bff;
  color: white;
  font-size: 1.25rem;
}

.like-button:hover {
  background-color: #0056b3;
}

.detail-button {
  background-color: #28a745;
  color: white;
}

.detail-button:hover {
  background-color: #218838;
}
</style>
