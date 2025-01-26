import { component$ } from '@builder.io/qwik';

export interface StatusProps {

}

export const Status = component$<StatusProps>((props) => {
  return (
    <div>
      Status component works!
    </div>
  );
});
