import { type QRL, useStore, $ } from "@builder.io/qwik";
export type CounterState = {
  value: number;
  increment: QRL<() => void>;
  decrement: QRL<() => void>;
  set: QRL<(val: number) => void>;
  reset: QRL<() => void>;
};
export type CounterOptions = {
  max?: number;
  min?: number;
  step?: number;
};
export function useCounter(startingValue = 0, options: CounterOptions) {
  const { min = -Infinity, max = Infinity, step = 1 } = options;
  if (typeof min === "number" && startingValue < min) {
    throw new Error(
      `[useCounter]: Your starting value of ${startingValue} is less than your min of ${min}.`,
    );
  }

  if (typeof max === "number" && startingValue > max) {
    throw new Error(
      `[useCounter]: Your starting value of ${startingValue} is greater than your max of ${max}.`,
    );
  }
  const count: CounterState = useStore({
    value: startingValue,
    increment: $(function (this: CounterState) {
      const nextCount = this.value + step;
      if (typeof max === "number" && nextCount > max) {
        return;
      }
      this.value = nextCount;
      return;
    }),
    decrement: $(function (this: CounterState) {
      const nextCount = this.value - step;
      if (typeof min === "number" && nextCount < min) {
        return;
      }
      this.value = nextCount;
    }),
    set: $(function (this: CounterState, nextCount: number) {
      if (typeof max === "number" && nextCount > max) {
        return;
      }
      if (typeof min === "number" && nextCount < min) {
        return;
      }
      this.value = nextCount;
    }),
    reset: $(function (this: CounterState) {
      this.value = startingValue;
    }),
  });

  return count;
}
