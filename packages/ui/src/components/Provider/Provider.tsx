import { component$ } from '@builder.io/qwik';

export interface ProviderProps {

}

export const Provider = component$<ProviderProps>((props) => {
  return (
    <div>
      Provider component works!
    </div>
  );
});
