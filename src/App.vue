<template>
  <div id="app">
    <div class="bg"></div>
    <router-view />
  </div>
</template>

<script>
export default {
    created(){
          apiready = function() {
              api.setScreenOrientation({
                  orientation: 'landscape_left'
              });
          }
    }
}
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    .bg
      width: 100vw;
      height: 100vh;
      background-size: 100%;
      position fixed
      background: url('../static/images/bg-3.png') no-repeat center;
</style>
