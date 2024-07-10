import typescript from '@rollup/plugin-typescript';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';

const nodeTarget = {
  node: 14,
};

const browserTarget = {
  chrome: '45',
};

/**
 * babel config
 */
function getBabelConfig(target) {
  return getBabelOutputPlugin({
    presets: [
      [
        '@babel/preset-env',
        {
          targets: target,
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
  });
}

/**
 * dts plugin
 */
function getDtsPluginCfg() {
  return [
    alias({
      entries: [{ find: '@lib', replacement: '../lib' }],
    }),
    dts(),
  ];
}

/**
 * rollup config
 */
export default [
  // ESM
  {
    input: 'src/index.es.ts',
    output: {
      file: 'dist/index.es.js',
      format: 'es',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      getBabelConfig(browserTarget),
      terser(),
    ],
  },
  // Commonjs
  {
    input: 'src/index.cjs.ts',
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      getBabelConfig(nodeTarget),
      terser(),
    ],
  },
  // 生成 ESM d.ts 声明文件
  {
    input: 'src/index.es.ts',
    output: {
      format: 'esm',
      file: 'types/index.es.d.ts',
    },
    plugins: getDtsPluginCfg(),
  },
  // 生成 CJS d.ts 声明文件
  {
    input: 'src/index.cjs.ts',
    output: {
      format: 'cjs',
      file: 'types/index.cjs.d.ts',
    },
    plugins: getDtsPluginCfg(),
  },
];
