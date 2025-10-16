import { createContext } from 'react';

export const AuthContext = createContext({
	user: null as null | {
		userName: string;
		userId: string;
		email: string;
		exp: number;
		iat: number;
	},
	logout: () => {},
	login: async function ({
		userNameOrEmail,
		password,
	}: {
		userNameOrEmail: string;
		password: string;
	}) {
		void userNameOrEmail;
		void password;
		return { message: '' };
	},
});
