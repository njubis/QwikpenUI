import { component$ } from '@builder.io/qwik';

export interface ToastProps {

}

export const Toast = component$<ToastProps>((props) => {
  return (
    <div>
      Toast component works!
    </div>
  );
});
