<template>
  <div class="menu">
    <nav>
      <a href="javascript:;"
      v-for="(item,index)
      in menu"
      :key="index"
      :class="{active: activeIndex === index}"
      @click="change(item, index)"
    >{{item.categoryName}}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'class-menu',
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  watch: {
    menu () {
      this.activeIndex = 0
    }
  },
  methods: {
    change (item, index) {
      this.activeIndex = index
      this.$emit('change', item, index)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  @include wh(160px, 100%);
  overflow: auto;
  background: #f7f7f7;
  a{
    @include wh(160px, 96px);
    line-height: 96px;
    font-size: 26px;
    color: #888888;
    text-align: center;
    &.active{
      background: #fff;
    }
  }
}
</style>
