import { useToggle } from "./useToggle";

/**
 * A version of the `useToggle` hook for boolean states.
 * 
 * @param defaultValue - The initial boolean value of the state. Defaults to `false` if not provided.
 * @example
 * ```ts
 * const state = useBoolean();
 * state.value; // false (default)
 * state.toggle(); // true
 * state.setLeft(); // false
 * ```
 */
export function useBoolean(defaultValue = false) {
  const booleanState = useToggle<boolean, boolean>(defaultValue, !defaultValue);
  return booleanState;
}
