<!--
 *返回的標頭有好幾種型式
 *1. 点了回上頁
 *2. 点了回首頁
-->
<template>
  <nav class="change-nav">
    <!-- <a v-if="isRouterPage" @click.stop.prevent="linkTo(url)" :link="link" :class="$route.name === 'acount' ? 'acount-widget-active' : 'acount-widget'">
    <span class="acount-widget-icon"></span>
    <span>
      <slot></slot>
    </span>
    </a> -->

    <a v-if="isPre" class="header" @click="goPre">
      <i class="mdi mdi-chevron-left"></i>
      <h5><slot></slot></h5>
      <span></span>
    </a>

    
  </nav>
  
</template>

<script>
export default {
  props: ['isPre'],
  data() {
    return {
      url: '',
    }
  },
  created() {
    this.url = this.link
  },
  methods: {
    goPre() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.change-nav {
  .header {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    height: 48px;
    border-bottom: 1px solid $breakUp_line;
    width: 100%;
    padding: 0;
    margin: 0;
    i {
      margin-left: 15px;
      display: block;
      font-size: 30px;
      line-height: 0;
      width: 30%;
      text-align: left;
    }
    h5 {
      width: 40%;
      display: block;
      font-size: 18px;
      text-align: center;
      font-weight: 500;
    }
    span {
      width: 30%;
    }
  }
}

</style>