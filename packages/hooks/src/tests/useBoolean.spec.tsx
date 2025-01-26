import { component$ } from "@builder.io/qwik";
import { useBoolean } from "..";
import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";

export const UseBooleanComp = component$<{def:boolean}>(({def}) => {
  const toggledBool = useBoolean(def);
  return (
    <div
      onClick$={async () => {
       await toggledBool.toggle();
      }}
      class="usebool"
    >
      {toggledBool.value.toString()}
    </div>
  );
});

test(`[UseBoolean]: Should render true and then false`, async () => {
  const { screen, render, userEvent } = await createDOM();
  await render(<UseBooleanComp def={true} />);
  expect(screen.outerHTML).toContain("true");
  const element = screen.querySelector(".usebool") as HTMLElement;
  expect(element.textContent).toContain("true");
  await userEvent(element, "click");
  expect(element.textContent).toEqual("false");
});

