import React from 'react';
import { createRoot } from 'react-dom/client';
import { addNumbers } from '@fs-test/add';
import { subtractNumbers } from '@fs-test/subtract';

let root: ReturnType<typeof createRoot>;

export function bootstrap() {
  console.log('bootstrap app one');

  return Promise.resolve();
}

export function mount() {
  console.log('mount app one');

  root = createRoot(document.querySelector('#root')!);

  root.render(
    <div>
      <h1>app one</h1>
      <p>add 1 and 1: {addNumbers(1, 1)}</p>
      <p>subtract 1 and 1: {subtractNumbers(1, 1)}</p>
    </div>,
  );

  return Promise.resolve();
}

export function unmount() {
  console.log('unmount app one');

  root.unmount();

  return Promise.resolve();
}
