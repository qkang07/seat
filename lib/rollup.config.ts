import {defineConfig} from 'rollup'
import resolve from '@rollup/plugin-node-resolve';

export default defineConfig({
  input: ['Seat/index.ts'],
  plugins: [
    resolve()
  ],
  output: {
    format:'umd',
    dir: 'dist',
    file: 'index.js'
  }
})