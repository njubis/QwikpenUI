import {
  Slot,
  component$,
  type PropsOf,
} from "@builder.io/qwik";
import { CONTAINER_TAGS } from "../../consts/tagNames";

export type BoxElements =(typeof CONTAINER_TAGS)[number];

export type BoxProps = {
  element?: BoxElements;
} & PropsOf<BoxElements>;

export const Box = component$<BoxProps>(({ element, ...props }) => {
  const Tag = element ?? "div";
  return (
    <Tag {...props}>
      {/** @ts-ignore */}
      <Slot />
    </Tag>
  );
});
