import { $, useOnWindow, useSignal } from "@builder.io/qwik";

export default function useColorScheme() {
  const scheme = useSignal("light");
  useOnWindow(
    "load",
    $(() => {
      scheme.value = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", ({ matches: isDark }) => {
          scheme.value = isDark ? "dark" : "light";
        });
    }),
  );
  return scheme;
}
