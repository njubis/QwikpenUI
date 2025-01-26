Hey, Your Contribution is welcome.

This monorepo uses `lerna` and `pnpm` as the package manager.
Also you will need `commitizen` and `cz-emoji` for the git commits.
`cz-emoji` will be install once you clone the repo and install the deps.

1. clone the repo then `pnpm install` from the root of the project.
2. create a branch
3. make changes or add components/hooks
4. test
5. update docs(if changes require that)
6. create a pull request

When adding deps
```
pnpm add <pkg> --filter=<workspace-package> # workspace-package can be docs, @qwikpen/{ui|hooks|utils}
```

To ru a script for a specific package:
```bash
lerna run <script name> --scope=<workspace-package> # workspace-package can be docs, @qwikpen/{ui|hooks|utils}
```

