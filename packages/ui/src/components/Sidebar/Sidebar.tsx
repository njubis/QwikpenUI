import { component$ } from '@builder.io/qwik';

export interface SidebarProps {

}

export const Sidebar = component$<SidebarProps>((props) => {
  return (
    <div>
      Sidebar component works!
    </div>
  );
});
