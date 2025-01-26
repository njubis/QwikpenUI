import { cva } from "class-variance-authority";
import type * as CLSX from "clsx";

export type ClassPropKey = "class" | "className";
export type ClassValue = CLSX.ClassValue;

export type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;
export type ConfigSchema = Record<string, Record<string, ClassValue>>;
export type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
};

export type ConfigVariantsMulti<T extends ConfigSchema> = {
  [Variant in keyof T]?:
    | StringToBoolean<keyof T[Variant]>
    | StringToBoolean<keyof T[Variant]>[]
    | undefined;
};

export type ClassProp =
  | {
      class: ClassValue;
      className?: never;
    }
  | {
      class?: never;
      className: ClassValue;
    }
  | {
      class?: never;
      className?: never;
    };

export const btnVariants = {
  intent: {
    primary: "",
    secondary: "",
    accent: "",
    danger: "",
    success: "",
    warning: "",
    info: "",
    ghost: "",
    link: "",
  },
  size: {
    xs: "",
    sm: "",
    md: "",
    lg: "",
    xl: "",
    xxl: "",
  },
  shape: {
    square: "",
    rounded: "",
    pill: "",
    circle: "",
    clipped: "",
  },
  state: {
    disabled: "",
    loading: "",
  },
  style: {
    outline: "",
    solid: "",
    gradient: "",
    glass: "",
  },
  disabled: {
    false: "",
    true: "",
  },
};

// Function to generate all possible compoundVariants
function generateCompoundVariants<T extends ConfigSchema>(
  variants: T,
): ConfigVariants<T>[] {
  const variantKeys = Object.keys(variants) as (keyof T)[];
  const compoundVariants: ConfigVariants<T>[] = [];

  // Recursive function to generate combinations
  function generateCombinations(
    current: Partial<ConfigVariants<T>>,
    remainingKeys: (keyof T)[],
  ) {
    if (remainingKeys.length === 0) {
      const classNames = Object.entries(current)
        .map(([key, value]) => variants[key][value as string])
        .join(" ");
      compoundVariants.push({ ...current, class: classNames });
      return;
    }

    const key = remainingKeys[0];
    const values = Object.keys(variants[key]) as (keyof T[keyof T])[];

    values.forEach((value) => {
      generateCombinations(
        {
          ...current,
          [key]: value,
        },
        remainingKeys.slice(1),
      );
    });
  }

  generateCombinations({}, variantKeys);

  return compoundVariants;
}

 console.log(generateCompoundVariants<typeof btnVariants>(btnVariants))
