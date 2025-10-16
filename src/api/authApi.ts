import axiosInstance from './axiosConfig';

export type RegisterData = {
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
};

export type LoginData = {
	userNameOrEmail: string;
	password: string;
};

const authApi = {
	register: async (userData: RegisterData) => {
		const response = await axiosInstance.post('/auth/register', userData);
		return response.data;
	},

	login: async (userData: LoginData) => {
		const response = await axiosInstance.post('/auth/login', userData);
		return response.data;
	},

	profile: async () => {
		const response = await axiosInstance.get('/auth/profile');
		return response.data;
	},
};

export default authApi;
