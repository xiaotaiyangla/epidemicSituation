<template>
  <div class="home rela">
    <img src="../../static/images/iocn-dre.png" alt="">
    <section class="inputBox abso">
      <div class="input_main rela">
        <img class="icons abso" src="../../static/images/iocn-1.png" alt="">
        <input type="text" v-model="phone" @input="phoneInput">
        <img class="abso draw" src="../../static/images/iocn-lier.png" alt="" v-if="phoneOk">
        <img class="abso draw" src="../../static/images/iocn-ree.png" alt="" v-else>
      </div>
      <div class="input_main rela">
        <img class="icons abso" src="../../static/images/iocn-tr.png" alt="">
        <input type="password" v-model="password" @input="passInput">
        <img class="abso draw" src="../../static/images/iocn-lier.png" alt="" v-if="passOk">
        <img class="abso draw" src="../../static/images/iocn-ree.png" alt="" v-else>
      </div>
      <div class="submit" @click="submit">登录</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
        phone: "",
        password: "",
        phoneOk: false,
        passOk: false
    }
  },
    created() {
      if (window.api) {
          if ($api.getStorage('username')) {
              this.phoneOk = true
              this.phone = $api.getStorage('username')
          }
          if ($api.getStorage('password')) {
              this.passOk = true
              this.password = $api.getStorage('password')
          }
      } else {
          if (window.localStorage.getItem("username")) {
              this.phoneOk = true
              this.phone = window.localStorage.getItem("username")
          }
          if (window.localStorage.getItem("password")) {
              this.passOk = true
              this.password = window.localStorage.getItem("password")
          }
      }
    },
    methods: {
        phoneInput(e) {
            this.phone = e.target.value
            this.phoneOk = this.phone.length != 0? true: false
        },
        passInput(e) {
            this.password = e.target.value
            this.passOk = this.password.length != 0? true: false
        },
        submit () {
            let _this = this
            if (_this.phoneOk && _this.passOk) {
                if (window.api) {
                    $api.setStorage('username', _this.phone);
                    $api.setStorage('password', _this.password);
                } else {
                    window.localStorage.setItem("username", _this.phone)
                    window.localStorage.setItem("password", _this.password)
                }
                let fc;
                if (window.api) {
                    fc = {"username": _this.phone, "password": _this.password}
                } else {
                    fc = new URLSearchParams();
                    fc.append('username', _this.phone)
                    fc.append('password', _this.password)
                }
                _this.httpRequest("/ipadlogin/checkLogin", "post", fc)
                    .then(res => {
                        if (+res.code === 0) {
                            _this.$message('登陆成功！');
                            console.log(JSON.stringify(res));
                            setTimeout(function () {
                                _this.$router.push("/function")
                            }, 500)
                        } else {
                            _this.$message('登陆失败，请重试！');
                        }
                    }).catch(function (error) {
                    console.log(error);
                });
            } else {
                _this.$message('填写完整的信息哦');
            }
        }
    }
}
</script>

<style lang="stylus" scope>
  .home
    width 100vw
    height 100vh
    background url("../../static/images/BG.png") no-repeat center
    background-size 100%
    padding-top 11vw
    >img
      width 32vw
      display block
      margin 0 auto
    .inputBox
      width 30vw
      height 25vw
      right 14vw
      top 50%
      transform translateY(-25%)
      .input_main
        width: 100%
        height 4.5vw
        input
          width: 100%
          height 100%
          background: transparent
          border-bottom 2px solid #3b82d2
          padding 0 4vw 0 6vw
          color: #a8ddfa
          font-size 2vw
        .icons
          width 2.4vw
          left 1vw
          top 50%
          transform translateY(-50%)
        .draw
          width 2vw
          right 1vw
          top 100%
          transform translateY(-160%)
      .input_main:nth-child(2)
        margin 6vw 0
        .icons
          width 2vw
      .submit
        width:75%
        height 5vw
        line-height: 5vw
        background: url("../../static/images/iocn-liets.png") no-repeat center
        border-radius 10vw
        text-align center
        font-size 2vw
        color #fff
        margin 0 auto
</style>
