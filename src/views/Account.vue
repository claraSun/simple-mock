<template>
  <div>
    <Slider></Slider>
    <Marquee></Marquee>
    <!-- 快捷icon -->
    <FastIcon />
    <!-- 優惠訊息 -->
    <MessageModule/>
    <!-- 下方navigation -->
    <!-- footer區 -->
    <VFooter></VFooter>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
import Marquee from '@/components/Marquee.vue'
import VFooter from '@/components/VFooter.vue'
import FastIcon from '@/components/FastIcon.vue'
import MessageModule from '@/components/MessageModule.vue'

  export default {
    name: 'home',
    components: {
      Slider,
      Marquee,
      VFooter,
      FastIcon,
      MessageModule
    },
    data () {
      return {

      }
    },
  }
</script>
