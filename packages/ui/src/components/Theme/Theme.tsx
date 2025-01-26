import { component$ } from '@builder.io/qwik';

export interface ThemeProps {

}

export const Theme = component$<ThemeProps>((props) => {
  return (
    <div>
      Theme component works!
    </div>
  );
});
