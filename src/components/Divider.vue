<template>
  <div class="divider" :style="{ borderColor: color, height: thickness + 'px' }"></div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    color: {
      type: String,
      default: '#ccc', // 기본 색상
    },
    thickness: {
      type: Number,
      default: 2, // 기본 두께
    },
    dashed: {
      type: Boolean,
      default: false, // 기본적으로 실선
    },
  },
};
</script>

<style scoped>
.divider {
  width: 100%; /* 전체 너비 */
  border-style: solid; /* 기본 실선 */
}

.dashed {
  border-style: dashed; /* 점선 스타일 */
}
</style>
