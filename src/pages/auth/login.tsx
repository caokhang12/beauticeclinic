import React, { useContext, useEffect, useState } from 'react';
import {
	Container,
	Paper,
	Box,
	Typography,
	Button,
	Link,
	Snackbar,
	Alert,
	type AlertColor,
	Checkbox,
	FormControlLabel,
	InputAdornment,
	IconButton,
	Divider,
} from '@mui/material';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InputBaseCustom } from '../../components/ContactForm';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { AuthContext } from '../../contexts/authContext';

const Section = styled(Box)(() => [tw`min-h-screen flex items-center justify-center `]);

const LoginContainer = styled(Container)(() => [tw`flex justify-center`]);

const Card = styled(Paper)`
	${tw`p-12 max-w-xl w-full my-36 py-8`}
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

const SocialBtns = styled(Box)`
	${tw`flex gap-4 justify-center items-center mt-4`}
`;

const SocialButton = styled(IconButton)`
	${tw`p-2`}
`;

const StyledDivider = styled(Divider)`
	${tw`my-6`}
`;

const Login = () => {
	const [userNameOrEmail, setEmailOrUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [state, setState] = useState({
		open: false,
		message: '',
		severity: '' as AlertColor,
	});
	const { login } = useContext(AuthContext);

	const navigate = useNavigate();
	const handleClose = () => {
		setState({ ...state, open: false });
	};
	const isLoggedIn = localStorage.getItem('token');

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/');
		}
	}, [isLoggedIn, navigate]);

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!userNameOrEmail.trim() || !password.trim()) {
			setState({ open: true, message: 'Please fill in all fields.', severity: 'error' });
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
			setIsLoading(true);
			const response = await login({
				userNameOrEmail,
				password,
			});
			if (response) {
				setIsLoading(false);
				setState({ open: true, message: `${response}`, severity: 'success' });
			}
			setTimeout(() => {
				navigate('/');
			}, 2000);
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
		<Section>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={state.open}
				autoHideDuration={3000}
				key={'snackbar' + 'top' + 'center'}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity={state.severity} sx={{ width: '100%' }}>
					{state.message}
				</Alert>
			</Snackbar>
			<LoginContainer>
				<Card elevation={3}>
					<Title variant="h4" color="primary">
						Log in
					</Title>

					<form onSubmit={handleLogin}>
						<Box>
							<Label variant="body2" color="text.primary">
								Email address or user name
							</Label>
							<FormField
								fullWidth
								type="text"
								value={userNameOrEmail}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setEmailOrUsername(e.target.value)
								}
							/>
						</Box>

						<Box>
							<Label variant="body2" color="text.primary">
								Password
							</Label>
							<FormField
								fullWidth
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											onClick={() => setShowPassword(!showPassword)}
											edge="end"
											size="small"
										>
											{showPassword ? (
												<VisibilityOutlinedIcon fontSize="small" />
											) : (
												<VisibilityOffOutlinedIcon fontSize="small" />
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
						</Box>

						<FormControlLabel
							control={
								<Checkbox
									checked={rememberMe}
									onChange={(e) => setRememberMe(e.target.checked)}
									size="small"
								/>
							}
							label={<Typography variant="body2">Remember me</Typography>}
						/>

						<Actions>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								size="large"
								sx={{ py: 1.5 }}
								disabled={isLoading}
							>
								{isLoading ? 'Logging in...' : 'Log in'}
							</Button>

							<Typography variant="body2" color="text.primary" align="center">
								Don't have an acount?{' '}
								<Link
									component={RouterLink}
									to="/register"
									color="secondary"
									underline="hover"
									fontWeight="600"
								>
									Sign up
								</Link>
							</Typography>
						</Actions>

						<StyledDivider>
							<Typography variant="body2" color="text.primary">
								Or continue with
							</Typography>
						</StyledDivider>

						<SocialBtns>
							<SocialButton aria-label="facebook">
								<FacebookRoundedIcon sx={{ color: '#1877F2' }} />
							</SocialButton>

							<SocialButton aria-label="google">
								<GoogleIcon sx={{ color: '#DB4437' }} />
							</SocialButton>
							<SocialButton aria-label="twitter">
								<TwitterIcon sx={{ color: '#1DA1F2' }} />
							</SocialButton>
						</SocialBtns>
					</form>
				</Card>
			</LoginContainer>
		</Section>
	);
};

export default Login;
