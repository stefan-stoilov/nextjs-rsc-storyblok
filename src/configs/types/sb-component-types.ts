import type { ComponentType } from "react";
import type { TeaserProps } from "@/components/Teaser";

export type SbComponentProps = TeaserProps;

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
