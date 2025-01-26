import type { QRL, Signal, PropsOf, KnownEventNames } from "@builder.io/qwik";
import { Slot, component$, useSignal } from "@builder.io/qwik";
import { useOnDocument, useSignal, $ } from "@builder.io/qwik";
import type { KnownEventNames, QRL, Signal } from "@builder.io/qwik";

/**
 * A hook to detect and optionally handle clicks outside of a specified element.
 *
 * @param ref - Signal reference to the target HTML element.
 * @param strategy - The detection strategy: "DOMRect", "child", or "all". Defaults to "all".
 * @param cb - Optional callback triggered when a click outside is detected.
 * @param events - Event names to listen for. Defaults to `['touchstart', 'mousedown']`.
 *
 * @returns A reactive signal (`Signal<boolean>`) indicating if the last click was outside the target element.
 */
export const useOnclickOutside = (
  ref: Signal<HTMLElement | null>,
  strategy: "DOMRect" | "child" | "all" = "all",
  cb?: QRL<(e: Event) => void>,
  events: KnownEventNames | KnownEventNames[] = ["touchstart", "mousedown"]
) => {
  const isClickOutside = useSignal(false);

  const isPointInDOMRect = $((point: { x: number; y: number }, rect: DOMRect): boolean =>
    point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom)

  const handler = $(async (e: TouchEvent | MouseEvent) => {
    const element = ref.value;
    if (!element) return;
// @ts-ignore
    const point = { x: e.clientX, y: e.clientY };
    const rect = element.getBoundingClientRect();
    const target = e.target as Element;

    isClickOutside.value =
      strategy === "DOMRect"
        ? !(await isPointInDOMRect(point, rect))
        : strategy === "child"
        ? !element.contains(target)
        : !(await isPointInDOMRect(point, rect)) || !element.contains(target);

    if (cb) await cb(e);
  });

  useOnDocument(events, handler);

  return isClickOutside;
};

export type ClickOutsideProps = {
  onClickOutside$?: QRL<(e: Event) => void>;
  events?: KnownEventNames | KnownEventNames[];
} & PropsOf<"div">;

/**
 * ## ClickOutside
 *
 * Wrap a component that needs to listen for click oustide of itself
 * 
 * Uses the `useOnclickOutside` from `@qwikpen/hooks` hook.
 * */
export const ClickOutside = component$<ClickOutsideProps>((props) => {
  const { onClickOutside$ } = props;
  const wrapperRef = useSignal<HTMLElement>();
  useOnclickOutside(wrapperRef as Signal<HTMLElement>, onClickOutside$);
  return (
    <div ref={wrapperRef} class="h-max w-max">
      <Slot />
    </div>
  );
});
