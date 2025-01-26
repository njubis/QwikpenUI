import { component$ } from '@builder.io/qwik';

export interface GlobalHeaderProps {

}

export const GlobalHeader = component$<GlobalHeaderProps>((props) => {
  return (
    <div>
      GlobalHeader component works!
    </div>
  );
});
