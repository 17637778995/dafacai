<template>
  <div class="footer-bar">
    <nav>
      <router-link
        v-for="item in menu"
        :key="item.path"
        :to="item.path"
        active-class="active"
    >
      <img :src="item.icon" alt="">
      <img :src="item.selectIcon" class="selected" alt="">
      <span>{{item.text}}</span>
    </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'footer-bar',
  data () {
    return {
      menu: [
        {
          path: '/home',
          icon: require('../../assets/images/car2.png'),
          selectIcon: require('../../assets/images/car.png'),
          text: '首页'
        },
        {
          path: '/class',
          icon: require('../../assets/images/class2.png'),
          selectIcon: require('../../assets/images/class.png'),
          text: '分类'
        },
        {
          path: '/car',
          icon: require('../../assets/images/car2.png'),
          selectIcon: require('../../assets/images/car.png'),
          text: '购物车'
        },
        {
          path: '/my',
          icon: require('../../assets/images/my2.png'),
          selectIcon: require('../../assets/images/my.png'),
          text: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-bar {
  @include wh(100%,auto);
  position: fixed;
  bottom: 0;
  background: #fff;
  z-index: 20;
  nav {
    @include flex(row);
    a{
      flex: 1;
      @include flex(column, center, center);
      color: $color-grey;
      padding: 8px 0;
      font-size: 20px;
      span{
        font-size: 12px;
      }
      img {
        @include wh(48px, 48px);
        display: block;
        &.selected {
          display: none;
        }
      }
      &.active{
        color: $color-primary;
        img {
          display: none;
          &.selected {
            display: block;
          }
        }
      }
    }
  }
}
</style>
