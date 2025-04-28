import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/CartFlow.js'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    minify: true,
    sourcemap: true,
    clean: true,
    target: 'es2018',
    dts: false,
});
