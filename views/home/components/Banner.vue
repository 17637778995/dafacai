<template>
  <div class="banner">
    <img src="https://img14.360buyimg.com/n1/jfs/t1/115300/28/581/480681/5e8d7770Ea177afb3/3cb1b22020f31981.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'banner'
}
</script>

<style lang="scss" scoped>
.banner {
  @include wh(100%,auto);
  img{
    @include wh(100%,auto);
  }
}
</style>
