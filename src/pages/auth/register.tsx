import React, { useEffect, useState } from 'react';
import {
	Paper,
	Box,
	Typography,
	Link,
	Snackbar,
	Alert,
	type AlertColor,
	Button,
	Divider,
	Stack,
} from '@mui/material';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import authApi from '../../api/authApi';
import { InputBaseCustom } from '../../components/ContactForm';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';

const Root = styled('div')`
	${tw`min-h-fit flex items-center justify-center `}
`;

const Card = styled(Paper)`
	${tw`p-12 max-w-4xl w-11/12 my-36 py-8`}
`;

const Title = styled(Typography)`
	${tw`text-center mb-8 font-semibold`}
`;

const Label = styled(Typography)`
	${tw`mb-2 text-sm`}
`;

const FormField = styled(InputBaseCustom)`
	${tw`mb-5`}
`;

const Actions = styled(Box)`
	${tw`flex flex-col w-full gap-5 mt-2`}
`;

const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [state, setState] = useState({
		open: false,
		message: '',
		severity: '' as AlertColor,
	});
	const navigate = useNavigate();

	const isLoggedIn = localStorage.getItem('token');

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/');
		}
	}, [isLoggedIn, navigate]);

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();

		if (
			!firstName.trim() ||
			!lastName.trim() ||
			!userName.trim() ||
			!email.trim() ||
			!password.trim()
		) {
			setState({
				open: true,
				message: 'Please fill in all required fields.',
				severity: 'error',
			});
			return;
		}

		if (userName.length < 3) {
			setState({
				open: true,
				message: 'Username must be at least 3 characters.',
				severity: 'error',
			});
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setState({
				open: true,
				message: 'Invalid email format.',
				severity: 'error',
			});
			return;
		}

		if (password.length < 6) {
			setState({
				open: true,
				message: 'Password must be at least 6 characters.',
				severity: 'error',
			});
			return;
		}

		try {
			const response = await authApi.register({ firstName, lastName, userName, email, password });
			if (response) {
				console.log(response);
				setState({
					open: true,
					message: `${response.message}`,
					severity: 'success',
				});
			}
			navigate('/login');
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				setState({
					open: true,
					message: `${error?.response?.data?.message || 'Login failed. Please try again.'}`,
					severity: 'error',
				});
				setIsLoading(false);
			}
		}
	};

	return (
		<Root>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={state.open}
				autoHideDuration={6000}
				key={'snackbar' + 'top' + 'center'}
			>
				<Alert onClose={handleClose} severity={state.severity} sx={{ width: '100%' }}>
					{state.message}
				</Alert>
			</Snackbar>

			<Card elevation={3}>
				<Title variant="h4" color="primary">
					Sign up
				</Title>

				<Box
					sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr auto 1fr' }, gap: 4 }}
				>
					<Box>
						<form onSubmit={handleRegister}>
							<Box sx={{ display: 'flex', gap: 2, mb: 0 }}>
								<Box sx={{ flex: 1 }}>
									<Label variant="body2" color="text.primary">
										First name
									</Label>
									<FormField
										fullWidth
										onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
											setFirstName(e.target.value)
										}
										value={firstName}
									/>
								</Box>
								<Box sx={{ flex: 1 }}>
									<Label variant="body2" color="text.primary">
										Last name
									</Label>
									<FormField
										fullWidth
										onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
											setLastName(e.target.value)
										}
										value={lastName}
									/>
								</Box>
							</Box>

							<Box>
								<Label variant="body2" color="text.primary">
									Username
								</Label>
								<FormField
									fullWidth
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
									required
									value={userName}
								/>
							</Box>

							<Box>
								<Label variant="body2" color="text.primary">
									Email
								</Label>
								<FormField
									fullWidth
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
									type="email"
									required
									value={email}
								/>
							</Box>

							<Box>
								<Label variant="body2" color="text.primary">
									Password
								</Label>
								<FormField
									fullWidth
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
									type="password"
									value={password}
									required
								/>
							</Box>

							<Actions>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="secondary"
									size="large"
									sx={{ borderRadius: '50px', textTransform: 'none', py: 1.5 }}
									disabled={isLoading}
								>
									Sign up
								</Button>

								<Typography variant="body2" color="secondary" align="center">
									Already have an account?{' '}
									<Link
										component={RouterLink}
										to="/login"
										color="text.primary"
										underline="hover"
										fontWeight="600"
									>
										Log in
									</Link>
								</Typography>
							</Actions>
						</form>
					</Box>

					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
						<Divider orientation="vertical">Or</Divider>
					</Box>

					<Box className=" md:w-full mx-auto my-auto">
						<Stack spacing={1.5}>
							<Button
								variant="contained"
								fullWidth
								size="large"
								startIcon={<FacebookRoundedIcon />}
								sx={{
									backgroundColor: '#3b5998',
								}}
							>
								Log in with Facebook
							</Button>
							<Button
								variant="contained"
								size="large"
								startIcon={<TwitterIcon />}
								sx={{
									backgroundColor: '#1DA1F2',
								}}
							>
								Log in with Twitter
							</Button>
							<Button
								variant="contained"
								size="large"
								startIcon={<GoogleIcon />}
								sx={{
									backgroundColor: '#DB4437',
								}}
							>
								Log in with Google
							</Button>
						</Stack>
					</Box>
				</Box>
			</Card>
		</Root>
	);
};

export default Register;
