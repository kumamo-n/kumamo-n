<template>
  <section class="container">
    <Search/>
  </section>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {ContentfulRepository} from "@/repository/contentful";

    const Search = () => import("@/containers/Search.vue")
    export default Vue.extend({
        components: {
            Search
        },
        watchQuery: ['query'],
        async fetch({query,store}) {
            const contentful = new ContentfulRepository(store)
            const cache = contentful.getSearchQuery()

            if (query.query !== cache) {
                contentful.saveSearchQuery(query.query)
                await contentful.saveSearchPosts(query.query)
            }

        }
    })
</script>
<style scoped lang="scss">
  .container {
    min-height: 100vh;
  }
</style>
