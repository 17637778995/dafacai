<template>
  <div class="card">
    <header>{{title}}</header>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 0 32px;
  header {
    text-align: center;
    font-size: 32px;
    color: #323232;
    height: 96px;
    line-height: 96px;
  }
}
</style>
