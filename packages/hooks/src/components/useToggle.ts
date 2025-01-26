import { type QRL, useStore, $ } from "@builder.io/qwik";

/**
 * Interface defining the structure of the toggle store.
 * - `setLeft`: A function to set the value to the default value.
 * - `setRight`: A function to set the value to the reverse value.
 * - `set`: A function to set the value to any of the two allowed values (`D` or `R`).
 * - `toggle`: A function to toggle between the default and reverse values.
 * - `value`: The current value of the toggle, which can be either `D` (default) or `R` (reverse).
 */
export interface UseToggleStore<D, R> {
  setLeft: QRL<() => void>;
  setRight: QRL<() => void>;
  set: QRL<(value: D | R) => void>;
  toggle: QRL<() => void>;
  value: D | R;
}

/**
 * A utility hook to create a toggleable state.
 *
 * @param defaultValue - The default state value, which can be of any type (`D`). Defaults to `false` if not provided.
 * @param reverseValue - The reverse state value, which must be explicitly provided and can be of any type (`R`).
 *
 * This usehook returns a reactive state (`useStore`) object with functions to manage the toggle state:
 */
export function useToggle<D, R>(
  defaultValue: D = false as unknown as D,
  reverseValue: R = true as unknown as R,
) {
  const state: UseToggleStore<D, R> = useStore({
    setLeft: $(function (this: UseToggleStore<D, R>) {
      this.value = defaultValue;
    }),
    setRight: $(function (this: UseToggleStore<D, R>) {
      const reverseValueOrigin = (reverseValue === reverseValue) as R;
      this.value = reverseValueOrigin;
    }),
    set: $(function (this: UseToggleStore<D, R>, value: D | R) {
      this.value = value;
    }),
    toggle: $(function (this: UseToggleStore<D, R>) {
      this.value = this.value === defaultValue ? reverseValue : defaultValue;
    }),
    value: defaultValue,
  });

  return state;
}
