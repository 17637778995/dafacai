<template>
  <div>
    <user-info :info="info"/>
    <!-- <order-menu />
    <service-menu /> -->
  </div>
</template>

<script>
import UserInfo from './components/UserInfon.vue'
export default {
  name: 'my',
  data () {
    return {
      info: {}
    }
  },
  components: {
    UserInfo
  },
  created () {
    this.fetchUserInfo()
  },
  methods: {
    fetchUserInfo () {
      this.$api.user.info().then((res) => {
        this.info = res.info
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
