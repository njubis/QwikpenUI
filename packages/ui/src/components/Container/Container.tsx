import { component$ } from '@builder.io/qwik';

export interface ContainerProps {

}

export const Container = component$<ContainerProps>((props) => {
  return (
    <div>
      Container component works!
    </div>
  );
});
