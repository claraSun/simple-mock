<template>
  <div class="search-widget">
    <!-- <v-text-field
      dark
      v-model="search"
      background-color="#333333"
      placeholder="请输入搜索内容"
      solo
      flat
    />
    <v-icon color="#BBBBBB"> mdi-magnify </v-icon> -->
    <v-text-field
      class="search-widget-bar"
      height='30'
      v-model="search"
      background-color="#fff"
      hide-details
      label="搜索您心仪的游戏"
      prepend-inner-icon="mdi-magnify"
      solo
      
    >
    </v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: '100%'
    },
  },
  data() {
    return {
      search: ''
    }
  },
  watch: {
    value() {
      this.search = this.value
    },
    search() {
      this.$emit('input', this.search)
    }
  }
}
</script>

<style lang="scss">
.search-widget {
  width: 345px;
  .search-widget-bar {
    border-radius: 16px;
    color: $info_text;
    line-height: 10px;
    color: #d8d8d8;
    .v-input__control {
      min-height: 30px!important;
      .v-input__slot{
        box-shadow: none!important;
        
      }
      .v-label {
        font-size: 12px;
        color: #d8d8d8;
      }
    }
  }
}



</style>
