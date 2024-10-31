<template>
  <div class="user-info-container">
    <h2>유저 정보</h2>
    
    <div class="profile-section">
      <img :src="user.profileImage" alt="Profile Image" class="profile-image" />
    </div>
    
    <div class="user-details">
      <p><strong>아이디:</strong> {{ user.id }}</p>
      <p><strong>닉네임:</strong> {{ user.nickname }}</p>
    </div>

    <button @click="handleDeleteAccount" class="delete-account-button">
      회원 탈퇴
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        profileImage: 'https://randomuser.me/api/portraits/men/1.jpg', // 예시 이미지 URL
        id: 'user123',
        nickname: '사용자닉네임',
      },
    };
  },
  methods: {
    handleDeleteAccount() {
      // 회원 탈퇴 처리 로직
      if (confirm('정말로 회원 탈퇴하시겠습니까?')) {
        // 탈퇴 처리 코드 (예: API 호출)
        alert('회원 탈퇴가 완료되었습니다.');
        // 여기서 추가적인 로직을 구현하세요 (예: 로그아웃, 페이지 이동 등)
      }
    },
  },
};
</script>

<style scoped>
.user-info-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
}

.profile-section {
  margin-bottom: 20px;
}

.profile-image {
  width: 120px; /* 프로필 이미지 크기 조정 */
  height: 120px; /* 프로필 이미지 크기 조정 */
  border-radius: 50%;
}

.user-details {
  text-align: left;
  margin-bottom: 20px;
}

.delete-account-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff4d4d;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.delete-account-button:hover {
  background-color: #ff1a1a;
}
</style>
