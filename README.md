# @fs-test/ui-north-star-demo

## Quick start

First, install package manager and private registry:

`npm install --global pnpm verdaccio`

Then, run private registry:

`verdaccio`

From this folder, copy valid private registry state over to your private registry:

`cp -R .local/share/verdaccio/storage/ ~/.local/share/verdaccio/storage/`

Then, install packages:

`pnpm install`

Observe package build process:

`pnpm run build`

Observe package typecheck process:

`pnpm run typecheck`

Observe internal CLI running:

`npx subtract-demo`

Then, start up microfrontends:

`pnpm --filter "@fs-test/app-*" start`

Finally, visit `http://localhost:9999` to see SPA in action.

## TODO

- Tests
- Linting
