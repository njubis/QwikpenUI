import { component$ } from '@builder.io/qwik';

export interface TooltipProps {

}

export const Tooltip = component$<TooltipProps>((props) => {
  return (
    <div>
      Tooltip component works!
    </div>
  );
});
