// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx,md}'],
	theme: {
		extend: {
			colors: {
				'barbie-pink': '#EE3BEE',
				'pastel-pink': '#FDD3F4',
				'bubblegum-pink': '#FF69B4',
				'yellow-pastel': '#FFFACD',
				'sky-blue': '#ADD8E6',
				'lilac-soft': '#E6E6FA',
				'creamy-white': '#FFFDD0',
				'golden-glitter': '#FFD700',
			},

			// Extensión de Fuentes: Define solo Roboto
			fontFamily: {
				// Definimos una fuente "roboto"
				roboto: ['Roboto', 'sans-serif'],
				// También puedes sobrescribir la fuente sans-serif por defecto de Tailwind si quieres
				// sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},

			container: {
				center: true,
				padding: {
					DEFAULT: '1.5rem',
				},
			},

			// Adaptación del Plugin Typography para los colores de Barbie y la fuente Roboto
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.700'),

						'--tw-prose-body': theme('colors.gray.700'),
						'--tw-prose-headings': theme('colors.barbie-pink'),
						'--tw-prose-lead': theme('colors.bubblegum-pink'),
						'--tw-prose-links': theme('colors.bubblegum-pink'),
						'--tw-prose-bold': theme('colors.barbie-pink'),
						'--tw-prose-counters': theme('colors.bubblegum-pink'),
						'--tw-prose-bullets': theme('colors.bubblegum-pink'),
						'--tw-prose-hr': theme('colors.pink-pastel'),
						'--tw-prose-quotes': theme('colors.barbie-pink'),
						'--tw-prose-quote-borders': theme('colors.golden-glitter'),
						'--tw-prose-captions': theme('colors.gray.500'),
						'--tw-prose-code': theme('colors.barbie-pink'),
						'--tw-prose-pre-code': theme('colors.creamy-white'),
						'--tw-prose-pre-bg': theme('colors.bubblegum-pink'),
						'--tw-prose-th-borders': theme('colors.pink-pastel'),
						'--tw-prose-td-borders': theme('colors.lilac-soft'),

						// Aplicar Roboto a todos los elementos relevantes
						h1: {
							fontSize: theme('fontSize.5xl')[0],
							'@screen lg': {
								fontSize: theme('fontSize.6xl')[0],
							},
							color: theme('colors.barbie-pink'),
							fontFamily: theme('fontFamily.roboto'), // Aplica Roboto
						},
						h2: {
							fontSize: theme('fontSize.4xl')[0],
							'@screen lg': {
								fontSize: theme('fontSize.5xl')[0],
							},
							color: theme('colors.barbie-pink'),
							fontFamily: theme('fontFamily.roboto'), // Aplica Roboto
						},
						h3: {
							fontSize: theme('fontSize.3xl')[0],
							'@screen lg': {
								fontSize: theme('fontSize.4xl')[0],
							},
							color: theme('colors.bubblegum-pink'),
							fontFamily: theme('fontFamily.roboto'), // Aplica Roboto
						},
						h4: {
							fontSize: theme('fontSize.2xl')[0],
							'@screen lg': {
								fontSize: theme('fontSize.3xl')[0],
							},
							color: theme('colors.bubblegum-pink'),
							fontFamily: theme('fontFamily.roboto'), // Aplica Roboto
						},
						h5: {
							fontSize: theme('fontSize.xl')[0],
							'@screen lg': {
								fontSize: theme('fontSize.2xl')[0],
							},
							color: theme('colors.golden-glitter'),
							fontFamily: theme('fontFamily.roboto'), // Aplica Roboto
						},
						h6: {
							fontSize: theme('fontSize.lg')[0],
							'@screen lg': {
								fontSize: theme('fontSize.xl')[0],
							},
							color: theme('colors.golden-glitter'),
							fontFamily: theme('fontFamily.roboto'), // Aplica Roboto
						},
						p: {
							fontSize: theme('fontSize.lg')[0],
							lineHeight: theme('lineHeight.loose'),
							color: theme('colors.gray.700'),
							fontFamily: theme('fontFamily.roboto'), // Aplica Roboto
						},
						li: {
							fontSize: theme('fontSize.lg')[0],
							lineHeight: theme('lineHeight.loose'),
							color: theme('colors.gray.700'),
							fontFamily: theme('fontFamily.roboto'), // Aplica Roboto
						},
						hr: {
							borderColor: theme('colors.pink-pastel'),
						},
						a: {
							color: theme('colors.bubblegum-pink'),
							'&:hover': {
								textDecoration: 'underline',
								color: theme('colors.barbie-pink'),
							},
						},
						strong: {
							fontWeight: '700',
							color: theme('colors.barbie-pink'),
						},
						img: {
							width: '100%',
						},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
