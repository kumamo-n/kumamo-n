<template>
    <header class=header>
      <div class="headerWrap">
        <nuxt-link to="/" class="title">
          kumamo-n
        </nuxt-link>
        <div class="search">
          <SearchForm/>
        </div>
      </div>
    </header>

</template>
<script lang="ts">
import  Vue from 'vue';
const SearchForm  = () => import('@/components/SearchForm.vue')
export default Vue.extend({
    name: "Header",
    components:{
        SearchForm
    }
})
</script>

<style lang="scss">
  .header {
    width: 100%;
    margin-bottom: 3rem;
    box-shadow: 2px 2px 15px -12px #000;
    background: #ffffff;
    position: fixed;
    top: 0;
    will-change: transform;
    transition: transform 200ms linear;
    z-index: 99;
  }
  .headerWrap {
    width: 80%;
    height: 100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 1.3rem;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      color:#37474F;
    }
  }

  @media screen and (max-width: 768px) {

    .header {
      width: 100%;
      margin-bottom: 1rem;
    }
    .headerWrap {
      width:90%;
      display: block;
      height: 80px;
      .title {
        margin:7px 0;
        display: block;
        text-align: center;
      }
    }

  }

</style>

