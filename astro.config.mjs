// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wingman-docs-3ty.pages.dev',
	integrations: [
		starlight({
			title: 'Wingman Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/wingman-labs/-wingman-docs' }],
			sidebar: [
				{
					label: 'Inicio',
					items: [{ label: 'Wingman Docs', slug: 'index' }],
				},
				{
					label: 'Seguridad',
					items: [
						{ label: 'Política de publicación segura', slug: 'publishing-policy' },
						{ label: 'Checklist anti-doxx', slug: 'safety-checklist' },
					],
				},
			],
		}),
	],
});
