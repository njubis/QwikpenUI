import { component$ } from '@builder.io/qwik';

export interface EmptyStateProps {

}

export const EmptyState = component$<EmptyStateProps>((props) => {
  return (
    <div>
      EmptyState component works!
    </div>
  );
});
