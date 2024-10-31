<template>
  <div class="search-container">
    <div class="search-component">
      <h2>유치원 지역별 검색</h2>
      <div class="selects">
        <select class="form-control" v-model="selectedProvince" @change="updateDistricts">
          <option value="" disabled>시/도 선택</option>
          <option v-for="province in provinces" :key="province.name" :value="province.name">
            {{ province.name }}
          </option>
        </select>

        <select class="form-control" v-model="selectedDistrict">
          <option value="" disabled>군/구 선택</option>
          <option v-for="district in filteredDistricts" :key="district" :value="district">
            {{ district }}
          </option>
        </select>
      </div>
      <button @click="searchKindergartens" class="search-button">검색</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      provinces: [
        {
          name: "서울특별시",
          districts: ["강남구", "서초구", "송파구", "강동구"],
        },
        {
          name: "부산광역시",
          districts: ["해운대구", "수영구", "동래구", "사하구"],
        },
        {
          name: "인천광역시",
          districts: ["남동구", "부평구", "계양구", "서구"],
        },
        {
          name: "대구광역시",
          districts: ["수성구", "동구", "서구", "남구"],
        },
      ],
      selectedProvince: "",
      selectedDistrict: "",
      filteredDistricts: [],
    };
  },
  methods: {
    updateDistricts() {
      const selected = this.provinces.find(
        (province) => province.name === this.selectedProvince
      );
      this.filteredDistricts = selected ? selected.districts : [];
      this.selectedDistrict = ""; // 군/구 선택 초기화
    },
    searchKindergartens() {
      if (this.selectedProvince && this.selectedDistrict) {
        console.log(`검색된 유치원: ${this.selectedProvince}, ${this.selectedDistrict}`);
        // 실제 검색 로직 추가
      } else {
        alert("시/도와 군/구를 선택하세요.");
      }
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

.search-component {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 12px; /* 모서리 둥글게 */
  background-color: #ffffff; /* 배경 흰색 */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* 입체적인 그림자 */
  width: 400px; /* 너비 조정 */
}

.selects {
  margin-bottom: 15px;
}

select {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 150px; /* 너비 조정 */
}

.search-button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px; /* 버튼 위쪽 여백 */
  width: 100%; /* 버튼 너비 100% */
}

.search-button:hover {
  background-color: #0056b3; /* 호버 효과 */
}
</style>
