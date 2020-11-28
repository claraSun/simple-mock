<template>
  <div class="tab-solid">
    <slot>tab-solid</slot>
  </div>
</template>

<script>
export default {
  props: {
    
  }
}
</script>

<style lang="scss" scoped>
.tab-solid {
  width: 36px;
  min-width: 36px;
  height: 18px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  background: $breakUp_line;
  color: $help_text;
  border-radius: 10px;
  display: block;
  &:hover{
    background: $main_color;
    color: white;
  }
}
</style>