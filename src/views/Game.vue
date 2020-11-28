<template>
  <section class="game over-layer">
    <header class="top">

      <img src="./../assets/images/og.png" class="logo">

      <pre class="icons">
        <i class="mdi mdi-calendar-check-outline"></i>
        <i class="mdi mdi-volume-high"></i>
        <i class="mdi mdi-headset"></i>
      </pre>
    </header>
    <SearchWidget/>

    <!-- tab+錨點模組 -->
    <AnchorTab/>
    
    <!-- footer區 -->
    <VFooter></VFooter>
  </section>
</template>

<script>

import SearchWidget from '@/widgets/SearchWidget.vue'
import AnchorTab from '@/components/AnchorTab.vue'
import VFooter from '@/components/VFooter.vue'


  export default {
    name: 'game',
    components: {
      SearchWidget,
      AnchorTab,
      VFooter
    },
    data () {
      return {

      }
    },
    methods: {
    
    }
  }
</script>

<style lang="scss" scoped>
.game{
  background: $main_color;
  height: 100vh;
  .top {
    padding: 18px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icons {
      flex: 0 0 30%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .mdi {
        &:before{
          color: white;
          font-size: 25px;
          margin: 0 7.5px 7px 7.5px;
          font-weight: 100;
        }
      }
    }
  }
}
.search-widget {
  margin: 0 auto;
}
</style>
