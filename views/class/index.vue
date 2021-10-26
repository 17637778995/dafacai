<template>
  <div class="class-page">
    <search-bar />
    <div class="content">
      <class-menu  class="left-menu" :menu="leftMenu" @change="leftMenuChange"/>
      <div class="right-content">
        <class-menu
          class="right-menu"
          :menu="rightMenu"
          @change="rightMenuChange"
        />
        <div class="product-list">
          <al-product-list :list="products"/>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import ClassMenu from './components/ClassMenu.vue'
export default {
  name: 'class',
  components: {
    SearchBar,
    ClassMenu
  },
  data () {
    return {
      leftMenu: [],
      rightMenu: [],
      productsParams: {
        page: 1,
        page_size: 10,
        categoryId: 1
      },
      products: []
    }
  },
  watch: {
    productsParams: {
      handler: 'fetchProductList',
      deep: true
    }
  },
  created () {
    this.fetchMenuData()
    this.fetchProductList()
  },
  methods: {
    async fetchMenuData () {
      const res = await this.$api.class.menu()
      this.leftMenu = res.data
      this.rightMenu = [{
        categoryName: '全部',
        categoryId: res.data[0].categoryId
      }].concat(res.data[0].children)
      console.log(res)
    },
    async fetchProductList () {
      if (this.productsParams.page === 1) { /*
      每次改变都从第一页开始，让productsParams
      page=== 1，window的scrollTo的X，Y都等于0
      */
        window.scrollTo(0, 0)
      }
      const res = await this.$api.product.list(this.productsParams)
      if (this.productsParams.page === 1) {
        this.products = res.data
      } else {
        this.products = this.products.concat(res.data)
      }
    },
    leftMenuChange (item, index) {
      this.productsParams.categoryId = item.categoryId
      this.productsParams.page = 1
      const menu = item.children || []
      this.rightMenu = [{
        categoryName: '全部',
        categoryId: item.categoryId
      }].concat(menu)
    },
    rightMenuChange (item, index) {
      this.productsParams.categoryId = item.categoryId
      this.productsParams.page = 1
    }
  },
  onScrollBottom () {
    this.productsParams.page += 1
  }
}
</script>

<style lang="scss" scoped>
.class-page {
  @include wh(100vw,auto);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .search-bar {
    flex-shrink: 0;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .content {
    flex: 1;
    height: calc(100vh - 90px - 96px);
    background: #fff;
    display: flex;
    .left-menu {
      flex-shrink: 0;
      position: fixed;
    }
    .right-content {
      flex: 1;
      display: flex;
      overflow: hidden;
      flex-direction: column;
      margin-left: 160px;
      position: relative;
    }
    ::v-deep .right-menu {
      width: 100%;
      height: 64px;
      overflow: auto;
      background: #fff;
      flex-shrink: 0;
      position: fixed;
      top: 90px;
      z-index: 100;
      nav {
        display: flex;
        a {
          line-height: 64px;
          height: 64px;
          flex-shrink: 0;
          font-size: 24px;
          background: #fff;
          width: auto;
          padding: 0 20px;
          &.active {
            color: #000;
            font-weight: bold;
          }
        }
      }
    }
    .product-list {
      flex: 1;
      overflow: auto;
      margin-top: 24px;
    }
  }
}
</style>
