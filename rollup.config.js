import { terser } from 'rollup-plugin-terser'

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
    terser(),
  ],
}
