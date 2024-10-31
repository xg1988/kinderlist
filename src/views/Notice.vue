<template>
  <div class="notice-list">
    <h2>공지사항</h2>
    <div
      v-for="(notice, index) in notices"
      :key="index"
      class="notice-item"
    >
      <div class="notice-header" @click="toggleNotice(index)">
        <h3>{{ notice.title }}</h3>
        <span class="date">{{ notice.date }}</span>
      </div>
      <div
        v-if="activeNotice === index"
        class="notice-content"
      >
        <p>{{ notice.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNotice: null,
      notices: [
        {
          title: '첫 번째 공지사항',
          content: '이것은 첫 번째 공지사항의 내용입니다.',
          date: '2024-10-30',
        },
        {
          title: '두 번째 공지사항',
          content: '이것은 두 번째 공지사항의 내용입니다.',
          date: '2024-10-29',
        },
        {
          title: '세 번째 공지사항',
          content: '이것은 세 번째 공지사항의 내용입니다.',
          date: '2024-10-28',
        },
      ],
    };
  },
  methods: {
    toggleNotice(index) {
      // 클릭된 공지사항을 열고 닫기
      this.activeNotice = this.activeNotice === index ? null : index;
    },
  },
};
</script>

<style scoped>
.notice-list {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.notice-item {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.notice-header {
  padding: 15px;
  cursor: pointer;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
}

.notice-header h3 {
  margin: 0;
}

.date {
  color: #888;
  font-size: 14px;
}

.notice-content {
  padding: 15px;
  border-top: 1px solid #ccc;
}
</style>
