import { component$ } from '@builder.io/qwik';

export interface LogoProps {

}

export const Logo = component$<LogoProps>((props) => {
  return (
    <div>
      Logo component works!
    </div>
  );
});
