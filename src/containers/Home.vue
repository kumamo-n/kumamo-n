<template>
    <PostList :data="presenter"/>
</template>

<script lang="ts">
import Vue from 'vue'
import {ContentfulRepository} from "@/repository/contentful";
const PostList = () => import('@/components/PostList/PostList.vue')
export default Vue.extend({
    name: "Home",
    components:{
        PostList
    },
    computed:{
        presenter() {
            return new ContentfulRepository(this.$store).getLatestPosts()
        }
    }
})
</script>

