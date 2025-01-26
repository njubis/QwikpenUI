import { type PropsOf, Slot, component$ } from "@builder.io/qwik";
import { cn } from "../../utils/cn";

export type ButtonProps = {} & PropsOf<"button">;

export const Button = component$<ButtonProps>(
  ({ class: classNames, ...props }) => {
    return (
      <button class={cn(classNames)} {...props}>
        <Slot />
      </button>
    );
  },
);
