import { createTheme } from '@mui/material/styles';
import tw from 'twin.macro';

export const theme = createTheme({
	cssVariables: {
		colorSchemeSelector: 'class',
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
	colorSchemes: {
		light: {
			palette: {
				mode: 'light',
				primary: {
					main: '#091156',
					contrastText: '#ffffff',
				},
				secondary: {
					main: '#ff64ae',
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
					main: '#B39CD0',
					contrastText: '#ffffff',
				},
				secondary: {
					main: '#FFC1CC',
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
