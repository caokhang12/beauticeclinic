import { createContext } from 'react';

export const ThemeContext = createContext({
	setColorScheme: (index: number) => {},
});
