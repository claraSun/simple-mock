<template>
  <section class="message-module">
    <h3>优惠讯息</h3>
    <p>最齐全的游戏福利入口</p>
    <a v-for="(item,id) in gameModuleList" :key="id" :href="item.urlLink" class="message-module-game" >
      <img :src="item.imgPath">
      {{item.text}}
    </a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gameModuleList: [
        {
          urlLink: '#',
          imgPath: require('@/assets/images/m1.jpg'),
          text: 'OG真人'
        },
        {
          urlLink: '#',
          imgPath: require('@/assets/images/m2.jpg'),
          text: '东方体育'
        },
        {
          urlLink: '#',
          imgPath: require('@/assets/images/m3.jpg'),
          text: 'MW捕鱼'
        },
        {
          urlLink: '#',
          imgPath: require('@/assets/images/m4.jpg'),
          text: 'MW电子'
        },
        {
          urlLink: '#',
          imgPath: require('@/assets/images/m5.jpg'),
          text: 'VR彩票'
        },
        {
          urlLink: '#',
          imgPath: require('@/assets/images/m6.jpg'),
          text: '幸运棋牌'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.message-module {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 15px 20px 15px;
  border-bottom: 10px solid #f5f5f5;
  margin-bottom: 45px;
  h3{
    width: 100%;
    color: $title_text;
    font-size: 18px;
    text-align: left;
  }
  p {
    width: 100%;
    color: $help_text;
    font-size: 14px;
    text-align: left;
    margin-bottom: 20px;   
  }
  .message-module-game {
    width: 168px;
    text-decoration: none;
    font-size: 14px;
    color: $title_text; 
    margin-bottom: 20px;   
    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 5px;
    }

  }
}
</style>