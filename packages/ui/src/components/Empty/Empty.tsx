import { component$ } from '@builder.io/qwik';

export interface EmptyProps {

}

export const Empty = component$<EmptyProps>((props) => {
  return (
    <div>
      Empty component works!
    </div>
  );
});
