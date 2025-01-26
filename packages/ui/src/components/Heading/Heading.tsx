import { component$ } from '@builder.io/qwik';

export interface HeadingProps {

}

export const Heading = component$<HeadingProps>((props) => {
  return (
    <div>
      Heading component works!
    </div>
  );
});
