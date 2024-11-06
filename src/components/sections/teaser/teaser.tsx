import { storyblokEditable } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react/rsc";

export type TeaserProps = {
  component: "teaser";
  headline?: string;
} & SbBlokData;

export const Teaser = ({ headline, ...props }: TeaserProps) => {
  return (
    <section {...storyblokEditable({ ...props })} className="w-full">
      <div className="container flex justify-center py-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {headline}
        </h1>
      </div>
    </section>
  );
};
