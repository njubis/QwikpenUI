import { component$ } from '@builder.io/qwik';

export interface PanelProps {

}

export const Panel = component$<PanelProps>((props) => {
  return (
    <div>
      Panel component works!
    </div>
  );
});
