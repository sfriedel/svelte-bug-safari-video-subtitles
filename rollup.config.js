import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'

const dev = true;
const sourcemap = 'inline';

export default [
    {
        input: 'src/client.js',
        output: {
            file: 'dist/client/client.js',
            format: 'esm',
            sourcemap
        },
        plugins: [
            svelte({
                dev,
                hydratable: true,
                css: css => css.write('client.css')
            }),
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),
        ],
        preserveEntrySignatures: false
    },
    {
        input: 'src/server.js',
        output: {
            file: 'dist/server.js',
            format: 'cjs',
            sourcemap
        },
        plugins: [
            copy({
                targets: [
                    { src: 'src/template.html', dest: 'dist/' },
                ]
            }),
            svelte({
                generate: 'ssr',
                hydratable: true,
                dev
            }),
            resolve({
                dedupe: ['svelte']
            }),
            commonjs()
        ],
        external: Object.keys(pkg.dependencies).concat(
            require('module').builtinModules
        ),
        preserveEntrySignatures: 'strict'
    }
]
