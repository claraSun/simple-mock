<template>
  <a @click.stop.prevent="linkTo(url)" :link="link" :class="$route.name === 'my' ? 'my-widget-active' : 'my-widget'">
    <i class="my-widget-icon"></i>
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
  },
  data() {
    return {
      url: ''
    }
  },
  created() {
    this.url = this.link
  },
  methods: {
    linkTo(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-widget {
  display: block;
  color: $title_text;
  font-size: 12px;
  line-height: 12px;
  .my-widget-icon{
    display: block;
    background: url('./../assets/images/my.png') top center no-repeat;
    width: 25px;
    height: 25px;
    margin: auto;
    background-size: contain;
  }
}
.my-widget-active {
  display: block;
  color: $main_color;
  font-size: 12px;
  line-height: 12px;
  .my-widget-icon{
    display: block;
    background: url('./../assets/images/my_r.png') top center no-repeat;
    width: 25px;
    height: 25px;
    margin: auto;
    background-size: contain;
  }
}
</style>