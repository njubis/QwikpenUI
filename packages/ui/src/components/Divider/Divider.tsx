import { component$ } from '@builder.io/qwik';

export interface DividerProps {

}

export const Divider = component$<DividerProps>((props) => {
  return (
    <div>
      Divider component works!
    </div>
  );
});
