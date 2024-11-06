import { getStory } from "@/lib/storyblok";
import SbSections from "@/configs/sb-component";

export default async function Home() {
  const { data } = await getStory("home");

  const components = data.story.content.body;

  return (
    <main className="h-fit min-h-screen w-full">
      <SbSections components={components} />
    </main>
  );
}
