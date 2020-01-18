<template>

  <div class="share_buttons">

    <a :href="`http://b.hatena.ne.jp/entry/${this.path}`" >
      <svg width="20px" height="40px" viewBox="0 0 141.732 141.732" enable-background="new 0 0 141.732 141.732">
        <use xlink:href="/hatena.svg#root" />
      </svg>
    </a>
    <a :href="`http://twitter.com/share?url=${this.path}&text=${this.title}`"  target="_blank" rel="noopener">
      <svg width="20px" height="40px"viewBox="0 0 20 16">
        <use xlink:href="/twitter.svg#root" />
      </svg>
    </a>
    <a :href="`http://getpocket.com/edit?url=${this.path}`"  target="_blank" rel="noopener">
      <svg width="20px" height="40px" viewBox="0 0 20 16">
        <use xlink:href="/pocket.svg#root" />
      </svg>
    </a>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "ShareButton",
  props:{
    path:{
     type:String
    },
      title: {
        type:String
      }
  }
})
</script>
