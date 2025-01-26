import { component$ } from '@builder.io/qwik';

export interface SkeletonProps {

}

export const Skeleton = component$<SkeletonProps>((props) => {
  return (
    <div>
      Skeleton component works!
    </div>
  );
});
