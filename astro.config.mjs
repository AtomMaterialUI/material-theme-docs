// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://material-theme.com',
	trailingSlash: 'always',
	build: { format: 'directory' },
	integrations: [
		starlight({
			title: 'Material Theme UI',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mallowigi/material-theme-docs' }],
			sidebar: [],
		}),
	],
});
