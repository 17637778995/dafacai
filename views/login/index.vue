<template>
  <div class="login-page">
    <header class="login-header">
      <h2>登录</h2>
      <p>请输入找好密码登录商城</p>
    </header>
    <div class="form">
      <div class="form-item">
        <input type="text" placeholder="请输入手机号" v-model="loginParams.phone">
      </div>
      <div class="form-item">
        <input type="text" placeholder="请输入验证码" v-model="loginParams.code">
        <button
        v-if="time == 0"
        href="javascript:;"
        class="send-code"
        @click="sendMsgCode"
        :disabled= "isSend"
      >获取验证码</button>
        <button
        v-else
        href="javascript:;"
        :disabled= "true"
      >{{time}}秒后重新获取验证码</button>
      </div>
      <button class="login-btn" @click="login">手机号登录</button>
      <p>登录代表已阅读并同意 <a href="javascript:;">《用户协议》</a>及<a href="javascript:;">《隐私条款》</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      time: 0,
      loginParams: {
        phone: '',
        code: ''
      }
    }
  },
  computed: {
    isSend () {
      return this.loginParams.phone.length !== 11
    }
  },
  methods: {
    sendMsgCode () {
      this.time = 10
      const interval = setInterval(() => {
        this.time -= 1
        if (this.time <= 0) {
          clearInterval(interval)
        }
      }, 1000)
      this.$api.user.send_msg_code({
        phone: this.loginParams.phone
      }).then((res) => {
        console.log(res)
      })
    },
    login () {
      this.$api.user.login(this.loginParams).then(() => {
        console.log('成功')
        const path = this.$route.query.callback || '/home'
        this.$router.replace(path)
      }).catch((e) => {
        alert(e.response.data.msg)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page{
  @include wh(100vw,100vh);
  background: #fff;
  .login-header {
    margin: 80px;
    h2 {
      font-size: 60px;
      color: #333;
    }
    p{
      font-size: 32px;
      color: #333;
    }
  }
  .form {
    margin: 80px;
    .form-item {
      @include flex(row);
      @include border-1px(bottom, #E6E6E6);
      input {
        flex: 1;
        line-height: 96px;
        border: 0;
        font-size: 28px;
      }
    }
    .send-code {
      font-size: 28px;
      line-height: 96px;
      border: 0;
      background: transparent;
      color: #DD1111;
      &:disabled {
        opacity: 0.5;
      }
    }
    .login-btn {
      margin: 0 32px;
      display: block;
      width: 100%;
      height: 96px;
      border: none;
      border-radius: 96px;
      font-size: 28px;
      color: #fff;
      margin-top: 72px;
      background: linear-gradient(134deg, #FF7766 0%, #DD1111 100%);
    }
    P{
      font-size: 24px;
      text-align: center;
      margin-top: 42px;
      color: #9E9E9E;
    }
    a{
      color: #cf5a5a ;
    }
  }
}
</style>
