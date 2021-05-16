<template>
  <div class="date">
    {{ publishedAt }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
export default Vue.extend({
  name: "Data",
  props: {
    date: {
      type: String,
      default: "",
    },
  },
  computed: {
    publishedAt(): string {
      if ((this as any).date) {
        return dayjs(this.date).format("MMM D, YYYY");
      }
      return "";
    },
  },
});
</script>

<style lang="scss">
.date {
  font-size: 1.2rem;
}
@media screen and (max-width: 768px) {
  .date {
    font-size: 1rem;
  }
}
</style>
