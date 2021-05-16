<template>
  <div class="markdown" v-html="markedContents"></div>
</template>

<script>
import Vue from "vue";
import marked from "marked";
import Prism from "prismjs";
export default Vue.extend({
  //@todo scopeを指定するとなぜよみこめなくなるのだろうか。。
  name: "MarkDown",
  props: {
    data: {
      type: String,
    },
  },
  computed: {
    markedContents() {
      if (this.data) {
        return marked(this.data);
      }
      return "";
    },
  },
  mounted() {
    const targetList = document.querySelectorAll("code");
    Array.from(targetList).forEach((target) => Prism.highlightElement(target));
  },
});
</script>
<style lang="scss">
.markdown {
  h1 {
    color: #202124;
    margin: 30px 0;
    font-size: 1.6rem;
    border-left: 4px solid #202124;
    padding-left: 14px;
  }
  p {
    color: #202124;
    font-style: normal;
    font-weight: 300;
    line-height: 40px;
    font-size: 1.2rem;
  }
  img {
    display: block;
    width: 100%;
  }
  ul {
    color: #202124;
    list-style: disc;
    padding-left: 40px;
    font-size: 1.2rem;
    margin: 20px 0;
  }
  li {
    padding-bottom: 5px;
  }
}
@media screen and (max-width: 768px) {
  .markdown {
    h1 {
      margin: 15px 0;
      font-size: 1.2rem;
    }
    p {
      line-height: 25px;
      font-size: 1rem;
    }
    ul {
      color: #202124;
      list-style: disc;
      padding-left: 20px;
      font-size: 1rem;
      margin: 20px 0;
    }
    li {
      padding-bottom: 5px;
    }
  }
}
</style>
