<template>
  <div class="post-list">
    <nuxt-link  :to="'/posts/'+post.props.slug" class="post-card" v-for="(post, index) in this.data " :key="index">
      <Post :post={post} />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
    //todo dataのTypeの理解あやしげ
import Vue from 'vue'
const Post = () => import('./Post.vue')
import { PostEntity } from "@/types/Post";

export default Vue.extend({
  name: "PostList",
    components:{
      Post
    },
    props: {
      data:{
          type: Object as () => PostEntity,
          required: true as true
      }
    },
})
</script>

<style scoped lang="scss">
  .post-card {
    width:48%;
    box-shadow: 2px 2px 40px -12px #000;
    border-radius: 4px;
    margin:10px;
    overflow: hidden;
    text-decoration: none;
  }
  .post-card:hover{
    opacity: 0.9;
  }
  .post-list {
    max-width: 1170px;
    margin:auto;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
  }

  @media screen and (max-width: 1024px) {
    .article {
      max-width: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    .post-list {
      display: block;
      max-width: 90%;
    }
    .post-card {
      display: block;
      width: 100%;
      margin:20px auto;
    }
  }

</style>
