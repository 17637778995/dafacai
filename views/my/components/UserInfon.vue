<template>
  <div class="user-info">
    <dl>
      <dt><img :src="info.photo" alt=""></dt>
      <dd>
        <h3>{{info.nickname}}</h3>
        <p>{{info.phone}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info{
  @include wh (100%,296px);
  padding-bottom: 48px;
  background: linear-gradient(134deg, #FF7766 0%, #DD1111 100%);
  dl {
    @include wh(auto,100%);
    @include flex (row, center);
    padding: 0 32px;
    dt{
      @include wh(144px, 144px);
      flex-shrink: 0;
      border: 4px solid #ffffff;
      margin-right: 32px;
      img {
        border-radius: 100%;
        @include wh(144px, 144px);
      }
    }
    dd {
      @include flex(column,flex-start,center);
      h3 {
        font-size: 36px;
        color: #ffffff;
      }
      p{
        font-size: 28px;
        color: #ffffff;
        margin-top: 20px;
      }
    }
  }
}
</style>
