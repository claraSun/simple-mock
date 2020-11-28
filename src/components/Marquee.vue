<template>
<section class="marquee-block">
  <i class="mdi mdi-volume-high"></i>
  <marquee-text :duration="30">
    <span v-for="(m,id) in marqueeList" :key="id">{{m.annContent}}</span>
  </marquee-text>
</section>
</template>
  
<script>
import axios from 'axios'
import MarqueeText from 'vue-marquee-text-component'

export default {
  data () {
    return {
      marqueeList: []
    }
  },
  components: {
    MarqueeText
  },
  mounted () {
    axios
      .get('http://localhost:8080/api/marqueeList')
      .then(response => (this.marqueeList = response.data))
      .catch(function (error) { // 請求失敗處理
        console.log(error);
      });
  }
  
}
</script>

<style lang="scss">
.marquee-block{
  background: #f5f5f5;
  border-radius: 10px;
  height: 24px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
}
.marquee-text-wrap {
  height: 24px;
  line-height: 24px;
  width: 322px;
  // margin-left: 15px;
  // margin-right: 15px;
  overflow: hidden;
  position: relative;
  
  
}
.mdi-volume-high{
  color: $main_color;
  font-size: 16px;
}
.marquee-text-text span {
  margin-right: 15px;
  color: #333;
  font-size: 12px;
}


  
</style>