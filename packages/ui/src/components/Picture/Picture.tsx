import { component$ } from '@builder.io/qwik';

export interface PictureProps {

}

export const Picture = component$<PictureProps>((props) => {
  return (
    <div>
      Picture component works!
    </div>
  );
});
