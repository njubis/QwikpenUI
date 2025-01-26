import { component$ } from '@builder.io/qwik';

export interface LoadingProps {

}

export const Loading = component$<LoadingProps>((props) => {
  return (
    <div>
      Loading component works!
    </div>
  );
});
