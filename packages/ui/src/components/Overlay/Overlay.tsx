import { component$ } from '@builder.io/qwik';

export interface OverlayProps {

}

export const Overlay = component$<OverlayProps>((props) => {
  return (
    <div>
      Overlay component works!
    </div>
  );
});
