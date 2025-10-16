import React from 'react';
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	InputBase,
	Stack,
	Typography,
} from '@mui/material';
import tw, { styled } from 'twin.macro';
import { PinkButton } from '../components/PinkButton';
import BannerBox from '../components/Banner';
import { TitleBlock } from '../components/TitleBlock';

const ServiceCardData = [
	{
		icon: './Home2/icon-service.svg',
		title: 'Beauty consultation',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
	},
	{
		icon: './Home2/icon-service-2.svg',
		title: 'Skin treatments',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
	},
	{
		icon: './Home2/icon-service-3.svg',
		title: 'Beauty product',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
	},
];

const BlogCardData = [
	{
		image: './About/New_1.png',
		title: 'How much does a consultation cost at our clinic?',
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings...',
	},
	{
		image: './About/New_2.png',
		title: "Watch out! don't choose the wrong beauty product",
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings...',
	},
	{
		image: './About/New_3.png',
		title: 'About skin care you need to know',
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings...',
	},
];

// Styled Components

const ServiceCard = styled(Card)`
	${tw` text-start px-5 pb-6 pt-3 border rounded-3xl border-neutral-200 max-w-[261px] mx-auto w-full`}
`;

const AboutSection = styled(Box)`
	${tw`py-20 mt-20`}
`;

const NewsSection = styled(Box)`
	${tw`py-20 `}
`;

const ContactSection = styled(Box)`
	${tw`mt-24 mb-44 py-4`}
`;

// Hero
const HeroGrid = styled(Box)`
	${tw`grid grid-cols-1 lg:grid-cols-2 gap-4 w-full`}
`;
const HeroLeft = styled(Box)(() => [tw``]);
const HeroRight = styled(Box)(() => [tw`flex justify-center items-center`]);
const PlayWrapper = styled(Box)(() => [tw`relative flex justify-center items-center`]);
const PlayInner = styled(Box)(() => [tw`relative gap-3 flex justify-center lg:gap-5 lg:mr-8`]);
const HeroPlayButton = styled(Button)(() => [tw` flex justify-center items-center`]);

// About
const AboutGrid = styled(Box)(() => [tw`grid grid-cols-1 lg:grid-cols-2 gap-20 items-start`]);

// Services
const ServicesGrid = styled(Box)(() => [
	tw`grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-2 xl:px-24 mt-[4.7rem] mb-12`,
]);

// Statistics
const StatsGrid = styled(Box)(() => [
	tw`mt-16 pl-1 grid grid-cols-1 lg:grid-cols-2 lg:gap-1 gap-16 items-center`,
]);
const StatItemsGrid = styled(Box)(() => [
	tw`relative grid gap-y-10 grid-cols-2 gap-2 items-center justify-center`,
]);
const StatItem = styled(Box)(() => [tw`flex justify-center items-center`]);

// News
const NewsGrid = styled(Box)(() => [tw`grid grid-cols-1 lg:grid-cols-3 mt-16 pt-5 gap-12`]);
const NewsCardWrapper = styled(Box)`
	${tw`w-fit  h-auto border-t-0 mx-auto`}
`;

const NewsCard = styled(Card)(() => [
	tw`bg-card  pb-5 lg:pb-7 rounded-3xl hover:(shadow-2xl transition-shadow md:scale-105 duration-300)`,
]);

const NewsCardContent = styled(CardContent)`
	${tw`lg:(pl-[2.4rem] pt-12) pt-6 pl-5`}
`;

// Contact
const ContactGrid = styled(Box)(() => [
	tw`grid grid-cols-1  lg:grid-cols-[1fr_1.5fr] items-start gap-10`,
]);

// Contact form submit button (replaces inline sx usage)
const ContactSubmitButton = styled(PinkButton)(() => [
	tw`rounded-none px-[44px] h-[73px] min-w-0 flex items-center justify-center rounded-tr-[25px] rounded-br-[25px]`,
]);

// Phone input (left rounded only, no right corners)
const ContactPhoneInput = styled(InputBase)(() => [
	tw`w-full h-[73px] px-[38px] text-base`,
	{
		borderTopLeftRadius: '25px',
		borderBottomLeftRadius: '25px',
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,

		'& .MuiInputBase-input': {
			padding: 0,
			height: '100%',
			letterSpacing: '0.15em',
		},
		'::placeholder, & .MuiInputBase-input::placeholder': {
			letterSpacing: '0.1em',
		},
	},
]);

const Home2: React.FC = () => {
	return (
		<Box>
			{/* Hero Section */}
			<Container className="relative">
				<BannerBox
					url="./Home2/BackgroundSlider.png"
					pt={{ xs: 20, sm: 28, lg: 38.5 }}
					pb={{ xs: 20, sm: 28, lg: 39.5 }}
					sx={{
						'&::after': {
							clipPath: {
								xs: 'polygon(0 0, 100% 0, 100% 100%, 0 95%)',
								sm: 'polygon(0 0, 100% 0, 100% 100%, 0 92%)',
								md: 'polygon(0 0, 100% 0, 100% 97.5%, 0 90%)',
								lg: 'polygon(0 0, 100% 0, 100% 98%, 0 89%)',
								xl: 'polygon(0 0, 100% 0, 100% 100%, 0 88%)',
							},
						},
					}}
				>
					<HeroGrid>
						<HeroLeft>
							<Box>
								<Typography variant="h1" color="primary.contrastText">
									Your beauty center place
								</Typography>
								<Typography variant="subtitle2" color="text" className="mt-3 w-[90%]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa
									pellentesque arcu fusce et magna consequat neque vitae lobortis.
								</Typography>
								<Button
									variant="outlined"
									sx={{
										py: 1.3,
										color: 'white',
										border: 'solid 1px white',
										px: 3.5,
										borderRadius: 3,
										letterSpacing: 1.5,

										mt: 5,
									}}
								>
									More Details
								</Button>
							</Box>
						</HeroLeft>
						<HeroRight>
							<PlayWrapper>
								<PlayInner>
									<Box>
										<HeroPlayButton>
											<img
												src="./Home2/PlayButton.png"
												alt=""
												className="hover:scale-105 transition-transform duration-200"
											/>
										</HeroPlayButton>
									</Box>
									<Typography
										variant="subtitle2"
										color="primary.contrastText"
										className="flex justify-center items-center lg:relative top-0.5"
									>
										Tour Video
									</Typography>
								</PlayInner>
							</PlayWrapper>
						</HeroRight>
					</HeroGrid>
				</BannerBox>
			</Container>

			{/* About Section */}
			<AboutSection>
				<Container>
					<AboutGrid>
						<Box>
							<Box sx={tw`flex justify-start lg:mb-0`}>
								<Box sx={tw`relative`}>
									<img src="./Home2/AboutImage.png" alt="About Us" className="w-full h-auto " />
								</Box>
							</Box>
						</Box>
						<Box>
							<Box sx={tw`lg:pl-12`}>
								<Typography variant="subtitle1" color="secondary">
									About Us
								</Typography>
								<Typography variant="h2" color="primary.main" className="mt-3">
									We are the best beauty clinic
								</Typography>
								<Typography variant="subtitle2" className=" leading-6 mt-3">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
									donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit
									quam quis enim. Varius tellus in suspendisse placerat.
								</Typography>
								<PinkButton
									variant="contained"
									sx={{
										py: 2.1,
										px: 6,
										mt: 5.9,
									}}
								>
									Learn More
								</PinkButton>
							</Box>
						</Box>
					</AboutGrid>
				</Container>
			</AboutSection>

			{/* Services Section */}
			<Box sx={tw`py-6 mt-14 justify-between`}>
				<Container>
					<TitleBlock
						subTitle="Main Services"
						mainTitle="Our focus services"
						description="Lorem ipsum dolor sit amet"
					/>

					<ServicesGrid>
						{ServiceCardData.map((service) => (
							<ServiceCard>
								<CardContent>
									<Box sx={tw`pt-[0.15rem] mb-5`}>
										<Box>
											<img src={service.icon} alt="" />
										</Box>
									</Box>
									<Typography variant="h6" color="primary" className="mb-4 ">
										{service.title}
									</Typography>
									<Typography variant="body1">{service.description}</Typography>
									<Typography
										variant="subtitle1"
										color="secondary"
										className="text-sm tracking-4 mt-4"
									>
										Learn more &gt;&gt;
									</Typography>
								</CardContent>
							</ServiceCard>
						))}
					</ServicesGrid>
				</Container>
			</Box>

			{/* Statistics Section */}
			<Box>
				<Container className="relative mt-12">
					<BannerBox
						url="./Home2/BackgroundCenter.png"
						pt={{ xs: 16, sm: 20, lg: 26 }}
						pb={{ xs: 16, sm: 24, lg: 32 }}
						sx={{
							'&::after': {
								clipPath: {
									xs: 'polygon(0 8%, 100% 0, 100% 100%, 0 92%)',
									sm: 'polygon(0 10%, 100% 0, 100% 100%, 0 90%)',
									lg: 'polygon(0 14%, 100% 0, 100% 100%, 0 84%)',
								},
							},
						}}
					>
						<StatsGrid>
							<Box>
								<Box sx={tw`space-y-5`}>
									<Typography variant="h2" color="primary.contrastText">
										Why choosing us?
									</Typography>
									<Typography
										variant="subtitle2"
										color="primary.contrastText"
										className="leading-6 w-5/6"
									>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
										amet luctus venenatis.
									</Typography>
								</Box>
							</Box>
							<Box>
								<StatItemsGrid>
									<StatItem>
										<Stack direction="row" spacing={1.5} alignItems="center">
											<Box>
												<img
													src="./Home2/handshake 1.svg"
													alt=""
													className="lg:relative top-2 left-2"
												/>
											</Box>
											<Box>
												<Typography
													variant="h2"
													color="primary.contrastText"
													className=" lg:relative top-1.5 left-2"
												>
													100%
												</Typography>
												<Typography
													variant="subtitle1"
													color="secondary"
													className=" font-semibold lg:relative left-1 top-1"
												>
													trusted clinic
												</Typography>
											</Box>
										</Stack>
									</StatItem>
									<StatItem>
										<Stack direction="row" spacing={1.5} alignItems="center">
											<Box>
												<img
													src="./Home2/brotherhood 1.svg"
													alt=""
													className="lg:relative  right-1.5 top-1"
												/>
											</Box>
											<Box className="lg:relative top-2 right-2 ">
												<Typography variant="h2" color="primary.contrastText">
													99%
												</Typography>
												<Typography
													variant="subtitle1"
													color="primary.contrastText"
													className=" lg:relative bottom-1"
												>
													customer love
												</Typography>
											</Box>
										</Stack>
									</StatItem>
									<StatItem>
										<Stack direction="row" spacing={1} alignItems="center">
											<Box>
												<img
													src="./Home2/earth 1.svg"
													alt=""
													className="lg:relative top-1.5 left-2"
												/>
											</Box>
											<Box className="lg:relative top-1 left-2 ">
												<Typography
													variant="h2"
													color="primary.contrastText"
													className="lg:relative top-1"
												>
													75+
												</Typography>
												<Typography
													variant="subtitle1"
													color="primary.contrastText"
													className=" lg:relative "
												>
													asian branch
												</Typography>
											</Box>
										</Stack>
									</StatItem>
									<StatItem>
										<Stack direction="row" spacing={2} alignItems="center">
											<Box>
												<img src="./Home2/doctor 1.svg" alt="" />
											</Box>
											<Box className="lg:relative top-1 right-1">
												<Typography
													variant="h2"
													color="primary.contrastText"
													className=" lg:relative top-1"
												>
													1.200+
												</Typography>
												<Typography variant="subtitle1" color="primary.contrastText">
													licensed worker
												</Typography>
											</Box>
										</Stack>
									</StatItem>
								</StatItemsGrid>
							</Box>
						</StatsGrid>
					</BannerBox>
				</Container>
			</Box>

			{/* News Section */}
			<NewsSection>
				<Container>
					<Box
						sx={{
							textAlign: 'center',
							mt: 3.2,
							pl: 0.2,
						}}
					>
						<TitleBlock
							subTitle="The Blog
						"
							mainTitle="Our latest news"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit
						"
						/>
					</Box>

					<NewsGrid>
						{BlogCardData.map((blog) => (
							<NewsCardWrapper>
								<NewsCard>
									<Box>
										<img src={blog.image} alt="News 1" className="w-full h-auto" />
									</Box>
									<NewsCardContent>
										<Typography
											variant="h6"
											color="primary"
											className=" mb-3 tracking-normal line-clamp-2"
										>
											{blog.title}
										</Typography>
										<Typography variant="body1" className="w-11/12">
											{blog.description}
										</Typography>
										<Typography variant="subtitle1" color="secondary" className="text-sm mt-6">
											Learn more &gt;&gt;
										</Typography>
									</NewsCardContent>
								</NewsCard>
							</NewsCardWrapper>
						))}
					</NewsGrid>
				</Container>
			</NewsSection>

			{/* Contact Section */}
			<ContactSection>
				<Container>
					<ContactGrid>
						{/* Left content */}
						<Box>
							<Typography variant="h2" color="primary.main">
								Request call services
							</Typography>
							<Typography variant="subtitle2" component="p" className="leading-[.9rem] mt-6">
								Lorem ipsum dolor sit amet, consect adipiscing elit{' '}
								<span className="font-semibold leading-8 text-primary">Contact Us.</span>
							</Typography>
						</Box>

						{/* Right form */}
						<Box sx={{ width: '100%', maxWidth: 720, height: '100%', maxHeight: '160px' }}>
							<form>
								<Box
									sx={{
										display: 'flex',
										mt: 1.5,
										alignItems: 'stretch',
										border: '1px solid var(--color-secondary-border)',
										borderRadius: '25px',
									}}
								>
									<ContactPhoneInput type="tel" placeholder="Insert your phone number here ..." />
									<ContactSubmitButton type="submit">
										<img src="./Home2/phone.svg" alt="Call" />
									</ContactSubmitButton>
								</Box>
								<Box sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end' }}>
									<Typography className="text-xs tracking-widest ">
										Toll free for our coverage areas.
									</Typography>
								</Box>
							</form>
						</Box>
					</ContactGrid>
				</Container>
			</ContactSection>
		</Box>
	);
};

export default Home2;
