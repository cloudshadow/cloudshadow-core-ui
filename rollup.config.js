import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import linaria from '@linaria/rollup';
import css from 'rollup-plugin-css-only';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      // name: 'react-lib',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    commonjs(),
    linaria({
      // exclude: ['node_modules/**'],
      // evaluate: true,
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
    css({
      output: 'styles.css',
    }),
    resolve(),
    typescript({ tsconfig: './tsconfig.json' }),
    // postcss(),
    // terser(),
  ],
};
