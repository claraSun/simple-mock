<template>
  <section class="anchor-tab" transition="slide-y-transition">
    <div class="anchor-tab-tabs">
      <div v-for="(tab,id) in tabs" :key="id" @click="$vuetify.goTo(tab.tabLink, options)">
        
        {{ tab.tabName }}
        </div>
      
    </div>
    <div class="anchor-content">
      <div>
        <div v-for="(content,id) in contents" :key="id" class="single-content">
          <h3 class="title_text" :id="content.anchor">{{content.title_text}}</h3>
          <p class="help_text">{{content.help_text}}</p>
          
        
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item,index) in content.imgList" :key="index">
              <img :src="item.imgSrc">
              {{item.imgName}}
            </swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>

          <img v-if="content.singleImg" :src="content.singleImg" class="single-img">
        <h4  class="title_text">{{content.sub_title}}</h4>
        <p class="help_text">{{content.sub_help}}</p>
          
        <v-divider v-if="content.smallImgList"></v-divider>

        <div class="small-game">
          <div v-for="(small,id) in content.smallImgList" :key="id" class="single-small-game">
            <img :src="small.simgSrc">
            <span>{{small.simgName}}</span>
            <a href="javascript:;">去游戏</a>
          </div>
        </div>
        
          
        </div>
      </div>
      
      
    </div>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true
        
      },
      tabs: [ 
        {
          tabName: '体育',
          tabLink: '#sport'
        },
        {
          tabName: '真人',
          tabLink: '#guys'
        },
        {
          tabName: '棋牌',
          tabLink: '#card'
        },
        {
          tabName: '捕鱼',
          tabLink: '#fish'
        },
        {
          tabName: '电游',
          tabLink: '#electronic'
        },
      ],
      contents: [],
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
    }
  },
  mounted () {
    axios
      .get('http://localhost:8080/api/contents')
      .then(response => (this.contents = response.data))
      .catch(function (error) { // 請求失敗處理
        console.log(error);
      });
  },
  computed: {
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      }
    },
  },
  methods: {
    // 页面滚动触发事件回调
    // 先把大方向寫好再回頭優化 by.clara
    handle (scrollTop) {
      if (scrollTop < 0) scrollTop = 0
      const gameContainer = document.querySelector('.tab-header-1'),
        gameSearchDom = document.querySelector('.game-search .search-back'),
        logoImgDom = document.querySelector('.game-center-logo-img')
      const w = parseFloat(gameSearchDom.style.left) || 0
      const d = 8 * this.rate * scrollTop * -1
      const a = 8 * this.rate * 15 * -1
      if (scrollTop <= 15) {
        gameSearchDom.style.left = `${d}px`
      } else if (w * -1 < a * -1) {
        gameSearchDom.style.left = `${a}px`
      }
      logoImgDom.style.opacity = (100 - scrollTop * 3.5) / 100
      // 计算fixed
      if (scrollTop >= this.rate * 40) {
        gameContainer.style.marginTop = this.rate * 40 * -1 + 'px'
      } else {
        gameContainer.style.marginTop = scrollTop * -1 + 'px'
      }
    }
  }

}
</script>

<style lang="scss">
.anchor-tab {
  .anchor-tab-tabs {
    display: flex;
    flex: 1 1 20%;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    width: 100%;
    color: white;
    padding: 15px;
    height: 55px;
  }
  .anchor-content {
    margin-bottom: 45px;
    background: white;
    border-radius: 10px 10px 0 0;
    text-align: left;
    .single-content{
      padding: 15px;
      border-bottom: 10px solid $appBackground_color;
      // &:last-child{
      //   border-bottom: 0;
      // }
      h3 {
        font-size: 18px;
        font-weight: bold;
        line-height: 25px;
      }
      p {
        font-size: 12px;
        color: $help_text;
        line-height: 17px;
        
      }
      .swiper{
        margin-top: 15px;
        .swiper-slide {
          width: 80%;
          height: 160px;
          img {
            width: 280px;
            border-radius: 5px;
          }
        }
      }
      .single-img{
        width: 345px;
        margin-right: 10px;
        border-radius: 5px;
      }
      .small-game {
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        overflow-x: auto;
        margin-left: 10px;
        margin-right: 10px;
        .single-small-game{
          width: 50px;
          display: block;
          margin: 20px 40px 20px 0;
          img {
            width: 48px;
            height: 48px;
            border-radius: 5px;
          }
          span {
            display: block;
            overflow:hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: bold;
            font-size: 14px;
            line-height: 2;
          }
          a {
            display: block;
            width: 100%;
            border-radius: 12.5px;
            background: rgba(243, 136, 68, 0.15);
            text-decoration: none;
            font-size: 12px;
            text-align: center;
            height: 25px;
            line-height: 25px;
            color: $main_color;
          }
        }
        
      }
    }
    
  }
}
</style>
