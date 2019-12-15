<template>
  <footer>
    <div class="footer-wrap">
      <div class="copy-right">Copyright © 2019 kumamo-n</div>
    </div>
  </footer>

</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: "footer"
})
</script>

<style scoped lang="scss">
  footer {
    height: 400px;
    width: 100%;
    background:#f8f9fa ;
    display: flex;
    align-items: center;
    margin-top: 100px;
    .footer-wrap {
      width: 100%;
      text-align: center;
    }
  }

</style>
