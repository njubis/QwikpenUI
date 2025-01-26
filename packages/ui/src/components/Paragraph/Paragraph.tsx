import { component$ } from '@builder.io/qwik';

export interface ParagraphProps {

}

export const Paragraph = component$<ParagraphProps>((props) => {
  return (
    <div>
      Paragraph component works!
    </div>
  );
});
