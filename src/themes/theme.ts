import { extendTheme } from '@mui/material/styles';
import tw from 'twin.macro';

const COLORS = [
	{
		name: 'Brand',
		light: { primary: '#091156', secondary: '#ff64ae' },
		dark: { primary: '#B39CD0', secondary: '#ff64ae' },
	},
	{
		name: 'Serenity',
		light: { primary: '#507DBC', secondary: '#FF8C94' },
		dark: { primary: '#A3C4F3', secondary: '#FFB3B8' },
	},
	{
		name: 'Earthy',
		light: { primary: '#2F855A', secondary: '#DD6B20' },
		dark: { primary: '#68D391', secondary: '#F6AD55' },
	},
	{
		name: 'LavenderMint',
		light: { primary: '#7C3AED', secondary: '#3EE0C9' },
		dark: { primary: '#C4B5FD', secondary: '#9AE6B4' },
	},
	{
		name: 'NavyRose',
		light: { primary: '#0F274C', secondary: '#EBA0AC' },
		dark: { primary: '#8C9EFF', secondary: '#FFCAD4' },
	},
];

export const appColorTheme = ({ colorScheme }: { colorScheme: number }) => {
	const color = COLORS[colorScheme];

	return extendTheme({
		colorSchemeSelector: 'class',
		colorSchemes: {
			light: {
				palette: {
					mode: 'light',
					primary: {
						main: color.light.primary,
						contrastText: '#ffffff',
					},
					secondary: {
						main: color.light.secondary,
						contrastText: '#ffffff',
					},
					background: {
						default: '#ffffff',
					},
					text: {
						primary: '#8b8b8b',
						secondary: '#d7dbff',
					},
				},
			},
			dark: {
				palette: {
					mode: 'dark',
					primary: {
						main: color.dark.primary,
						contrastText: '#ffffff',
					},
					secondary: {
						main: color.dark.secondary,
						contrastText: '#ffffff',
					},
					background: {
						default: '#2C2C2C',
						paper: '#1e1e1e',
					},
					text: {
						primary: '#E4E4E4',
						secondary: '#ffffff',
					},
				},
			},
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 640,
				md: 768,
				lg: 1024,
				xl: 1280,
			},
		},
		typography: {
			fontFamily: 'Poppins, sans-serif',
			h1: {
				fontSize: '3rem',
				fontWeight: 600,
				lineHeight: '3.75rem',
				letterSpacing: '0em',
			},
			h2: {
				fontSize: '2.25rem',
				fontWeight: 600,
				lineHeight: '2.8125rem',
				letterSpacing: '0rem',
			},
			//Card title
			h6: {
				fontSize: '1.125rem',
				fontWeight: 600,
				lineHeight: '1.40625rem',
				letterSpacing: '0.005rem',
			},
			subtitle1: {
				fontSize: '1rem',
				fontWeight: 600,
				lineHeight: '1.25rem',
				letterSpacing: '0.01rem',
			},
			subtitle2: {
				fontSize: '1rem',
				fontWeight: 400,
				letterSpacing: '0.1rem',
				textDecoration: 'none',
			},
			// Card body text
			body1: {
				fontSize: '0.875rem',
				fontWeight: 400,
				letterSpacing: '0.0875rem',
			},
		},
		components: {
			MuiContainer: {
				styleOverrides: {
					root: tw`max-w-[1440px]! px-5 md:px-10 lg:px-24 xl:px-[150px]`,
				},
				defaultProps: {
					disableGutters: true,
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						textTransform: 'none',
						textDecoration: 'none',
						borderRadius: '9999px',
						border: 'none',
						lineHeight: 'normal',
						letterSpacing: '0.1em',
						color: '#ffffff',
						fontSize: '1rem',
						fontWeight: 600,
						fontFamily: 'Poppins, sans-serif',
					},
				},
			},
			MuiTypography: {
				styleOverrides: {
					root: tw`font-poppins`,
				},
			},
			MuiInputBase: {
				styleOverrides: {
					root: {
						fontFamily: 'Poppins, sans-serif',
						borderRadius: '0.9375rem',
						backgroundColor: 'white',
						border: '1px solid #D9DDFE',
						width: '100%',
						padding: '0.95rem 1.45rem',
					},
					input: {
						'&::placeholder': tw`text-base`,
					},
				},
			},
		},
	});
};
