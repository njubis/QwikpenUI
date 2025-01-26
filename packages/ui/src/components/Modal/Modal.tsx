import { component$ } from '@builder.io/qwik';

export interface ModalProps {

}

export const Modal = component$<ModalProps>((props) => {
  return (
    <div>
      Modal component works!
    </div>
  );
});
