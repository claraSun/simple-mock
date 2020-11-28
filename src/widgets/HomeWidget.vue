<template>
  <a @click.stop.prevent="linkTo(url)" :link="link" :class="$route.name === 'home' ? 'home-img-active' : 'home-img'">
    <i class="home-icon"></i>
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
      url: '', 
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
.home-img {
  display: block;
  color: $title_text;
  font-size: 12px;
  line-height: 12px;
  .home-icon {
    display: block;
    background: url('./../assets/images/defult.png') top center no-repeat;
    width: 25px;
    height: 25px;
    margin: auto;
    background-size: contain;
  }
  &:hover {
    color: $main_color;
    .home-icon {
      background: url('./../assets/images/focused.png') top center no-repeat;
    }
  }
}
.home-img-active {
  display: block;
  color: $main_color;
  font-size: 12px;
  line-height: 12px;
  .home-icon {
    display: block;
    background: url('./../assets/images/focused.png') top center no-repeat;
    width: 25px;
    height: 25px;
    margin: auto;
    background-size: contain;
  }
}
</style>