import { component$ } from '@builder.io/qwik';

export interface BadgeProps {

}

export const Badge = component$<BadgeProps>((props) => {
  return (
    <div>
      Badge component works!
    </div>
  );
});
