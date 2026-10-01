import type { NextConfig } from 'next';
import { fileURLToPath } from 'node:url';

const config: NextConfig = {
  transpilePackages: ['@loruni/ui'],
  turbopack: { root: fileURLToPath(new URL('../..', import.meta.url)) },
  poweredByHeader: false,
};
export default config;
