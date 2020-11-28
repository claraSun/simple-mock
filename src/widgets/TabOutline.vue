<template>
  <a :href="url" class="tab-outline">
    <slot>TabOutline</slot>
  </a>
</template>

<script>
export default {
  props: {
    
  }
}
</script>

<style lang="scss" scoped>
.tab-outline {
  width: 36px;
  min-width: 36px;
  height: 18px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  background: white;
  color: $help_text;
  border-radius: 10px;
  border: 1px solid $breakUp_line;
  display: block;
  &:hover{
    background: white;
    color: $main_color;
    border: 1px solid $main_color;
  }
}
</style>