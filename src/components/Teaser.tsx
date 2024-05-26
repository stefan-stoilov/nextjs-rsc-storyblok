import { storyblokEditable } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react/rsc";

export type TeaserProps = {
  component: "teaser";
  headline?: string;
  test?: TeaserProps;
} & SbBlokData;

const Teaser = ({ headline, ...props }: TeaserProps) => {
  return <h2 {...storyblokEditable({ ...props })}>{headline}</h2>;
};

export default Teaser;
