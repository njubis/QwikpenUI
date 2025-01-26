import {
  PropsOf,
  component$,
  useSignal,
  useStyles$,
  useTask$,
} from "@builder.io/qwik";
import {
  codeToHtml,
  bundledThemes,
  type BuiltinTheme,
  type BuiltinLanguage,
} from "shiki";

export type CodeblockProps = {
  filename?: string;
  language: BuiltinLanguage;
  theme?: BuiltinTheme;
  code: string;
} & PropsOf<"div">;

export const Codeblock = component$<CodeblockProps>(
  ({ filename, language, code, theme = "ayu-dark" }) => {
    //line number css
    useStyles$(`
      code {
        counter-reset: step;
        counter-increment: step 0;
      }

      code .line::before {
        content: counter(step);
        counter-increment: step;
        width: 1rem;
        margin-right: 1.5rem;
        display: inline-block;
        text-align: right;
        color: rgba(115,138,148,.4)
      }
    `);
    const htmlSig = useSignal<string>("");
    const themeFg = useSignal("");
    const themeBg = useSignal("");
    useTask$(async () => {
      htmlSig.value = await codeToHtml(code, {
        lang: language,
        theme: theme,
      });
      const th = (await bundledThemes[theme]()).default;
      themeFg.value = th.colors!["editor.foreground"] || "";
      themeBg.value = th.colors!["editor.background"] || "";
    });
    return (
      <div
        class="rounded-md overlow-hidden"
        style={{
          backgroundColor: themeBg.value,
          color: themeFg.value,
        }}
      >
        <div class="flex w-full items-center pb-1 justify-between text-sm font-mono border-b">
          <span>{filename}</span>
          <span class="rounded-bl-md px-2 bg-gray-700 capitalize">
            {language}
          </span>
        </div>
        <div
          dangerouslySetInnerHTML={htmlSig.value}
          class="overflow-auto max-h-72 w-full pt-6 [&_pre]:w-min p-2"
        />
      </div>
    );
  },
);
