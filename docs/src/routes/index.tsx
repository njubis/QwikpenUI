import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="min-h-[100vh] flex flex-col">
      <h1 class="text-3xl text-center py-3">Qwikpen UI</h1>
      <div class="flex items-center justify-center">
        <Link href="/components" class="px-4">
          Components
        </Link>
        <Link href="/hooks" class="border-l px-4">
          Hooks
        </Link>
      </div>
      <div class="text-center grow h-full flex flex-col items-center justify-center">
        <h2>A Library of <strong>UI components</strong> and <code>use*</code> hooks for Qwik.</h2>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Qwikpen UI",
  meta: [
    {
      name: "description",
      content: "A library of tools and component to build UIs with Qwik",
    },
  ],
};
