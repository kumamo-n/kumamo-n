<template>
  <div class="post">
    <div class="thumb-wrap">
      <picture>
        <source
          :srcset="post.post.props.webp.fields.file.url"
          type="image/webp"
        />
        <img
          :src="post.post.props.image.fields.file.url"
          :alt="post.post.props.image.fields.file.fileName"
        />
      </picture>
    </div>

    <div class="post-body">
      <div class="title">
        {{ post.post.props.title }}
      </div>

      <div class="create-at">
        {{ this.publishedAt }}
      </div>

      <ul class="tag-list">
        <li class="tag" v-for="tag in post.post.props.tags" :key="tag.sys.id">
          <nuxt-link
            :to="{
              name: 'tags-id',
              params: { id: tag.sys.id, name: tag.fields.tag },
            }"
            tag="button"
          >
            {{ tag.fields.tag }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import { PostEntity } from "@/types/Post";
export default Vue.extend({
  name: "Post",
  props: {
    post: {
      type: Object as () => PostEntity,
      required: true as true,
    },
  },
  computed: {
    publishedAt(): string {
      if ((this as any).post) {
        return dayjs((this as any).post.post.props.publishedAt).format(
          "MMM D, YYYY"
        );
      }
      return "";
    },
  },
});
</script>

<style scoped lang="scss">
.thumb-wrap {
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
}
.thumb-wrap:before {
  content: "";
  display: block;
  padding-top: 60%;
}

.post-body {
  margin: 15px 10px 10px;
}

.post-body {
  color: #37474f;
  .title {
    font-weight: 900;
    font-family: "Roboto", sans-serif;
  }
}
.tags {
  z-index: 99;
}
.tag {
  list-style: none;
  display: inline;
  button {
    border: none;
    font-size: 1rem;
    margin-right: 5px;
    color: #37474f;
    background: transparent;
  }
  button:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
.tag_list {
  display: flex;
  margin-top: 5px;
}

@media screen and (max-width: 768px) {
  .tag button {
    background: #ffffff;
  }
}
</style>
