import { component$ } from '@builder.io/qwik';

export interface ItemProps {

}

export const Item = component$<ItemProps>((props) => {
  return (
    <div>
      Item component works!
    </div>
  );
});
