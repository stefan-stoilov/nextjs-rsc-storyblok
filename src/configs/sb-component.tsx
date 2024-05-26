import { componentMap } from "@/configs/component-map";
import type { SbComponentProps } from "@/configs/types/sb-component-types";

export function SbComponent(props: SbComponentProps) {
  const Component = componentMap[props.component];
  if (!Component) return null;

  return <Component {...props} />;
}

export function SbSections({ components }: { components: SbComponentProps[] }) {
  return components.map((comp, i) => <SbComponent key={i} {...comp} />);
}

export default SbSections;
