import { ISbStories } from "storyblok-js-client";
import { storyblokApi, getStory, excludedStorySlugs } from "@/lib/storyblok";
import SbSections from "@/configs/sb-component";

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
  const slug = params?.slug ? params.slug.join("/") : "home";
  const { data } = await getStory(slug);

  const components = data.story.content.body;

  return (
    <main className="flex h-screen flex-col items-center p-20">
      <h1 className="text-center text-xl">Storyblok Demo</h1>
      <SbSections components={components} />
    </main>
  );
}
