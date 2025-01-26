import { component$ } from '@builder.io/qwik';

export interface CommentProps {

}

export const Comment = component$<CommentProps>((props) => {
  return (
    <div>
      Comment component works!
    </div>
  );
});
