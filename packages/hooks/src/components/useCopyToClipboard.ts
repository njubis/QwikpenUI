import { $ } from "@builder.io/qwik";

export function useCopyToClipboard() {
  return $(async (text: string) => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard;
      await cb.writeText(text);
    } else {
      try {
        const body = document.querySelector("body");
        const textarea = document.createElement("textarea");
        body?.appendChild(textarea);
        textarea.value = text;
        textarea.select();
        document.execCommand("copy");
        body?.removeChild(textarea);
      } catch (e) {
        throw new Error("Failed to copy to clipboard");
      }
    }
  });
}
