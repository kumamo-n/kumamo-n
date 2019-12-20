<template>

  <div class="article">

    <div class="heading">
      {{ presenter.props.title }}
    </div>

    <div class="post-head">

      <Date :date="presenter.props.publishedAt ? presenter.props.publishedAt: ''"/>
      <ShareButton :path="pagePath" :title="presenter.props.title"/>
    </div>

    <picture class="heading-img">
      <source :srcset="post.post.props.image.fields.file.url" type="image/webp" />
      <img :src="post.post.props.image.fields.file.url" :alt="post.post.props.image.fields.file.fileName">
    </picture>


    <div class="content">
      <MarkDown :data="presenter.props.contents"/>
    </div>

    <TagList :tags="presenter.props.tags"/>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {PostEntity} from "@/types/Post";
import {ContentfulRepository} from "@/repository/contentful";
const MarkDown = () => import('@/components/Post/MarkDown.vue')
const Date = () => import('@/components/Post/Date.vue')
const TagList = () => import('@/components/Post/TagList.vue')
const ShareButton = () => import('@/components/Post/ShareButtons.vue')


export default Vue.extend({
  name: "Post",
  components:{
      ShareButton,
      MarkDown,
      Date,
      TagList
  },
  computed:{
      presenter() :PostEntity | null {
          return new ContentfulRepository(this.$store).getCurrentPost()
      },
      pagePath():string {
          const basePath = 'localhost:3000'
          return basePath + this.$route.fullPath
      }
  },
    head() {
        const post = (this as any).presenter.props
        return {
            title: `${post? post.title : ''} | kuma-blog`,
            meta: [
                { hid: 'description', name: 'description', content: post ? post.content : '' },
                { hid: 'og:type', property: 'og:type', content: 'article' },
                { hid: 'og:description', property: 'og:description', content: post ? post.content : '' },
                { hid: 'og:title', property: 'og:title', content: post ? post.title : '' },
                { hid: 'og:image', property: 'og:image', content: post ? `https:${post.image.fields.file.url}` : '' },
                { hid: 'og:url', property: 'og:url', content: `http:localhost/posts/${post ? post.slug : ''}` }
            ]
        }
    },
})
</script>

<style scoped lang="scss">
  .article {
    max-width: 1170px;
    margin:auto;
    justify-content: space-between;
  }

  .heading-img {
    width:100%;
    margin: 40px 0;
    img {
      width:100%;
    }
  }

  .heading {
    font-size: 2rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.1rem;
    margin:20px 0;
    color: #202124;
  }
  .content {
    line-height: 1.6rem;
    letter-spacing: 0.08rem;
  }
  .post-head {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 1024px) {
    .article {
      max-width: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    .article {
      width: 90%;
    }
    .heading {
      font-size: 1.5rem;
      margin:10px 0;
    }
    .heading-img {
      width: 100%;
      margin: 20px 0;
    }
    .post-head {
      margin: 30px 0;
    }

  }
</style>
