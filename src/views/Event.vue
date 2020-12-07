<template>
  <section class="event over-layer">
    <v-card>
    <v-tabs
      v-model="tab"
      background-color="#393e41"
      dark
    >
      <v-tab
        v-for="item in events"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in events"
        :key="item.tab"
      >
        <v-card flat>
          <v-card-text>
            <div v-for="(event,id) in item.content" :key="id" class="singleEvent">
              <img :src="event.eventUrl">
              <h6>{{event.eventTitle}}</h6>
              <p>{{event.eventText}}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
    <!-- footer區 -->
    <VFooter></VFooter>
  </section>
</template>

<script>
import VFooter from '@/components/VFooter.vue'

  export default {
    name: 'home',
    components: {
      VFooter,
    },
    data () {
      return {
        tab: null,
        events: [
          { tab: '全部', content: [
            {
              eventUrl: 'https://picsum.photos/seed/picsum/380/154',
              eventTitle: '限時優惠不要錯過',
              eventText: '限時優惠，沖就送9.999'
            },
            {
              eventUrl: 'https://picsum.photos/seed/picsum/380/154',
              eventTitle: '限時優惠不要錯過',
              eventText: '限時優惠，沖就送9.999'
            },
            {
              eventUrl: 'https://picsum.photos/seed/picsum/380/154',
              eventTitle: '限時優惠不要錯過',
              eventText: '限時優惠，沖就送9.999'
            },
            {
              eventUrl: 'https://picsum.photos/seed/picsum/380/154',
              eventTitle: '限時優惠不要錯過',
              eventText: '限時優惠，沖就送9.999'
            },
          ] 
          },
          { tab: '新人優惠', content: [
            {
              eventUrl: 'https://picsum.photos/seed/picsum/380/154',
              eventTitle: '限時優惠不要錯過',
              eventText: '限時優惠，沖就送9.999'
            },
            {
              eventUrl: 'https://picsum.photos/seed/picsum/380/154',
              eventTitle: '限時優惠不要錯過',
              eventText: '限時優惠，沖就送9.999'
            },
            {
              eventUrl: 'https://picsum.photos/seed/picsum/380/154',
              eventTitle: '限時優惠不要錯過',
              eventText: '限時優惠，沖就送9.999'
            },
            {
              eventUrl: 'https://picsum.photos/seed/picsum/380/154',
              eventTitle: '限時優惠不要錯過',
              eventText: '限時優惠，沖就送9.999'
            },
          ] 
          },
         
        ],
      }
    },
  }
</script>

<style lang="scss">
.theme--light{
  .v-tabs-items {
    background: $main_color;
  }
  
  .v-tabs-slider-wrapper{
    display: none;
  }
}
.theme--light.v-card {
  color: white;
}
.v-sheet .v-card {
  border-radius: 10px 10px 0 0;
}
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled{
  color: white;
}
.v-tab {
  height: 55px;
  flex: 1 1 auto;
}
.v-card__text {
  padding: 0 0 47px 0;
}


.singleEvent{
  padding: 15px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-bottom: 10px solid $appBackground_color;
  img, h6, p {
    width: 100%;
    text-align: left;
    border-radius: 5px;
  }
  h6 {
    font-size: 16px;
    color: $title_text;
    margin-top: 10px;
  }
  p {
    font-size: 12px;
    color: $help_text;
    margin: 8px auto 0 auto;
  }
}
</style>
