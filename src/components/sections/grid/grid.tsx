import { storyblokEditable } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react/rsc";
import { Feature, type FeatureProps } from "./feature";

export type GridProps = {
  component: "grid";
  columns?: FeatureProps[];
};

export const Grid = ({ columns, ...props }: GridProps & SbBlokData) => {
  return (
    <section {...storyblokEditable({ ...props })} className="w-full">
      <ul className="container grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {columns?.map((col) => <Feature key={col._uid} {...col} />)}
      </ul>
    </section>
  );
};
