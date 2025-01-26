import { component$ } from '@builder.io/qwik';

export interface MessageBarProps {

}

export const MessageBar = component$<MessageBarProps>((props) => {
  return (
    <div>
      MessageBar component works!
    </div>
  );
});
