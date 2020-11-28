<template>
  <section class="fast-icon">
    <a v-for="(item,id) in fastIconList" :key="id" :href="item.urlLink" class="icon" >
      <img :src="item.imgPath">
      {{item.text}}
    </a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fastIconList: [
        {
          urlLink: '#',
          imgPath: require('@/assets/images/fast_icon_1.png'),
          text: '体彩乐'
        },
        {
          urlLink: '#',
          imgPath: require('@/assets/images/fast_icon_2.png'),
          text: '看直播'
        },
        {
          urlLink: '#',
          imgPath: require('@/assets/images/fast_icon_3.png'),
          text: '领积分'
        },
        {
          urlLink: '#',
          imgPath: require('@/assets/images/fast_icon_4.png'),
          text: '赚佣金'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.fast-icon {
  width: 100%;
  height: 115px;
  display: flex;
  justify-content: space-between;
  border-bottom: 10px solid $appBackground_color;
  background: white;
  padding: 15px;
  .icon {
    text-decoration: none;
    font-size: 12px;
    color: $title_text;
    line-height: 2;
    font-weight: 700;
    width: 79px;
    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  }
}
</style>