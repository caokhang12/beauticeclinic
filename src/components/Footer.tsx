import { Box, Container, Grid, Icon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import BannerBox from './Banner';

// Styled components using twin.macro
const FooterRoot = styled('footer')(() => [tw`relative overflow-hidden`]);

const IntroWrapper = styled(Box)(() => [tw`mb-0 px-1 sm:px-5 lg:p-0 md:mb-16`]);
const LogoLink = styled(Link)(() => [tw`flex items-center mt-0 lg:mt-2`]);
const IntroPrimaryText = styled(Typography)`
	${tw`text-white text-base mt-2 lg:mt-[2.3rem] lg:pl-8 tracking-widest font-poppins`}
`;
const IntroSecondaryText = styled(Typography)(() => [
	tw`text-white mt-1 lg:mt-[1.3rem] lg:pl-8 italic tracking-[0.07em]`,
	{ fontSize: '15px' },
]);
const IntroContactLine = styled(Typography)(() => [
	tw`text-white lg:pl-8 italic tracking-[0.1em] mt-[0.2rem] lg:mt-[0.2rem]`,
	{ fontSize: '14px' },
]);
const EmailLink = styled('a')(() => [tw`ml-12 text-white tracking-[0.1em] no-underline`]);

const SectionHeading = styled(Typography)(() => [
	tw`text-white text-base font-semibold mb-3 leading-none tracking-[0.19rem]`,
]);
const List = styled('ul')(() => [tw`list-none pl-1 mt-[2.1rem] text-white`]);
const ListItem = styled('li')(() => [
	tw`flex items-center gap-[0.55rem] tracking-widest mb-[0.7rem] relative text-base`,
	{
		'&::before': {
			content: '""',
			display: 'inline-block',
			width: 0,
			height: 0,
			borderTop: '4px solid transparent',
			borderBottom: '4px solid transparent',
			borderLeft: '5px solid #ffffff',
			position: 'relative',
			top: 0,
			marginRight: '0.3rem',
		},
		'& a': {
			textDecoration: 'none',
			color: 'white',
			transition: 'color .25s ease',
		},
		'& a:hover': {
			color: 'var(--color-secondary, #ff64ae)',
		},
	},
]);

const BottomBar = styled(Box)(() => [
	tw`flex flex-col md:flex-row justify-between gap-2 pt-8 pb-8 lg:pt-[92px] lg:pb-[96px]`,
]);
const SocialIcons = styled(Box)(() => [tw`flex gap-[46px]`]);
const Copyright = styled(Box)(() => [tw`text-white text-base tracking-[0.1em] `]);

const BackToTopBtn = styled('button')(() => [
	tw`absolute bottom-16 right-10 w-8 h-8 flex items-center justify-center rounded-md text-white text-lg font-semibold border-0 cursor-pointer select-none`,
	tw`bg-secondary hover:brightness-110`,
]);

const Footer = () => {
	return (
		<FooterRoot>
			<Box
				sx={{
					position: 'absolute',
					top: { xl: '15%', md: '60%', lg: '40%', xs: 0 },
					left: 0,
					width: '100%',
					height: '100%',
					zIndex: -2,
					background: 'var(--footer)',
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
							backgroundColor: 'var(--footer)',
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
				<div className=" mt-28 w-full pt-8 lg:pt-16 xl:pt-14">
					<Box sx={{ width: '100%' }}>
						<Grid container rowGap={10} spacing={{ xs: 2, md: 11.5 }}>
							{/* Logo + giới thiệu */}
							<Grid size={{ xs: 12, md: 6, lg: 6 }}>
								<IntroWrapper>
									<LogoLink to="/">
										<img src="./Main Logo.png" alt="Logo" />
									</LogoLink>
									<IntroPrimaryText>
										<strong>Beautice</strong> is a Beauty Clinic WordPress Theme
									</IntroPrimaryText>
									<IntroSecondaryText>Baker Steet 101, NY, United States</IntroSecondaryText>
									<IntroContactLine>
										<span>+521 569 8966</span>
										<EmailLink href="mailto:mail@company.com">mail@company.com</EmailLink>
									</IntroContactLine>
								</IntroWrapper>
							</Grid>
							{/* Pages */}
							<Grid size={{ xs: 6, md: 3, lg: 3 }} className="md:pl-[0.3rem]">
								<SectionHeading variant="h6">Pages</SectionHeading>
								<List>
									{['Home', 'About', 'Services', 'Gallery', 'Team'].map((item) => (
										<ListItem key={item}>
											<Link to={`/${item.toLowerCase()}`}>{item}</Link>
										</ListItem>
									))}
								</List>
							</Grid>

							{/* Informations */}
							<Grid size={{ xs: 6, md: 3, lg: 3 }}>
								<SectionHeading variant="h6">Informations</SectionHeading>
								<List>
									{['Terms & conditions', 'Privacy policy', 'Blog', 'Contact'].map((item) => (
										<ListItem key={item}>
											<Link to={`/${item.toLowerCase()}`}>{item}</Link>
										</ListItem>
									))}
								</List>
							</Grid>
						</Grid>
					</Box>
					{/* Bottom section */}
					<BottomBar>
						<SocialIcons>
							<Icon>
								<img src="./Footer/facebook-f.svg" alt="Facebook" className="w-full h-auto" />
							</Icon>
							<Icon>
								<img src="./Footer/twitter.svg" alt="Twitter" className="w-full h-auto" />
							</Icon>
							<Icon>
								<img src="./Footer/linkedin-in.svg" alt="LinkedIn" className="w-full h-auto" />
							</Icon>
							<Icon>
								<img src="./Footer/youtube.svg" alt="YouTube" className="w-full h-auto" />
							</Icon>
							<Icon>
								<img src="./Footer/instagram.svg" alt="Instagram" className="w-full h-auto" />
							</Icon>
						</SocialIcons>
						<Copyright>© AltDesain Studio 2021 - All right reserved.</Copyright>
					</BottomBar>
				</div>
			</Container>
			<BackToTopBtn onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</BackToTopBtn>
		</FooterRoot>
	);
};

export default Footer;
