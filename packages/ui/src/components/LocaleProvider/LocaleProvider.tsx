import { component$ } from '@builder.io/qwik';

export interface LocaleProviderProps {

}

export const LocaleProvider = component$<LocaleProviderProps>((props) => {
  return (
    <div>
      LocaleProvider component works!
    </div>
  );
});
