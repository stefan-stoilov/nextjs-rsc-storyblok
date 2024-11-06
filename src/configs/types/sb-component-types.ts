import type { ComponentType } from "react";
import type { TeaserProps, GridProps } from "@/components/sections/types";

export type SbComponentProps = TeaserProps | GridProps;

export type SbComponentKey = SbComponentProps["component"];

export type DynamicComponent = ComponentType<SbComponentProps>;

export type ComponentMap = Record<SbComponentKey, DynamicComponent>;

export type SbPageProps = {
  story: {
    content: {
      body: SbComponentProps[];
    };
  };
};

export type SbPageResult = {
  data: SbPageProps;
  perPage: number;
  total: number;
  headers: Headers;
};
