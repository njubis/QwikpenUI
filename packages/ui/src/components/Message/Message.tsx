import { component$ } from '@builder.io/qwik';

export interface MessageProps {

}

export const Message = component$<MessageProps>((props) => {
  return (
    <div>
      Message component works!
    </div>
  );
});
