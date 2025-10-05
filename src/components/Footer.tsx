import { Box, Container, Grid, Icon, Link, Typography } from '@mui/material';
import BannerBox from './Banner';

const Footer = () => {
	return (
		<footer className="relative overflow-hidden">
			<Box
				sx={{
					position: 'absolute',
					top: { xl: '15%', md: '60%', lg: '40%', xs: 0 },
					left: 0,
					width: '100%',
					height: '100%',
					zIndex: -2,
					background: 'rgba(13, 22, 92, 1)',
				}}
			></Box>
			{/* Footer Content */}
			<Container className=" relative ">
				<BannerBox
					url=""
					sx={{
						'&::before': {
							position: 'absolute',
							overflow: 'hidden',
							transform: 'rotate(4.992deg)',
							borderRadius: 50,
							backgroundColor: 'rgba(23, 33, 118, 1)',
							backgroundPosition: 'center',
							width: '1470.4462165056077px',
							height: '647.14px',
							content: '""',
							left: '-1%',
							top: '-10%',
							zIndex: -2,
							display: { xs: 'none', md: 'block', xl: 'none' },
						},
						'&::after': {
							display: { xs: 'none' },
						},
					}}
				></BannerBox>
				<div className=" mt-28 w-full pt-8 lg:pt-16 xl:pt-10 ">
					<Box sx={{ mx: 'auto', width: '100%' }}>
						<Grid container spacing={{ xs: 2, sm: 8, md: 10 }} sx={{ pt: 1 }}>
							{/* Logo + giới thiệu */}
							<Grid size={{ xs: 12, md: 4, lg: 6 }}>
								<Box sx={{ mb: { xs: 0, md: 4 } }}>
									<Link href="/" sx={{ display: 'flex', alignItems: 'center', mt: { lg: 2 } }}>
										<Box component="img" src="Main Logo.png" alt="Logo" />
									</Link>
									<Typography
										sx={{
											color: 'white',
											mt: { xs: 2, lg: 4.5 },
											pl: { lg: 4 },
											letterSpacing: '0.187em',
											fontFamily: 'Poppins, sans-serif',
											fontSize: { xs: '11px', lg: '14px' },
										}}
									>
										<strong>Beautice</strong> is a Beauty Clinic WordPress Theme
									</Typography>
									<Typography
										sx={{
											fontFamily: 'Poppins, sans-serif',
											color: 'white',
											mt: { xs: 1, lg: 2.8 },
											pl: { lg: 4 },
											letterSpacing: '0.07em',
											fontStyle: 'italic',
											fontSize: 15,
										}}
									>
										Baker Steet 101, NY, United States
									</Typography>
									<Typography
										sx={{
											color: 'white',
											pl: { lg: 4 },
											letterSpacing: '0.1em',
											fontSize: 14,
											mt: { xs: 0.2, lg: 0.7 },
											fontStyle: 'italic',
										}}
									>
										<span>+521 569 8966</span>
										<Link
											href="mailto:mail@company.com"
											underline="always"
											sx={{
												ml: 6,
												color: 'white',
												letterSpacing: '0.1em',
											}}
										>
											mail@company.com
										</Link>
									</Typography>
								</Box>
							</Grid>
							{/* Pages */}
							<Grid
								size={{
									xs: 6,
									md: 4,
									lg: 3,
								}}
								sx={{
									pl: { lg: 1.5 },
								}}
							>
								<Typography
									variant="h6"
									sx={{
										mb: 3,
										fontWeight: '600',
										letterSpacing: '0.07em',
										color: 'white',
										fontSize: { xs: '16px', lg: '18px' },
										fontFamily: 'Poppins, sans-serif',
									}}
								>
									Pages
								</Typography>
								<Box component="ul" sx={{ listStyle: 'none', pl: 0.3, mt: 3.5, color: 'white' }}>
									{['Home', 'About', 'Services', 'Gallery', 'Team'].map((item) => (
										<Box
											component="li"
											key={item}
											sx={{
												fontFamily: 'Poppins, sans-serif',
												fontSize: { xs: '11px', lg: '15px' },
												mb: { xs: 1, lg: 1.65 },
												ml: { xs: 0.1 },
												letterSpacing: '0.15em',
												display: 'flex',
												alignItems: 'center',
												gap: 1.5,
												'&::before': {
													content: '""',
													display: 'inline-block',
													width: 0,
													height: 0,
													borderTop: '4px solid transparent',
													borderBottom: '4px solid transparent',
													borderLeft: '6px solid var(--color-text-inverse)',
												},
											}}
										>
											<Link
												href={`/${item.toLowerCase()}`}
												underline="hover"
												sx={{ color: 'white' }}
											>
												{item}
											</Link>
										</Box>
									))}
								</Box>
							</Grid>

							{/* Informations */}
							<Grid
								size={{
									xs: 6,
									md: 4,
									lg: 3,
								}}
								sx={{ pl: { lg: 1.5 } }}
							>
								<Typography
									variant="h6"
									sx={{
										mb: 3,
										fontWeight: 'bold',
										letterSpacing: '0.07em',
										color: 'white',
										fontSize: { xs: '16px', lg: '18px' },
										fontFamily: 'Poppins, sans-serif',
									}}
								>
									Informations
								</Typography>
								<Box component="ul" sx={{ listStyle: 'none', pl: 1, mt: 3.5, color: 'white' }}>
									{['Terms & conditions', 'Privacy policy', 'Blog', 'Contact'].map((item) => (
										<Box
											component="li"
											key={item}
											sx={{
												fontFamily: 'Poppins, sans-serif',
												fontSize: { xs: '11px', lg: '15px' },
												mb: { xs: 1, lg: 1.6 },
												ml: { xs: -0.9 },
												letterSpacing: '0.15em',
												display: 'flex',
												alignItems: 'center',
												gap: 1.5,
												'&::before': {
													content: '""',
													display: 'inline-block',
													width: 0,
													height: 0,
													borderTop: '4px solid transparent',
													borderBottom: '4px solid transparent',
													borderLeft: '6px solid var(--color-text-inverse)',
												},
											}}
										>
											<Link
												href={`/${item.toLowerCase()}`}
												underline="hover"
												sx={{ color: 'white' }}
											>
												{item}
											</Link>
										</Box>
									))}
								</Box>
							</Grid>
						</Grid>

						{/* Menu Pages + Informations */}
					</Box>

					{/* Social + Copyright */}
					<Box
						sx={{
							pt: { xs: 4, lg: 15.3 },
							pb: { xs: 4, lg: 13 },

							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'space-between',
							gap: 2,
						}}
					>
						<Box sx={{ display: 'flex', gap: 5.7 }}>
							<Icon>
								<img src="/Footer/facebook-f.svg" alt="Facebook" className="lg:w-7 lg:h-7" />
							</Icon>
							<Icon>
								<img src="/Footer/twitter.svg" alt="Twitter" className="lg:w-7 lg:h-7" />
							</Icon>
							<Icon>
								<img src="/Footer/linkedin-in.svg" alt="LinkedIn" className="lg:w-7 lg:h-7" />
							</Icon>
							<Icon>
								<img src="/Footer/youtube.svg" alt="YouTube" className="lg:w-7 lg:h-7" />
							</Icon>
							<Icon>
								<img src="/Footer/instagram.svg" alt="Instagram" className="lg:w-7 lg:h-7" />
							</Icon>
						</Box>
						<Box
							sx={{
								fontFamily: 'Poppins, sans-serif',
								fontSize: { xs: '11px', lg: '15px' },
								mb: { xs: 1, lg: 1.65 },
								ml: { xs: 0 },
								letterSpacing: '0.135em',
								color: 'white',
							}}
						>
							© AltDesain Studio 2021 - All right reserved.
						</Box>
					</Box>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;

