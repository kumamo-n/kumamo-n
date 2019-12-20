<template>

  <form role="search" v-on:submit=search autocomplete="off">
    <button type="submit" :click="search">
      <Icon name="search"/>
    </button>
    <input  v-model=query name="query" aria-label="query">
  </form>

</template>

<script lang="ts">
import Vue from 'vue'
const Icon = () => import('./Icon.vue')
interface IData {
    query:string
}
export default Vue.extend({
  name: "SearchForm",
    components: {Icon},
    data(): IData{
      return {
          query:''
      }
    },
    methods: {
      search(e: Event) {
          e.preventDefault()
          this.$router.push({path: `/search?query=${this.query}`})
      }
    }
})
</script>

<style scoped lang="scss">
  form  {
    display: flex;
    border: 1px solid #ccc;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;

  }
  input{
    font-size:1.5rem;
    transition: all .6s ease;
    border-width: 0;
    background: none;
  }
  input:focus {
    outline: none;
    padding:10px 0px 10px 20px;
    box-sizing: border-box;
  }

  button {
    padding-left:10px;
    width:36px;
    height: 36px;
    border: none;
    background: transparent;
    top: 10px;

    img {
      display: block;
      width: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    input:focus {
      outline: none;
      padding:5px 0px 5px 10px;
      box-sizing: border-box;
    }
  }

</style>
