import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";
import { Button } from "./Button";
import {
  component$,
  useOn,
  useSignal,
  $,
  KnownEventNames,
} from "@builder.io/qwik";
import { DOM_EVENTS } from "../../consts/events";

export const ButtonWithEvents = component$<{ ev: KnownEventNames }>(
  ({ ev }) => {
    const labelSig = useSignal(ev+" event fired"); // init with first event
    useOn(
      ev,
      $(() => {
        labelSig.value = ev + " event fired";
      }),
    );
    return <Button class="btn-events">{labelSig.value}</Button>;
  },
);

test(`[Button Component]: Should render ⭐`, async () => {
  const { screen, render } = await createDOM();
  await render(<Button class="btn">⭐</Button>);
  expect(screen.outerHTML).toContain("⭐");
  const btn = screen.querySelector(".btn") as HTMLElement;
  expect(btn.outerHTML).toContain("⭐");
});

const runEventsTest = () => {
  for (const eventname in DOM_EVENTS) {
    const ev = DOM_EVENTS[eventname as keyof typeof DOM_EVENTS];
    test(`[Button Component]: Event handler - ${ev}`, async () => {
      const { screen, render, userEvent } = await createDOM();
      await render(<ButtonWithEvents ev={ev} />);

      const btn = screen.querySelector(".btn-events") as HTMLButtonElement;
      await userEvent(btn, "auxclick");
      expect(btn.textContent).toEqual(ev + " event fired");
    });
  }
};

runEventsTest();
