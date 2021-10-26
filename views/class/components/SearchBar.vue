<template>
  <div class="search-bar">
    <input type="text" placeholder="搜索商品">
  </div>
</template>

<script>
export default {
  name: 'search-bar'
}
</script>

<style lang="scss" scoped>
.search-bar {
  @include wh(100%, 90px);
  display: flex;
  background: #ffffff;
  input {
    @include wh(auto, 64px);
    background: #F7F7F7;
    border: 0;
    flex: 1;
    margin: auto 24px;
    border-radius: 64px;
    text-indent: 40px;
  }
}
</style>
