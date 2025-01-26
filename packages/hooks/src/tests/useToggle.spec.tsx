import { component$ } from "@builder.io/qwik";
import { useToggle } from "..";
import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";

export const UseToggleComp = component$<{def:any, reverse:any}>(({def, reverse}) => {
  const toggledBtw = useToggle(def, reverse);
  return (
    <div
      onClick$={() => {
        toggledBtw.toggle();
      }}
      class="usetgl"
    >
      {toggledBtw.value.toString()}
    </div>
  );
});

test(`[UseToggle]: Should render 1 and then 0`, async () => {
  const { screen, render, userEvent } = await createDOM();
  await render(<UseToggleComp def="1" reverse="0" />);
  expect(screen.outerHTML).toContain("1");
  const element = screen.querySelector(".usetgl") as HTMLElement;
  expect(element.textContent).toContain("1");
  await userEvent(element, "click");
  expect(element.textContent).toEqual("0");
});

test(`[UseToggle]: Should render true and then false`, async () => {
  const { screen, render, userEvent } = await createDOM();
  await render(<UseToggleComp def={true} reverse={false}/>);
  expect(screen.outerHTML).toContain("true");
  const element = screen.querySelector(".usetgl") as HTMLElement;
  expect(element.textContent).toContain("true");
  await userEvent(element, "click");
  expect(element.textContent).toEqual("false");
});
