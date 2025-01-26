import { component$ } from '@builder.io/qwik';

export interface QuoteProps {

}

export const Quote = component$<QuoteProps>((props) => {
  return (
    <div>
      Quote component works!
    </div>
  );
});
