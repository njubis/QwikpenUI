import { component$ } from '@builder.io/qwik';

export interface BackgroundProps {

}

export const Background = component$<BackgroundProps>((props) => {
  return (
    <div>
      Background component works!
    </div>
  );
});
