<template>
  <div id="app">
    <router-view></router-view>
    <!-- <div class="over-layer"></div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  },
}
</script>

<style lang="scss">

#app {
  font-family: SourceHanSansCN-Regular, -apple-system, BlinkMacSystemFont,
    "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
}


</style>
