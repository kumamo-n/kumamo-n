<template>
  <img :src=this.iconPath :alt="this.name">
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true as true
    }
  },
  computed: {
    iconPath():string{
      return `/${this.name}.png#root`
    }
  }
})
</script>

<style lang="scss">
 svg {
   width:40px;
   height:20px;
 }
</style>
