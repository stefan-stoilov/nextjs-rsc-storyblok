import dynamic from "next/dynamic";
import type { ComponentMap } from "@/configs/types/sb-component-types";

export const componentMap: ComponentMap = {
  teaser: dynamic(() => import("@/components/sections/teaser")),
  grid: dynamic(() => import("@/components/sections/grid")),
};

export default componentMap;
