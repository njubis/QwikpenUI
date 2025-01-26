import { component$ } from '@builder.io/qwik';

export interface BaseProps {

}

export const Base = component$<BaseProps>((props) => {
  return (
    <div>
      Base component works!
    </div>
  );
});
