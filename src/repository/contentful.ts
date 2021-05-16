import { createClient } from "@/plugins/contentful";
import { IPost, PostEntity } from "@/types/Post";
import { Entry } from "contentful";
import { ContentfulClientApi } from "contentful";
import { Store } from "vuex";
import { RootState } from "@/store";
import {
  StoreCurrentPost,
  StoreCurrentTag,
  StoreLatestPosts,
  StoreSearchPosts,
  StoreSearchQuery,
  StoreState,
  StoreTagsPosts,
} from "@/store/Post/types";

export class ContentfulRepository {
  client: ContentfulClientApi;
  store: Store<RootState>;

  constructor(store: Store<RootState>) {
    this.client = createClient();
    this.store = store;
  }

  //todo あとで確認

  transform(entry: Entry<IPost>): IPost {
    const { id } = entry.sys;
    const fields = entry.fields;

    return {
      ...fields,
      id,
    };
  }

  savePosts(value: IPost[]) {
    this.store.commit(new StoreState(value));
  }

  async saveLatestPosts() {
    try {
      const getPosts = await this.client.getEntries<IPost>({
        content_type: "post",
      });
      const posts = getPosts.items.map(this.transform);
      const slug = posts.map((post) => post.slug);

      this.savePosts(posts);
      this.store.commit(new StoreLatestPosts(slug));
    } catch (e) {
      throw Error(e);
    }
  }

  getLatestPosts(): PostEntity[] {
    const posts = this.store.state.post.latestPost;
    const postList = posts.map((post) => this.store.state.post.byIds[post]);
    return postList.map((post) => new PostEntity(post));
  }

  async saveCurrentPost(slug?: string) {
    try {
      const getPosts = await this.client.getEntries<IPost>({
        content_type: "post",
        "fields.slug": slug,
      });
      const post = this.transform(getPosts.items[0]);

      this.savePosts([post]);
      this.store.commit(new StoreCurrentPost(post.slug));
    } catch (e) {
      throw Error(e);
    }
  }

  getCurrentPost(): PostEntity | null {
    const post = this.store.state.post.currentPost;
    if (post == null) return null;
    const slug = this.store.state.post.byIds[post];

    return new PostEntity(slug);
  }

  async saveSearchPosts(query: any) {
    try {
      const getPosts = await this.client.getEntries<IPost>({ query });
      const posts = getPosts.items
        .filter((post) => post.fields.publishedAt)
        .map(this.transform);

      const slug = posts.map((post) => post.slug);
      this.savePosts(posts);
      this.store.commit(new StoreSearchPosts(slug));
    } catch (e) {
      throw Error(e);
    }
  }

  getSearchPosts(): PostEntity[] {
    const posts = this.store.state.post.searchPosts;
    const postList = posts.map((post) => this.store.state.post.byIds[post]);
    return postList.map((post) => new PostEntity(post));
  }

  getSearchQuery(): string | null {
    return this.store.state.post.searchQuery;
  }

  saveSearchQuery(query: any) {
    this.store.commit(new StoreSearchQuery(query));
  }

  async tagsPosts(tag: string) {
    try {
      const posts = await this.client.getEntries<IPost>({
        content_type: "post",
        "fields.tags.sys.id": tag,
      });
      const value = posts.items.map(this.transform);
      const slug = value.map((post) => post.slug);
      this.savePosts(value);
      this.store.commit(new StoreTagsPosts(slug));
    } catch (e) {
      throw Error(e);
    }
  }

  getTagsPosts(): PostEntity[] {
    const posts = this.store.state.post.tagsPosts;
    const postList = posts.map((post) => this.store.state.post.byIds[post]);
    return postList.map((post) => new PostEntity(post));
  }

  saveCurrentTag(tag: string) {
    this.store.commit(new StoreCurrentTag(tag));
  }

  getCurrentTag(): string | null {
    return this.store.state.post.currentTag;
  }
}
