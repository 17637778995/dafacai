<template>
  <div class="navigation">
    <router-link tag="dl" to="/">
      <dt><img src="@/assets/images/icon1.png" alt=""></dt>
      <dd>
        <h2>积分商城</h2>
        <p>超值美食兑换</p>
      </dd>
    </router-link>
    <router-link tag="dl" to="/">
      <dt><img src="@/assets/images/icon3.png" alt=""></dt>
      <dd>
        <h2>礼品卡</h2>
        <p>优质商品兑换</p>
      </dd>
    </router-link>
    <router-link tag="dl" to="/">
      <dt><img src="@/assets/images/icon2.png" alt=""></dt>
      <dd>
        <h2>口令</h2>
        <p>神秘好礼等你领</p>
      </dd>
    </router-link>
    <router-link tag="dl" to="/">
      <dt><img src="@/assets/images/icon3.png" alt=""></dt>
      <dd>
        <h2>菜谱</h2>
        <p>教你5分钟做大餐</p>
      </dd>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style lang="scss" scoped>
.navigation{
  padding: 0 32px;
  margin-top: -60px;
  position: relative;
  z-index: 100;
  dl {
    @include wh (100%, 176px);
    @include flex(row,center,center);
    background: #fff;
    box-shadow: 0px 8px 16px 0px rgba(50,50,50,0.05);
    border-radius: 16px;
    margin-top: 24px;
    padding: 0 40px;
    box-sizing: border-box;
    dt{
      @include wh(96px,96px);
      flex-shrink: 0;
      margin-right: 32px;
      img {
        @include wh (96px, 96px);
      }
    }
    dd{
      flex: 1;
      h2 {
        font-size: 32px;
        color: #323232;
      }
      p{
        font-size: 26px;
        color: #888888;
      }
    }
  }
}
</style>
