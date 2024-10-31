<template>
  <div class="signup-container">
    <h2>회원가입</h2>
    <img :src="KinderIcon" alt="설명" style="width: 180px;"/>
    <form @submit.prevent="handleSignup">
      <div class="form-group">
        <label for="nickname">닉네임</label>
        <input type="text" id="nickname" v-model="form.nickname" required maxlength="20" />
      </div>

      <div class="form-group">
        <label for="age">나이</label>
        <select id="age" v-model="form.age" required>
          <option value="" disabled>선택하세요</option>
          <option v-for="age in ages" :key="age" :value="age">{{ age }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="location">사는 지역</label>
        <select id="location" v-model="form.location" required>
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

      <div class="form-group">
        <label>
          <input type="checkbox" v-model="form.terms" required />
          약관에 동의합니다.
        </label>
      </div>

      <button type="submit">가입하기</button>
    </form>
  </div>
</template>

<script>
import KinderIcon from '../assets/kinder_icon.jpg';
export default {
  data() {
    return {
      form: {
        nickname: '',
        age: '',
        location: '',
        terms: false,
        Kin
      },
      ages: Array.from({ length: 100 }, (_, i) => i + 1), // 1세부터 100세까지
    };
  },
  methods: {
    handleSignup() {
      console.log("회원가입 정보:", this.form);
    },
  },
};
</script>

<style scoped>
.signup-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* 패딩과 테두리를 포함한 너비 계산 */
  overflow: hidden; /* 오버플로우 숨기기 */
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 생략 기호(...) 사용 */
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
