<template>
  <div class="switch-tab">
    <router-view></router-view>
    <al-footer-bar />
  </div>
</template>

<script>
export default {
  name: 'al-main',
  mounted () {
    console.log(this.$alert)
  }
}
</script>

<style lang="scss" scoped>
.switch-tab{
  padding-bottom: 96px;
}
</style>
