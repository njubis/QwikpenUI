import { component$ } from '@builder.io/qwik';

export interface EmailProps {

}

export const Email = component$<EmailProps>((props) => {
  return (
    <div>
      Email component works!
    </div>
  );
});
