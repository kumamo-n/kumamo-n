<template>
  <Home/>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {ContentfulRepository} from "@/repository/contentful";
  const Home = () => import("@/containers/Home.vue")
  export default Vue.extend({
    components: {
      Home
    },
    async fetch({store}) {
        const contentful = new ContentfulRepository(store)
        const getPosts = contentful.getLatestPosts()

        if (getPosts.length > 0) return
        await contentful.saveLatestPosts()
    }
  })
</script>
