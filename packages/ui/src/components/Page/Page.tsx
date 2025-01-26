import { component$ } from '@builder.io/qwik';

export interface PageProps {

}

export const Page = component$<PageProps>((props) => {
  return (
    <div>
      Page component works!
    </div>
  );
});
