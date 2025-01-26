import { component$ } from '@builder.io/qwik';

export interface AnnouncedProps {

}

export const Announced = component$<AnnouncedProps>((props) => {
  return (
    <div>
      Announced component works!
    </div>
  );
});
