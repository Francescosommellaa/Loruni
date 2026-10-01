import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  { settings: { next: { rootDir: ['apps/landing/', 'apps/playground/'] } } },
  globalIgnores(['**/.next/**', '**/out/**', '**/dist/**', '**/next-env.d.ts']),
]);
