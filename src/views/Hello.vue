<template>
  <div class="app-intro">
    <h1>앱 소개</h1>
    <img :src="KinderIcon" alt="설명" style="width: 180px;"/>
    <p>
      이 앱은 유치원 관련해서 정보를 손쉽게 검색하고 알아보기 위한 앱입니다.
    </p>
    <p>
      로그인을 하면 즐겨찾기도 해놓고 간편하게 정보를 볼 수 있습니다.
    </p>
    <p>
      추후 기능을 계속 추가하고 업그레이드 할 예정입니다.
    </p>
    <button class="explore-button" @click="exploreMore">메인으로 가기</button>
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
    exploreMore() {
      // 더 알아보기를 클릭했을 때의 동작을 추가할 수 있습니다.
      console.log("더 알아보기를 클릭했습니다.");
      this.$router.push('/')
    },
  },
};
</script>

<style scoped>
.app-intro {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
}

.app-intro h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.app-intro p {
  font-size: 16px;
  margin-bottom: 15px;
}

.explore-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.explore-button:hover {
  background-color: #0056b3; /* 호버 효과 */
}
</style>
