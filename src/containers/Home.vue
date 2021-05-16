<template>
  <PostList :data="presenter" />
</template>

<script lang="ts">
import Vue from "vue";
import { ContentfulRepository } from "@/repository/contentful";
import { PostEntity } from "@/types/Post";
const PostList = () => import("@/components/PostList/PostList.vue");
export default Vue.extend({
  name: "Home",
  components: {
    PostList,
  },
  computed: {
    presenter(): PostEntity[] {
      return new ContentfulRepository(this.$store).getLatestPosts();
    },
  },
});
</script>
