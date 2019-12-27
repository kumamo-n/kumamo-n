<template>

  <div class="share_buttons">

    <a :href="`http://b.hatena.ne.jp/entry/${this.pagePath}`" class='socialButton'>
      <svg width="20px" height="40px" viewBox="0 0 141.732 141.732" enable-background="new 0 0 141.732 141.732">
        <use xlink:href="/hatena.svg#root" />
      </svg>
    </a>
    <a :href="`http://twitter.com/share?url=${this.pagePath}&text=${this.title}`" class='socialButton' target="_blank" rel="noopener">
      <svg width="20px" height="40px"viewBox="0 0 20 16">
        <use xlink:href="/twitter.svg#root" />
      </svg>
    </a>
    <a :href="`http://getpocket.com/edit?url=${this.pagePath}`" class='socialButton' target="_blank" rel="noopener">
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
  },
    computed: {
        pagePath():string {
            return this.path
        }
    }
})
</script>
