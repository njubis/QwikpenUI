import { component$ } from '@builder.io/qwik';

export interface BannerProps {

}

export const Banner = component$<BannerProps>((props) => {
  return (
    <div>
      Banner component works!
    </div>
  );
});
