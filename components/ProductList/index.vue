<template>
  <div class="product-list">
    <dl v-for="(item,index) in list" :key="index">
      <dt>
        <img :src="item.img" alt="">
      </dt>
      <dd>
        <h2>{{item.name}}</h2>
        <p>{{item.price}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  dl {
    @include flex(row);
    @include border-1px(bottom, #eee);
    padding: 24px;
    box-sizing: border-box;
    dt {
      @include wh(176px, 176px);
      flex-shrink: 0;
      margin-right: 24px;
      img {
        @include wh(176px, 176px);
      }
    }
    dd {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        @include ellipsis(2);
        font-size: 28px;
      }
      p {
        color: #dd2222;
        font-size: 24px;
        b {
          font-size: 36px;
        }
      }
    }
  }
}
</style>
