import { component$ } from '@builder.io/qwik';

export interface TitleProps {

}

export const Title = component$<TitleProps>((props) => {
  return (
    <div>
      Title component works!
    </div>
  );
});
