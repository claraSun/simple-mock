<template>
  <a @click.stop.prevent="linkTo(url)" :link="link" :class="$route.name === 'game' ? 'game-center-active' : 'game-center'">
    <i class="game-center-icon"></i>
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
.game-center {
  display: block;
  color: $title_text;
  font-size: 12px;
  line-height: 12px;
  .game-center-icon{
    display: block;
    background: url('./../assets/images/gamecenter.png') top center no-repeat;
    width: 25px;
    height: 25px;
    margin: auto;
    background-size: contain;
  }
  &:hover {
    color: $main_color;
    .game-center-icon{
      background: url('./../assets/images/gamecenter_r.png') top center no-repeat;
    }
  }
}
.game-center-active {
  display: block;
  color: $main_color;
  font-size: 12px;
  line-height: 12px;
  .game-center-icon{
    display: block;
    background: url('./../assets/images/gamecenter_r.png') top center no-repeat;
    width: 25px;
    height: 25px;
    margin: auto;
    background-size: contain;
  }
}
</style>