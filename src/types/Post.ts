import { Asset } from "contentful";

export interface IPost {
  slug: string;
  id: string;
  title: string;
  contents: string;
  webp: Asset;
  image: Asset;
  tags: string[];
  publishedAt: string;
}

export class PostEntity {
  private readonly _props: IPost;

  constructor(props: IPost) {
    this._props = {
      ...props,
    };
  }
  get props(): IPost {
    return this._props;
  }
}
