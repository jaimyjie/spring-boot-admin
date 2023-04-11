import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
let config = defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react()
  ],
  site: `http://localhost:3000/3.0.3-SNAPSHOT/`,
  base: `/3.0.3-SNAPSHOT/`,
  markdown: {
    syntaxHighlight: 'prism'
  },
  outDir: '../../target/generated-docs'
});

if (process.env.CI) {
  config = {
    ...config,
    site: `https://docs.spring-boot-admin.com/${process.env.VERSION}/`,
    base: `/${process.env.VERSION}/`
  };
}
export default defineConfig(config);