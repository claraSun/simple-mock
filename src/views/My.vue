<template>
  <v-app>
  <section class="my">
    <header class="top">
      <pre class="icons">
        <i class="mdi mdi-calendar-check-outline"></i>
        <i class="mdi mdi-volume-high"></i>
        <i class="mdi mdi-headset"></i>
      </pre>
    </header>
    <section class="user">
      <div class="userImage">
        <!-- <img src="@/assets/images/user.png"> -->
        <div class="userLeavel">VIP0</div>
      </div>

      <div class="userInfo">
        <h6>
          {{user}}
        </h6>
        <p class="progressTitle">{{ Math.ceil(knowledge) }}%</p>
        <div class="progress">
          <div class="lineBlock">
            <v-progress-linear v-model="knowledge" height="5">
            </v-progress-linear>
          </div>
          <div class="nextLeavel">
            VIP1
          </div>
        </div>
        <div class="helpText">晋级还需充值¥500和3000游戏积分</div>
      </div>
    </section>
    <div class="cashBag">
      <p>中心钱包（元）</p>
      <h5 v-html="changeDollar"></h5>
      <button class="cashBag-btn">积分兑换</button>
      <button class="cashBag-btn btn-cr">充值</button>
      <button class="cashBag-btn btn-r">提款</button>
    </div>
    <div class="fast-icon">
      <a class="icon-btn">
        <img src="../assets/images/coin.png">
        交易纪录
      </a>
      <a class="icon-btn">
        <img src="../assets/images/game.png">
        游戏纪录
      </a>
      <a class="icon-btn">
        <img src="../assets/images/wallet.png">
        钱包
      </a>
      <a class="icon-btn">
        <img src="../assets/images/coupon.png">
        优惠卷
      </a>
      <a class="icon-btn">
        <img src="../assets/images/integral.png">
        抢积分
      </a>
      
    </div>
    <div class="link-entrance">
      <a class="link-btn">
        <span class="pointer">推荐好友</span>
        <span class="worring">推荐赢好礼</span>
      </a>
      <a class="link-btn">
        <span>我的收藏</span>
      </a>
      <a class="link-btn">
        <span>VIP中心</span>
      </a>
      <a class="link-btn">
        <span>安全中心</span>
        <span class="worring">安全资料未完善</span>
      </a>
    </div>
    <div class="link-entrance">
      <a class="link-btn">
        <span>个人资料</span>
      </a>
      <a class="link-btn">
        <span>代理合作</span>
      </a>
      <a class="link-btn">
        <span>关于我们</span>
      </a>
    </div>

    <v-dialog v-model="dialog" persistent max-width="200">
      <template v-slot:activator="{ on, attrs }">
        <div class="link-entrance entrance-end" v-on="on" v-bind="attrs">
          <a class="link-btn">
            <span>退出登录</span>
          </a>
        </div>
      </template>
      <v-card class="comfirm">
          確定登出?
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = false" text>
            取消
            </v-btn>
            <v-btn @click="loginOut" text>
              確定
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    
  <!-- footer区 -->
  <VFooter></VFooter>
  </section>
</v-app>
</template>

<script>
import VFooter from '@/components/VFooter.vue'

  export default {
    name: 'my',
    components: {
      VFooter
    },
    data () {
      return {
        user: localStorage.getItem('token'),
        knowledge: 30,
        bagNumber: '32,540,245.00',
        dialog: false,
      }
    },
    computed: {
      changeDollar() {
        let dollar = this.bagNumber
        let splits = dollar.split('.')
        const small = `<span class="big">${splits[0]}</span>.<span class="small"> ${splits[1]} </span>`
        return small
      }
    },
    methods: {
      loginOut() {
        this.dialog = false
        localStorage.removeItem('token')
        this.$router.push('/login')
      }
      
    }
  }
</script>


<style lang="scss" scoped>
// 修改vuetify組件
.v-application .primary {
  background: $main_color!important;
  
}
.v-application a{
  color: $title_text!important;
}
.comfirm {
  padding: 15px 15px 0 15px;
  text-align: left;
  color: $title_text;
}


// 本頁樣式
.top {
  width: 100%;
  padding: 18px 15px 0 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .icons {
    flex: 0 0 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .mdi {
      &:before{
        color: $title_text;
        font-size: 25px;
        margin: 0 7.5px 7px 7.5px;
        font-weight: 100;
      }
    }
  }
}

.user {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  .userImage {
    background: url("../assets/images/user.png")top center no-repeat;
    background-size: 100% auto;
    width: 84px;
    height: 95px;
    min-height: 84px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-right: 15px;
    .userLeavel {
      background: $info_text;
      color: white;
      border-radius: 10px;
      width: 50px;
      height: 18px;
      font-family: 'Rajdhani', sans-serif;
      font-weight: 900;
      letter-spacing: 1px;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .userInfo {
    position: relative;
    flex: 1 1 auto;
    text-align: left;
    h6 {
      font-size: 18px;
      line-height: 25px;
      font-weight: 400;
    }
    .progressTitle {
      font-size: 10px;
      color: $subTitle_text;
      margin-top: 10px;
      width: 100%;
    }
    .progress {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .lineBlock {
        flex: 1 1 auto;
        .v-progress-linear__buffer {
          background: rgba($main_color,0.15);
          border-radius: 8px;
        }
        .v-progress-linear__determinate {
          background: $main_color;
          border-radius: 8px;
        }
      }
      .nextLeavel {
        background: $main_color;
        width: 50px;
        height: 18px;
        margin-left: 15px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-family: 'Rajdhani', sans-serif;
        font-weight: 900;
        letter-spacing: 1px;
        font-size: 12px;
      }
    }
    .helpText {
      font-size: 10px;
      color: $subTitle_text;
      margin-top: 5px;
      transform:scale(1);
      -webkit-transform:scale(0.8);
      position: absolute;
      left: -18px;
      letter-spacing: 0.8px;
    }
  }
}
.cashBag {
  background: url("../assets/images/wallet-bg.png")top center no-repeat;
  background-size: 100% 100%;
  width: 375px;
  height: 176px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
  position: relative;
  p {
    color: white;
  }
  h5 {
    color: white;
    font-size: 36px;
    font-weight: normal;
    .big {
      color: white;
      font-size: 36px;
      font-weight: normal;
      display: inline-block;
    }
    .small {
      font-size: 26px;
      display: inline-block;
    }
  }
  .cashBag-btn {
    color: white;
    border: 1px solid white;
    border-radius: 15px;
    padding: 3px 15px;
    letter-spacing: 0.5px;
    outline: none;
  }
  .btn-cr {
    position: absolute;
    right: 30%;
    bottom: 30px;
    min-width: 65px;
  }
  .btn-r {
    position: absolute;
    right: 30px;
    bottom: 30px;
    min-width: 65px;
  }
}

.fast-icon {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 10px solid $appBackground_color;
  padding-bottom: 15px;
  a {
    display: flex;
    flex-flow: column;
    align-items: center;
    font-size: 12px;
    color: $title_text;
    font-weight: 400;
    img {
      width: 34px;
      height: 34px;
      margin-bottom: 4px;
    }
  }
}

.link-entrance {
  border-bottom: 10px solid $appBackground_color;
  .link-btn {
    display: flex;
    justify-content: space-between;
    padding: 15px 36px 15px 16px;
    position: relative;
    border-bottom: 1px solid $breakUp_line;
    font-size: 14px;
    .pointer {
      font-weight: bold;
    }
    .worring {
      font-size: 12px;
      color: $warning_color;
    }
    &:after {
      content: '';
      background: url("../assets/images/inline-right.png")center center no-repeat;
      position: absolute;
      width: 15px;
      height: 15px;
      right: 16px;
    }
    &:last-child {
      border-bottom: 0;
    }
  }

}
.entrance-end {
  margin-bottom: 45px;
}
  
</style>