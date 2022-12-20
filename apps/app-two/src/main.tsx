import React from 'react';
import { createRoot } from 'react-dom/client';
import { addNumbers } from '@fs-test/add';
import { subtractNumbers } from '@fs-test/subtract';

let root: ReturnType<typeof createRoot>;

export function bootstrap() {
  console.log('bootstrap app two');
  return Promise.resolve();
}

export function mount() {
  console.log('mount app two');

  root = createRoot(document.querySelector('#root')!);

  root.render(
    <div>
      <h1>app two</h1>
      <p>add 1 and 2: {addNumbers(1, 2)}</p>
      <p>subtract 1 and 2: {subtractNumbers(1, 2)}</p>
    </div>,
  );

  return Promise.resolve();
}

export function unmount() {
  console.log('unmount app two');

  root.unmount();

  return Promise.resolve();
}
