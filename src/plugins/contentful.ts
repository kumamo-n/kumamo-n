import {
  createClient as createContentfulClient,
  ContentfulClientApi,
} from "contentful";

const config = {
  space: process.env.CTF_SPACE_ID as string,
  accessToken: process.env.CTF_ACCESS_TOKEN as string,
};

export const createClient = (): ContentfulClientApi =>
  createContentfulClient(config);
