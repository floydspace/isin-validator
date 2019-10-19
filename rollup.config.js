import { eslint } from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'isin-validator',
      globals: {
        'i18n-iso-countries': 'countries',
      },
    },
    external: ['i18n-iso-countries'],
    plugins: [
      babel(),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
    external: ['i18n-iso-countries'],
    plugins: [
      eslint(),
    ],
  },
];
