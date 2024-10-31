<template>
  <div class="search-container">
    <div class="search-box">
      <h2>유치원 상세 검색</h2>
      <form @submit.prevent="handleSearch">
        <div class="form-group row">
          <div class="col">
            <label for="region">시도</label>
            <select v-model="form.region" id="region" required>
              <option value="" disabled>선택하세요</option>
              <option value="서울">서울</option>
              <option value="부산">부산</option>
              <option value="대구">대구</option>
              <option value="인천">인천</option>
              <option value="광주">광주</option>
              <option value="대전">대전</option>
              <option value="울산">울산</option>
            </select>
          </div>
          <div class="col">
            <label for="district">군/구</label>
            <select v-model="form.district" id="district" required>
              <option value="" disabled>선택하세요</option>
              <option value="강남구">강남구</option>
              <option value="강서구">강서구</option>
              <option value="종로구">종로구</option>
              <option value="중구">중구</option>
              <option value="동작구">동작구</option>
              <option value="서초구">서초구</option>
            </select>
          </div>
        </div>

        <div class="form-group row">
          <div class="col">
            <label for="building-floors">건물 층수</label>
            <select v-model="form.buildingFloors" id="building-floors" required>
              <option value="" disabled>선택하세요</option>
              <option value="1">1층</option>
              <option value="2">2층</option>
              <option value="3">3층</option>
              <option value="4">4층</option>
              <option value="5">5층 이상</option>
            </select>
          </div>
          <div class="col">
            <label for="start-time">시작 시간</label>
            <input type="time" v-model="form.startTime" id="start-time" required />
          </div>
          <div class="col">
            <label for="end-time">종료 시간</label>
            <input type="time" v-model="form.endTime" id="end-time" required />
          </div>
        </div>

        <div class="form-group checkbox-group row">
          <div class="col">
            <label>
              <input type="checkbox" v-model="form.afterSchool" /> 방과후 수업 여부
            </label>
          </div>
          <div class="col">
            <label>
              <input type="checkbox" v-model="form.bus" /> 통학 버스 유무
            </label>
          </div>
        </div>

        <button type="submit">검색</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        region: '',
        district: '',
        buildingFloors: '',
        startTime: '',
        endTime: '',
        afterSchool: false,
        bus: false,
      },
    };
  },
  methods: {
    handleSearch() {
      // 검색 로직을 추가하세요.
      console.log("검색 조건:", this.form);
    },
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  padding: 20px; /* 여백 추가 */
}

.search-box {
  padding: 20px;
  background-color: #fff;
  border-radius: 12px; /* 모서리 둥글게 */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* 입체적인 그림자 */
  max-width: 600px;
  width: 100%; /* 너비 100% */
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px; /* 제목 크기 조정 */
}

.form-group {
  margin-bottom: 15px;
}

.row {
  display: flex;
  justify-content: space-between;
}

.col {
  flex: 1;
  margin-right: 10px; /* 열 사이의 간격 */
}

.col:last-child {
  margin-right: 0; /* 마지막 열은 간격 없음 */
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px; /* 레이블 크기 조정 */
}

select,
input[type="time"] {
  width: 100%;
  padding: 8px; /* 입력 크기 조정 */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px; /* 입력 필드 크기 조정 */
}

.checkbox-group {
  display: flex;
  justify-content: space-between;
  font-size: 14px; /* 체크박스 크기 조정 */
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 16px; /* 버튼 크기 조정 */
}

button:hover {
  background-color: #0056b3; /* 호버 효과 */
}
</style>
