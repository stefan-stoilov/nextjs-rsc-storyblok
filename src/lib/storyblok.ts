import { env } from "@/env";
import {
  storyblokInit,
  apiPlugin,
  type ISbStoriesParams,
  type ISbStories,
} from "@storyblok/js";
import { draftMode } from "next/headers";
import type { SbPageResult } from "@/configs/types";

const isDev = env.NODE_ENV === "development";

const storyblokToken = env.STORYBLOK_TOKEN;

export const { storyblokApi } = storyblokInit({
  accessToken: storyblokToken,
  bridge: true,
  apiOptions: {
    cache: { type: "memory" },
  },
  use: [apiPlugin],
});

export async function getLinks() {
  const { isEnabled: isDraft } = draftMode();

  const { data } = (await storyblokApi.get(
    "cdn/links",
    {
      version: isDraft || isDev ? "draft" : "published",
    },
    {
      next: { revalidate: isDraft || isDev ? 1 : 60 * 10 },
    },
  )) as unknown as ISbStories;

  const links = data ? data.links : null;
  return links;
}

export async function getStory(slug: string) {
  const { isEnabled: isDraft } = draftMode();

  const sbParams: ISbStoriesParams = {
    resolve_links: "url",
    version: isDraft || isDev ? "draft" : "published",
    cv: isDraft || isDev ? Date.now() : undefined,
  };

  return storyblokApi.get(`cdn/stories/${slug}`, sbParams, {
    next: { revalidate: isDraft || isDev ? 1 : 60 * 10 },
  }) as unknown as SbPageResult;
}

export const excludedStorySlugs = new Set([
  "home",
  "global/header",
  "global/footer",
]);

export function checkForGlobalSlug(slug: string): boolean {
  return slug.startsWith("global/");
}
