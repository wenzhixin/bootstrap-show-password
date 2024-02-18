import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import inject from '@rollup/plugin-inject'

const external = ['jquery']
const globals = {
  jquery: 'jQuery'
}
const config = []
const plugins = [
  inject({
    include: '**/*.js',
    exclude: 'node_modules/**',
    $: 'jquery'
  }),
  nodeResolve(),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**'
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(terser({
    output: {
      comments () {
        return false
      }
    }
  }))
}

let out = 'dist/bootstrap-show-password.js'
if (process.env.NODE_ENV === 'production') {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/bootstrap-show-password.js',
  output: {
    name: 'BootstrapShowPassword',
    file: out,
    format: 'umd',
    globals
  },
  external,
  plugins
})

out = 'dist/bootstrap-show-password.esm.js'
if (process.env.NODE_ENV === 'production') {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/bootstrap-show-password.js',
  output: {
    file: out,
    format: 'esm'
  },
  plugins: plugins.slice(1)
})

export default config
