
import typescript from "@rollup/plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";


export default {
  input: "./src/relativeTimeConvert.ts",
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    typescript(),
    sourceMaps(),
    terser(),
    cleanup(),
  ],
  output: [
    {
      format: "cjs",
      file: 'dist/relativeTimeConvert.cjs.js',
      sourcemap: true,
    },
    {
      name: "relativeTimeConvert",
      format: "es",
      file: 'dist/relativeTimeConvert.esm.js',
      sourcemap: true,
    },
  ],
};