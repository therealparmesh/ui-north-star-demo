#!/usr/bin/env node

import { build } from 'esbuild';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

await build({
  entryPoints: ['src/main.ts'],
  outdir: 'dist',
  bundle: true,
  format: 'esm',
  platform: 'node',
  absWorkingDir: dirname(fileURLToPath(import.meta.url)),
});

const { main } = await import('./dist/main.js');

main();
