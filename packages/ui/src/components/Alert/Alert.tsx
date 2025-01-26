import { component$ } from '@builder.io/qwik';

export interface AlertProps {

}

export const Alert = component$<AlertProps>((props) => {
  return (
    <div>
      Alert component works!
    </div>
  );
});
