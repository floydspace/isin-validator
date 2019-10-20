import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: pkg.main,
      format: 'umd',
      name: 'isinValidator',
      globals: {
        'i18n-iso-countries': 'countries',
      },
    },
    external: Object.keys(pkg.dependencies),
    plugins: [
      eslint(),
      babel({ extensions: ['.ts'] }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    external: Object.keys(pkg.dependencies),
    plugins: [
      eslint(),
      typescript(),
    ],
  },
];
