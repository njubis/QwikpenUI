import { component$ } from '@builder.io/qwik';

export interface ColorProps {

}

export const Color = component$<ColorProps>((props) => {
  return (
    <div>
      Color component works!
    </div>
  );
});
