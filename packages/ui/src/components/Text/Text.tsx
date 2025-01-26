import { component$ } from '@builder.io/qwik';

export interface TextProps {

}

export const Text = component$<TextProps>((props) => {
  return (
    <div>
      Text component works!
    </div>
  );
});
