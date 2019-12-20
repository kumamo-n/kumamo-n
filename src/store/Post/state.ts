import { IPost } from "@/types/Post";

export interface IPostState {
    byIds: {
        [slug: string]: IPost
    }
    latestPost:string[]
    searchPosts:string[]
    tagsPosts:string[]
    currentPost:string | null
    searchQuery:string | null
    currentTag:string | null
}

export const initState = ():IPostState => ({
    byIds: {},
    latestPost:[],
    searchPosts:[],
    tagsPosts:[],
    currentPost:null,
    searchQuery:null,
    currentTag:null
})




