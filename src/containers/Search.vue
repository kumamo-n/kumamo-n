<template>
  <div class="search-container">
    <div class="search-query">
      <span class="query"> {{ presenter.searchQuery }}</span> の検索結果
    </div>
    <PostList :data="presenter.postList" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
const PostList = () => import("@/components/PostList/PostList.vue");
import { ContentfulRepository } from "@/repository/contentful";
export default Vue.extend({
  name: "Search",
  components: {
    PostList,
  },
  computed: {
    presenter() {
      const posts = new ContentfulRepository(this.$store);
      return {
        postList: posts.getSearchPosts(),
        searchQuery: posts.getSearchQuery(),
      };
    },
  },
});
</script>

<style scoped lang="scss">
.search-query {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
  .query {
    font-size: 2rem;
  }
}
</style>
