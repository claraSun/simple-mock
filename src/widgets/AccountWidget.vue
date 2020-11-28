<!--
 *帐户有2种型式
 *1. 点了换页
 *2. 点了出现弹窗
-->
<template>
  <div>
    <a v-if="isRouterPage" @click.stop.prevent="linkTo(url)" :link="link" :class="$route.name === 'acount' ? 'acount-widget-active' : 'acount-widget'">
    <span class="acount-widget-icon"></span>
    <span>
      <slot></slot>
    </span>
    </a>

    <a v-if="notRouterPage" class="acount-widget"  @click.stop.prevent="showAccountIcon">
      <span class="acount-widget-icon"></span>
      <span>
        <slot></slot>
      </span>
    </a>

    <!-- 直接手刻弹窗 -->
   
    <div class="accountShow hiddenBlock">
      <a href="">
        <img src="../assets/images/recharge.png">
        <h6>充值</h6>
        <p>优惠多多</p>
      </a>
      <a href="">
        <img src="../assets/images/withdrawal.png">
        <h6>提款</h6>
        <p>简便快捷、极速到帐</p>
      </a>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ['link','notRouterPage','isRouterPage'],
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
    },
    showAccountIcon() {
      const accountShow = document.querySelector('.accountShow')
      const hiddenBlock = document.querySelector('.hiddenBlock')
      const overLayer = document.querySelector('.over-layer')

      if(hiddenBlock) {
        accountShow.classList.remove('hiddenBlock')
        overLayer.style['overflow-y']='hidden'
        overLayer.classList.add('blackContent')
        
      }
      else {
        accountShow.classList.add('hiddenBlock')
        overLayer.style['overflow-y']='auto'
        overLayer.classList.remove('blackContent')
      }
      
    }
  }
}
</script>

<style lang="scss">
.acount-widget {
  display: block;
  color: $title_text;
  font-size: 12px;
  line-height: 12px;
  margin-top: -15px;
  .acount-widget-icon{
    display: block;
    background: url('./../assets/images/w.png') center center no-repeat,$main_color;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin: auto;
    border: 2px solid white;
    // background-size: contain;
  }
}
.acount-widget-active {
  display: block;
  color: $main_color;
  font-size: 12px;
  line-height: 12px;
  margin-top: -15px;
  .acount-widget-icon{
    display: block;
    background: url('./../assets/images/w.png') center center no-repeat,$main_color;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin: auto;
    border: 2px solid white;
    // background-size: contain;
  }
}

.accountShow {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 325px;
  height: 139px;
  background: white;
  position: absolute;
  bottom: 72px;
  left: 50%;
  margin-left: -163px;
  border-radius: 5px;
  a {
    width: 48%;
    border-right: 1px solid $breakUp_line;
    text-decoration: none;
    &:last-child {
      border-right: 0;
    }
    h6 {
      font-size: 16px;
      color: $title_text;
      margin-top: 10px;
    }
    p {
      font-size: 12px;
      color: $help_text;
      margin-top: 5px;
    }
  }
  &::after {
    content:'';
    position:absolute;
    top:100%;
    right:50%;
    width:0;
    height:0;
    border-width:10px;
    margin-right: -10px;
    border-style:solid;
    border-color:transparent;
    border-top-color:currentColor;
    color:white;
  }
}

.hiddenBlock {
  display: none;
}

.blackContent:after {
  content: '';
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  // right: 0;
  // bottom: 0;
  z-index: 2;
}
</style>