import { createDOM } from "@builder.io/qwik/testing";
import { test, expect,assert } from "vitest";
import { Box, BoxElements } from "./Box";
import {
  component$,
  useOn,
  useSignal,
  $,
  KnownEventNames,
  QwikIntrinsicElements,
} from "@builder.io/qwik";
import { DOM_EVENTS } from "../../test-utils/events";
import { CONTAINER_TAGS, TAG_NAMES } from "../../consts/tagNames";

export const BoxWithEvents = component$<{ ev: KnownEventNames }>(({ ev }) => {
  const labelSig = useSignal(ev + " event fired"); // init with first event
  useOn(
    ev,
    $(() => {
      labelSig.value = ev + " event fired";
    }),
  );
  return <Box class="btn-events">{labelSig.value}</Box>;
});

export const BoxWithTagName = component$<{ tagname: BoxElements }>(
  ({ tagname }) => {
    return (
      <Box element={tagname} class="box-custom-tagname">
        {" i am a " + tagname}
      </Box>
    );
  },
);

test(`[Button Component]: Should render ⭐`, async () => {
  const { screen, render } = await createDOM();
  await render(<Box class="box">⭐</Box>);
  expect(screen.outerHTML).toContain("⭐");
  const btn = screen.querySelector(".box") as HTMLElement;
  expect(btn.outerHTML).toContain("⭐");
});

const runEventsTest = () => {
  for (const eventname in DOM_EVENTS) {
    const ev = DOM_EVENTS[eventname as keyof typeof DOM_EVENTS];
    test(`[Box Component]: Event handler - ${ev}`, async () => {
      const { screen, render, userEvent } = await createDOM();
      await render(<BoxWithEvents ev={ev} />);
      const btn = screen.querySelector(".btn-events") as HTMLButtonElement;
      await userEvent(btn, ev);
      expect(btn.textContent).toEqual(ev + " event fired");
    });
  }
};

const runTagNameTest = () => {
  for (const tgname in TAG_NAMES) {
    const tg = TAG_NAMES[tgname as keyof typeof TAG_NAMES];
    test(`[Box Component]: TagName - ${tg}`, async () => {
      const { screen, render } = await createDOM();
      await render(<BoxWithTagName tagname={tg} />);
      const element = screen.querySelector(
        ".box-custom-tagname",
      ) as HTMLElement;
      if (CONTAINER_TAGS.includes(tg)) {
        expect(element.tagName).toEqual(tg.toUpperCase());
      }
    });
  }
};

runEventsTest();
runTagNameTest();
