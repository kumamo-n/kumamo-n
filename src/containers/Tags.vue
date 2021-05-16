<template>
  <div class="tagsContainer">
    <div class="tags_query">
      <span class="query"> {{ presenter.tag }}</span> の記事
    </div>
    <PostList :data="presenter.postList" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ContentfulRepository } from "@/repository/contentful";
const PostList = () => import("@/components/PostList/PostList.vue");
export default Vue.extend({
  name: "Search",
  components: {
    PostList,
  },
  computed: {
    presenter() {
      const posts = new ContentfulRepository(this.$store);
      return {
        postList: posts.getTagsPosts(),
        tag: posts.getCurrentTag(),
      };
    },
  },
});
</script>

<style scoped lang="scss">
.tags_query {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
  .query {
    font-size: 2rem;
  }
}
</style>
