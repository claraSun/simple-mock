<template>
  <v-footer fixed class="font-weight-medium">
    
      <HomeWidget link="/">首页</HomeWidget>
      <GameCenter link="game">游戏中心</GameCenter>
      <AccountWidget :notRouterPage="true">帐户</AccountWidget>
      <EventWidget link="event">活动</EventWidget>
      <MyWidget link="my">我的</MyWidget>

      
   
  </v-footer>
</template>

<script>
import HomeWidget from '@/widgets/HomeWidget.vue'
import GameCenter from '@/widgets/GameCenter.vue'
import AccountWidget from '@/widgets/AccountWidget.vue'
import EventWidget from '@/widgets/EventWidget.vue'
import MyWidget from '@/widgets/MyWidget.vue'

export default {
  components: {
    HomeWidget,
    GameCenter,
    AccountWidget,
    MyWidget,
    EventWidget
  },
  data() {
    return {
      dialog: false,
    }
  },

}
</script>

<style lang="scss" scoped>
.v-footer {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid $breakUp_line;
  padding: 5px 15px;
  align-items: baseline;
  height: 47px;
  background: white;
  a,div {
    flex: 1 1 20%;
    width: 20%;
  }
}



</style>