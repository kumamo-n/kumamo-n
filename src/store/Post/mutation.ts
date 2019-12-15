import { MutationTree } from "vuex"
import {
    Types,
    StoreState,
    StoreLatestPosts,
    StoreSearchPosts,
    StoreCurrentPost,
    StoreTagsPosts,
    StoreCurrentTag
} from "./types";
import {IPostState} from "./state";


export const mutations: MutationTree<IPostState> = {
    [Types.STORE_POST]: (state,action:StoreState) => {
        const posts = action.payload
        posts.forEach(post => {
            state.byIds = {
                ...state.byIds,
                [post.slug]: post
            }
        })
    },
    [Types.STORE_LATEST_POSTS]: (state, action: StoreLatestPosts) => {
        const latestPosts = action.payload
        state.latestPost = latestPosts
    },

    [Types.STORE_SEARCH_POSTS]: (state, action: StoreSearchPosts) => {
        const searchPosts = action.payload
        state.searchPosts = searchPosts
    },

    [Types.STORE_CURRENT_POSTS]: (state, action: StoreCurrentPost) => {
        const currentPost = action.payload
        state.currentPost = currentPost
    },

    [Types.STORE_SEARCH_QUERY]: (state, action: StoreCurrentPost) => {
        const searchQuery = action.payload
        state.searchQuery = searchQuery
    },

    [Types.STORE_TAGS_POSTS]: (state, action: StoreTagsPosts) => {
        const tagsPosts = action.payload
        state.tagsPosts = tagsPosts
    },

    [Types.STORE_CURRENT_TAG]: (state, action: StoreCurrentTag) => {
        const currentTag = action.payload
        state.currentTag = currentTag
    },

}


