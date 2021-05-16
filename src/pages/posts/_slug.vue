<template>
  <Post />
</template>

<script lang="ts">
import Vue from "vue";
import { ContentfulRepository } from "@/repository/contentful";
const Post = () => import("@/containers/Post.vue");

export default Vue.extend({
  components: {
    Post,
  },
  async fetch({ params, store }) {
    const contentful = new ContentfulRepository(store);
    await contentful.saveCurrentPost(params.slug);
  },
});
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
}
</style>
