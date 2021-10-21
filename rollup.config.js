import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/crayons-extensions.min.js',
    },
    {
      file: 'dist/crayons-extensions.js',
      format: 'cjs',
    },
    {
      name: 'crayons-extensions',
      file: 'dist/crayons-extensions.umd.min.js',
      format: 'umd',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    terser(),
  ],
}
