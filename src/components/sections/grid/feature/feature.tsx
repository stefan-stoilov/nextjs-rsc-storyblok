import { storyblokEditable } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react/rsc";

export type FeatureProps = {
  component: "feature";
  name?: string;
} & SbBlokData;

export const Feature = ({ name, ...props }: FeatureProps) => {
  return (
    <li
      {...storyblokEditable({ ...props })}
      className="flex aspect-square w-full items-center justify-center rounded border border-muted"
    >
      <span className="block text-lg font-semibold">{name}</span>
    </li>
  );
};
