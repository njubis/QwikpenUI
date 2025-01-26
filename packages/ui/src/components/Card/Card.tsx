import { component$ } from '@builder.io/qwik';

export interface CardProps {

}

export const Card = component$<CardProps>((props) => {
  return (
    <div>
      Card component works!
    </div>
  );
});
