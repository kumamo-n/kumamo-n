<template>

  <div class="article">

    <div class="heading">
      {{ presenter.props.title }}
    </div>

    <div class="post-head">
      <Date :date="presenter.props.publishedAt ? presenter.props.publishedAt: ''"/>
    </div>


   <div class="heading-inner">
     <picture class="heading-img">
       <source :srcset="presenter.props.webp.fields.file.url" type="image/webp" />
       <img :src="presenter.props.image.fields.file.url" :alt="presenter.props.image.fields.file.fileName">
     </picture>
   </div>


    <div class="content">
      <ShareButton :class="{ 'shrink':side}" :path="pagePath" :title="presenter.props.title"/>
      <div class="content-wrap">
        <MarkDown :data="presenter.props.contents"/>
        <TagList :tags="presenter.props.tags"/>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {PostEntity} from "@/types/Post";
import {ContentfulRepository} from "@/repository/contentful";
import {scroll} from "@/lib/scroller";
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
            const basePath = 'https://kumamo-n.com'
            return basePath + this.$route.fullPath
        }
    },
    data() {
        return  {
          side: false
        }
    },
    mounted() {
        if (window) {
            window.addEventListener('scroll', (this as any).scrollEvent)
        }
    },
    methods: {
        scrollEvent() {
            const scrollEvent = scroll(document.scrollingElement,850)
            if (scrollEvent)  {
                (this as any).side = true
            } else {
                (this as any).side =  false
            }
        }
    },
    head() {
        const post = (this as any).presenter.props
        return {
            title: `${post? post.title : ''} | kumamo-n`,
            meta: [
                { hid: 'description', name: 'description', content: post ? post.content : '' },
                { hid: 'og:type', property: 'og:type', content: 'article' },
                { hid: 'og:description', property: 'og:description', content: post ? post.contents : '' },
                { hid: 'og:title', property: 'og:title', content: post ? post.title : '' },
                { hid: 'og:image', property: 'og:image', content: post ? `https:${post.image.fields.file.url}` : '' },
                { hid: 'og:url', property: 'og:url', content: `https://kumamo-n.com/posts/${post ? post.slug : ''}` }
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
    margin: 40px 0;
    img {
      width:100%;
    }
  }
  .heading-inner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;
  }

  .heading {
    font-size: 2rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.1rem;
    margin:20px 0;
    color: #202124;
  }
  .shrink {
    transform: translate(0%);
    opacity: 1;
  }
  .content-wrap {
    line-height: 1.6rem;
    letter-spacing: 0.08rem;
    max-width: 800px;
    margin:auto;
  }
  .post-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1024px) {
    .article {
      max-width: 90%;
    }
    .shrink {
      opacity: 0;
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
      margin: 20px 0;
    }
    .shrink {
      opacity: 0;
    }

  }
</style>
