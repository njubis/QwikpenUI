import { component$ } from '@builder.io/qwik';

export interface TransitionProps {

}

export const Transition = component$<TransitionProps>((props) => {
  return (
    <div>
      Transition component works!
    </div>
  );
});
