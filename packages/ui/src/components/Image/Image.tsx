import { component$ } from '@builder.io/qwik';

export interface ImageProps {

}

export const Image = component$<ImageProps>((props) => {
  return (
    <div>
      Image component works!
    </div>
  );
});
