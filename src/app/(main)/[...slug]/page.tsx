import type { ISbStories } from "storyblok-js-client";
import {
  storyblokApi,
  getStory,
  excludedStorySlugs,
  checkForGlobalSlug,
} from "@/lib/storyblok";
import SbSections from "@/configs/sb-component";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const { data } = (await storyblokApi.get("cdn/links/", {
    version: "published",
  })) as unknown as ISbStories;

  const paths: { slug: string[] }[] = [];
  // Create a route for every link
  Object.keys(data.links).forEach((linkKey) => {
    // Do not create a route for folders and home
    if (
      data.links[linkKey].is_folder ||
      excludedStorySlugs.has(data.links[linkKey].slug as string)
    )
      return;

    // Get array for slug because of catch all
    const slug = data.links[linkKey].slug as string;
    let splittedSlug = slug.split("/");

    // Creates all the routes
    paths.push({ slug: splittedSlug });
  });

  return paths;
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join("/");
  if (checkForGlobalSlug(slug)) redirect("/");
  const { data } = await getStory(slug);

  const components = data.story.content.body;

  return (
    <main className="h-fit min-h-screen w-full">
      <SbSections components={components} />
    </main>
  );
}
