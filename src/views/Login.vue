<template>
  
  <section class="defaultUserBlock">
    <v-app>
    <HeaderWidget isPre="true">登錄</HeaderWidget>
    
    <section class="userInfo">
      <div class="form-title">账号密码登录</div>
      <div class="form-group">
        <div class="title need-icon">用戶名</div>
        <div class="content">
          <input type="text" v-model="loginName" placeholder="请输入您的用戶名" oninput="if (value.length > 10) value = value.slice(0,10)" @focus="$v.loginName.$reset()" @blur="$v.loginName.$touch()">
          <span v-if="$v.loginName.$dirty && !$v.loginName.required" class="err__msg">用户名不能为空</span>
          <span v-if="$v.loginName.$dirty && !$v.loginName.userName" class="err__msg">用户名格式不正确</span>
        </div>
        <div class="addon" v-if="loginName" @click.stop="clearLoginName">
          <img class="clear" :src="closeIcon" />
        </div>
      </div>

      <div class="form-group">
        <div class="title need-icon">密碼</div>
        <div class="content">
          <input :type="this.pwdType" v-model="passWord" placeholder="请输入您的密码" oninput="if (value.length > 20) value = value.slice(0,20)" @focus="$v.passWord.$reset()" @blur="$v.passWord.$touch()">
          <span v-if="$v.passWord.$dirty && !$v.passWord.required" class="err__msg">密码不能为空</span>
          <span v-if="$v.passWord.$dirty && !$v.passWord.password" class="err__msg">密码格式不正确</span>
        </div>
        <div class="addon" v-if="passWord" @click.stop="clearLoginPassword">
          <img class="clear" :src="closeIcon" />
        </div>
        <div class="addon hideIcon" @click.stop="changeHideShow">
            <img class="clear" :src="hideIcon" />
          </div>
      </div>
    </section>
    <div class="form-btn">
      <button :class="isCanClick ? 'form-btn-parmary':'form-btn-disabled'" @click.prevent="handleSubmit">登录</button>
      <button class="reverse-btn" @click.prevent="goRegister">註冊</button>
    </div>
    <div class="bottomLink">
      <a href="">隨便逛逛</a>
      <a href="">聯系客服</a>
    </div>
    
    
  
    <v-dialog v-model="dialog" persistent max-width="200">
      <v-card class="comfirm">
          <span class="comfirmTitle">請先註冊</span>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = false" text>
            取消
            </v-btn>
            <v-btn @click="goRegister" text>
              確定
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
  </v-app>
  </section>
   

  
</template>

<script>
import Vue from 'vue';
import HeaderWidget from '@/widgets/HeaderWidget.vue'
import { isEmpty } from '@/utils'
import Vuelidate from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { password, userName } from '@/utils/rules'
import axios from 'axios'

Vue.use(Vuelidate);
export default {
  name: 'my',
  components: {
    HeaderWidget
  },
  computed: {
    isCanClick () {
      const { loginName, passWord } = this
      return isEmpty([loginName, passWord]);
    },
    hideIcon () {
      if( this.pwdType === 'password' ) {
        return require("@/assets/images/hide-password.png")
        }
      else {
        return require("@/assets/images/show-password.png")
      }
    },
  },
  data () {
    return {
      loginName: '',
      passWord: '',
      pwdType: 'password',
      closeIcon: require('@/assets/images/close-bg-gray.png'),
      registerList: '',
      dialog: false
    }
  },
  validations: {
    loginName: {
      required,
      userName
    },
    passWord: {
      required,
      password
    }
  },
  methods: {
    // 清除用户名
    clearLoginName () {
      this.loginName = ''
    },
    // 清除密码
    clearLoginPassword () {
      // this.loginName = ''
      this.passWord = ''
    },
    changeHideShow () {
      this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
    },
    handleSubmit() {
      axios
        .get('http://localhost:8080/api/register')
        .then(response => {
          this.registerList = response.data
          let loginName = this.loginName
          let passWord = this.passWord
          
          let checkUser = this.registerList.filter(function(item) {
            return item.loginName === loginName && item.passWord === passWord
          })

          if (checkUser.length === 1) {
            localStorage.setItem('token',this.loginName)
            this.$router.push('/my')
            console.log('可以登入')
          } else {
            this.dialog = true
            // this.$router.push('/register')
            // console.log('請註冊')
          }

        })
        .catch(function (error) { // 請求失敗處理
          console.log(error);
        });
    },
    goRegister() {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.defaultUserBlock{
  .userInfo{
    .title {
      font-size: 1.55556rem!important;
    }
  }
}
.form-btn-parmary {
  background: $main_color!important;
}
.form-btn {
  button {
    margin-bottom: 15px;
  }
}
.reverse-btn {
  background: white;
  border: 1px solid $main_color;
  color: $main_color;
  border-radius: 0.55556rem;
  height: 4.88889rem;
  line-height: 4.88889rem;
  text-align: center;
  font-size: 1.77778rem;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
}
</style>

<style lang="scss">
// 修改vuetify組件
.v-application a{
  color: $title_text!important;
}

.comfirmTitle {
  margin: 15px auto;
}

</style>