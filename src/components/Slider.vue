<template>
  <v-carousel
        :continuous="false"
        cycle
        :show-arrows="false"
        delimiter-icon="mdi-minus"
        hide-delimiter-background
        height="152"
      >
        <v-carousel-item  v-for="(slide, i) in slides"  :key="i" :src="slide.imgUrl">
          <!-- {{slide.title}} -->
        </v-carousel-item>
        
      </v-carousel>




</template>
  
<script>
import axios from 'axios'

export default {
  data () {
    return {
      // cycle: false,
      slides: []
    }
  },
  mounted () {
    axios
      .get('http://localhost:8080/api/home')
      .then(response => (this.slides = response.data))
      .catch(function (error) { // 請求失敗處理
        console.log(error);
      });
  }
  
}
</script>

<style lang="scss">
.v-carousel__controls{
  height: 24px;
  justify-content: flex-end;
  padding-right: 15px;
}
.v-carousel__controls__item{
  margin-right: -5px;
  margin-left:  -5px;
}
.mdi-minus::before {
  font-size: 32px;
  content: "‧";
}
.v-btn:not(.v-btn--text):not(.v-btn--outlined):focus:before{
  opacity: 0;
}
.v-item--active {
  color: #f38844 !important;
  .mdi-minus::before {
    content: "\F0374";
  }

  &:before {
    // opacity: 0;
    display: none;
  }
}
</style>