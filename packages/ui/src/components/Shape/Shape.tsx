import { component$ } from '@builder.io/qwik';

export interface ShapeProps {

}

export const Shape = component$<ShapeProps>((props) => {
  return (
    <div>
      Shape component works!
    </div>
  );
});
