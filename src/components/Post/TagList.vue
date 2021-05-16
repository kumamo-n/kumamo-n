<template>
  <ul class="tag_list">
    <li class="tag" v-for="tag in Tags" :key="tag.sys.id">
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
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TagList",
  props: {
    tags: {
      type: Array,
    },
  },
  computed: {
    Tags() {
      return this.tags;
    },
  },
});
</script>

<style scoped lang="scss">
.tags {
  z-index: 99;
}
li.tag {
  list-style: none;
  display: inline;
  margin-right: 10px;
  button {
    border: none;
    font-size: 1rem;
    background: rgba(0, 0, 0, 0.05);
    padding: 5px 10px;
  }
  button:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
ul.tag_list {
  margin-top: 20px;
  display: flex;
}
@media screen and (max-width: 768px) {
  button {
    padding: 5px 10px;
  }
}
</style>
