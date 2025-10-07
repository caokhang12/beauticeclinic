import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	base: '/beauticeclinic',
	plugins: [
		react({
			jsxImportSource: '@emotion/react',
			babel: {
				plugins: ['babel-plugin-macros', '@emotion/babel-plugin'],
			},
		}),
	],
	optimizeDeps: {
		include: ['@emotion/react', '@emotion/styled', '@mui/material'],
	},
});
