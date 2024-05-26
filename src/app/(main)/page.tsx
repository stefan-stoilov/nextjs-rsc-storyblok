import { getStory } from "@/lib/storyblok";
import SbSections from "@/configs/sb-component";

export default async function Home() {
  const { data } = await getStory("home");

  const components = data.story.content.body;

  return (
    <main className="flex h-screen flex-col items-center p-20">
      <h1 className="text-center text-xl">Storyblok Demo</h1>
      <SbSections components={components} />
    </main>
  );
}
