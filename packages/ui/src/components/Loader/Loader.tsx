import { component$ } from '@builder.io/qwik';

export interface LoaderProps {

}

export const Loader = component$<LoaderProps>((props) => {
  return (
    <div>
      Loader component works!
    </div>
  );
});
