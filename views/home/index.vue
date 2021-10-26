<template>
  <div>
    <banner />
    <navigation />
    <al-card title="新品推荐">
      列表
    </al-card>
    <al-card title="人气推荐">
      列表
    </al-card>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Navigation from './components/Navigation.vue'
export default {
  name: 'home',
  components: {
    Banner,
    Navigation
  },
  onScrollBottom () {
    console.log('哈哈哈哈哈哈')
  }
}
</script>

<style lang="scss" scoped>

</style>
