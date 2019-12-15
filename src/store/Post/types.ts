import {IPost} from "../../types/Post";

export class Types {
   static STORE_POST = "/post/store_posts";
   static STORE_LATEST_POSTS = 'post/store_latest_posts';
   static STORE_SEARCH_POSTS = 'post/store_search_posts';
   static STORE_TAGS_POSTS = 'post/store_tags_posts';
   static STORE_CURRENT_TAG = 'post/store_current_tag';
   static STORE_CURRENT_POSTS = 'post/store_current_posts';
   static STORE_SEARCH_QUERY = 'post/store_search_query';
}

declare interface FluxStandardAction {
   readonly type: string
   payload?: any
}

export class StoreState implements FluxStandardAction{
   type = Types.STORE_POST
   constructor(public payload:IPost[]) {}
}

export class StoreLatestPosts implements  FluxStandardAction {
   type = Types.STORE_LATEST_POSTS
   constructor(public payload:string[]) {}
}

export class StoreSearchPosts implements  FluxStandardAction {
   type = Types.STORE_SEARCH_POSTS
   constructor(public payload:string[]){}
}

export class StoreTagsPosts implements FluxStandardAction {
   type =Types.STORE_TAGS_POSTS
   constructor(public payload:string[]) {}
}

export class StoreCurrentTag implements FluxStandardAction {
   type =Types.STORE_CURRENT_TAG
   constructor(public payload:string) {}
}

export class StoreCurrentPost implements FluxStandardAction {
   type =Types.STORE_CURRENT_POSTS
   constructor(public payload:string) {
   }
}

export class StoreSearchQuery implements FluxStandardAction {
   type =Types.STORE_SEARCH_QUERY
   constructor(public payload:string) {}
}








