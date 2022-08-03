import {defineConfig} from 'rollup'

export default defineConfig({
  input: ['Seat/index.ts','SeatReact/index.tsx'],
  output: {
    format:'umd',
    dir: 'dist',
    file: 'index.js'
  }
})