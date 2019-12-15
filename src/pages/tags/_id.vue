<template>
  <Tags />
</template>

<script lang="ts">
    import Vue from 'vue'
    import {ContentfulRepository} from '@/repository/contentful';
    const Tags = () => import("@/containers/Tags.vue")
    const Search = () => import("@/containers/Search.vue")
    export default Vue.extend({
        components: {
            Search,
            Tags
        },
        async fetch({params,store}) {
            const contentful = new ContentfulRepository(store)
            const currentTag = contentful.getCurrentTag()

            if (currentTag === params.name) return
            contentful.saveCurrentTag(params.name)
            await contentful.tagsPosts(params.id)
        }
    })
</script>

<style scoped lang="scss">
  .container {
    min-height: 100vh;
  }
</style>
