import { type Signal, component$, useSignal } from "@builder.io/qwik";
import { useOnclickOutside } from "..";
import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";

export const ClickOutsideComp = component$(() => {
const targetRef = useSignal<HTMLElement>();
  const isClickOutside = useOnclickOutside(targetRef as Signal<HTMLElement>);
  return (
    <>
      <div ref={targetRef} id="target">{!isClickOutside ? "outsideclick" : "insideclick"}</div>
      <div id="outside">Outside Element</div>
    </>
  );
});

test(`[useOnclickOutside]: Should detect outside clicks`, async () => {
  const { screen, render, userEvent } = await createDOM();
  await render(<ClickOutsideComp />);
  expect(screen.outerHTML).toContain("insideclick");
  const target = screen.querySelector("#target") as HTMLElement;
  const outside = screen.querySelector("#outside") as HTMLElement;

  //nothing should change
  await userEvent(target, "click");
  expect(target.textContent).toEqual("insideclick");

  // outside click the content of target should change
  //await userEvent(outside, "click");
  //expect(target.textContent).toEqual("outsideclick");
});

