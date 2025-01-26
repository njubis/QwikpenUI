import { component$ } from '@builder.io/qwik';

export interface PortalProps {

}

export const Portal = component$<PortalProps>((props) => {
  return (
    <div>
      Portal component works!
    </div>
  );
});
