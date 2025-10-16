import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/authContext';
import authApi from '../api/authApi';
import { jwtDecode } from 'jwt-decode';

type TokenClaims = {
	userName: string;
	userId: string;
	email: string;
	exp: number;
	iat: number;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<TokenClaims | null>(null);

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (!token) {
			setUser(null);
			return;
		}
		const payload = jwtDecode<TokenClaims>(token as string);
		setUser(payload);
	}, []);

	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
	};

	const login = async ({
		userNameOrEmail,
		password,
	}: {
		userNameOrEmail: string;
		password: string;
	}) => {
		const response = await authApi.login({ userNameOrEmail, password });
		if (response.token) {
			localStorage.setItem('token', response.token);
			const userData = await authApi.profile();
			setUser(userData);
		}
		return response.message;
	};

	return <AuthContext.Provider value={{ user, logout, login }}>{children}</AuthContext.Provider>;
};
