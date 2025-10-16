import { useMemo, useState } from 'react';
import { appColorTheme } from '../themes/theme';
import { CssBaseline } from '@mui/material';
import { ThemeContext } from '../contexts/themeContext';
import { ThemeProvider } from '@mui/material/styles';

export const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
	const [colorScheme, setColorScheme] = useState(() => {
		const saved = localStorage.getItem('theme-color-index');
		return saved ? parseInt(saved) : 0;
	});

	const theme = useMemo(() => appColorTheme({ colorScheme }), [colorScheme]);
	return (
		<ThemeContext.Provider value={{ setColorScheme }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
