import React from 'react';
import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import tw, { styled } from 'twin.macro';
import { PinkButton } from '../components/PinkButton';
import BannerBox from '../components/Banner';
import { TitleBlock } from '../components/TitleBlock';

const ServiceCardData = [
	{
		icon: '/Home2/icon-service.svg',
		title: 'Beauty consultation',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
	},
	{
		icon: '/Home2/icon-service-2.svg',
		title: 'Skin treatments',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
	},
	{
		icon: '/Home2/icon-service-3.svg',
		title: 'Beauty product',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
	},
];

const BlogCardData = [
	{
		image: '/About/New_1.png',
		title: 'How much does a consultation cost at our clinic?',
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings...',
	},
	{
		image: '/About/New_2.png',
		title: "Watch out! don't choose the wrong beauty product",
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings...',
	},
	{
		image: '/About/New_3.png',
		title: 'About skin care you need to know',
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings...',
	},
];

// Styled Components

const ServiceCard = styled(Card)`
	${tw` text-start px-5 py-7 border-0 bg-white max-w-[261px] mx-auto w-full`}
`;

const AboutSection = styled(Box)`
	${tw`py-20 mt-20`}
`;

const NewsSection = styled(Box)`
	${tw`py-20 `}
`;

const ContactSection = styled(Box)`
	${tw`my-20 pt-2 pb-1 bg-white`}
`;

const Home2: React.FC = () => {
	return (
		<div className="">
			{/* Hero Section */}
			<Container className="relative">
				<BannerBox
					url="/Home2/BackgroundSlider.png"
					pt={38.5}
					pb={39.5}
					sx={{
						'&::after': {
							clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 88%)',
						},
					}}
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
						<div>
							<Box>
								<Typography variant="h1" color="primary.contrastText">
									Your beauty center place
								</Typography>
								<Typography variant="subtitle2" color="text" className="mt-3 font-medium w-[90%]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa
									pellentesque arcu fusce et magna consequat neque vitae lobortis.
								</Typography>
								<Button
									variant="outlined"
									sx={{
										textTransform: 'none',
										py: 1.3,
										color: 'white',
										borderColor: 'rgba(255,255,255,0.7)',
										px: 3.5,
										borderRadius: 3,
										letterSpacing: 1.5,

										mt: 5,
										'&:hover': {
											borderColor: 'white',
											backgroundColor: 'rgba(255,255,255,0.08)',
										},
									}}
								>
									More Details
								</Button>
							</Box>
						</div>
						<div className="flex justify-center items-center ">
							<Box sx={tw`relative flex justify-center items-center `}>
								<Box
									sx={tw`relative gap-3 flex  justify-center 
									lg:gap-4 lg:mr-7 `}
								>
									<Box>
										<Button aria-label="Play video">
											<img src="/Home2/PlayButton.png" alt="" />
										</Button>
									</Box>
									<span className="body__description flex justify-center items-center text-white">
										Tour Video
									</span>
								</Box>
							</Box>
						</div>
					</div>
				</BannerBox>
			</Container>

			{/* About Section */}
			<AboutSection>
				<Container>
					<div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
						<div>
							<Box sx={tw`flex justify-start lg:mb-0`}>
								<Box sx={tw`relative bottom-1`}>
									<img
										src="/Home2/AboutImage.png"
										alt="About Us"
										className=" object-cover rounded-2xl"
									/>
								</Box>
							</Box>
						</div>
						<div>
							<Box sx={tw`lg:pl-12`}>
								<Typography variant="subtitle1" color="secondary">
									About Us
								</Typography>
								<Typography variant="h2" color="primary	" className=" mt-2">
									We are the best beauty clinic
								</Typography>
								<Typography variant="subtitle2" className=" leading-6 mt-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
									donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit
									quam quis enim. Varius tellus in suspendisse placerat.
								</Typography>
								<PinkButton
									variant="contained"
									sx={{
										py: 2.5,
										px: 6,
										mt: 6,
										'&:hover': { backgroundColor: 'var(--color-primary-strong)' },
									}}
								>
									Learn More
								</PinkButton>
							</Box>
						</div>
					</div>
				</Container>
			</AboutSection>

			{/* Services Section */}
			<Box sx={tw`py-6 mt-14 justify-between`}>
				<Container maxWidth="xl">
					<Box sx={tw`text-center mb-14`}>
						<Typography variant="subtitle1" color="secondary">
							Main Services
						</Typography>
						<Typography variant="h2" className="mt-3">
							Our focus services
						</Typography>
						<Typography variant="subtitle2" className=" lg:mt-[26px] mt-4">
							Lorem ipsum dolor sit amet
						</Typography>
					</Box>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-2 xl:px-24 mt-20 mb-12">
						{ServiceCardData.map((service) => (
							<ServiceCard
								sx={{
									borderRadius: 4,
									boxShadow: '0 20px 60px rgba(9, 17, 86, 0.06)',
									border: '1px solid var(--color-secondary-surface-alt)',
								}}
							>
								<CardContent>
									<Box sx={tw`mt-1 mb-6`}>
										<Box>
											<img src={service.icon} alt="" />
										</Box>
									</Box>
									<Typography variant="h6" color="secondary" className=" mb-3 ">
										{service.title}
									</Typography>
									<Typography variant="body1" className="leading-none">
										{service.description}
									</Typography>
									<div className="text-primary text-sm tracking-4 mt-2">Learn more &gt;&gt;</div>
								</CardContent>
							</ServiceCard>
						))}
					</div>
				</Container>
			</Box>

			{/* Statistics Section */}
			<div>
				<Container className="relative mt-[66px]">
					<BannerBox
						url="/Home2/BackgroundCenter.png"
						pt={26}
						pb={32}
						sx={{
							'&::after': {
								clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 83%)',
							},
						}}
					>
						<div className="mt-16 pl-1 grid grid-cols-1 lg:grid-cols-2 lg:gap-1 gap-16 items-center">
							<div>
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
							</div>
							<div>
								<div className="relative grid gap-y-10 grid-cols-2 gap-2 items-center col justify-center">
									<div className=" flex justify-center items-center">
										<Stack direction="row" spacing={1.5} alignItems="center">
											<Box>
												<img
													src="/Home2/handshake 1.svg"
													alt=""
													className="lg:relative top-1 left-2"
												/>
											</Box>
											<Box>
												<Typography
													variant="h2"
													className="text-white section__title lg:relative top-2 left-1"
												>
													100%
												</Typography>
												<div className="text-green-500 font-semibold lg:relative left-2">
													trusted clinic
												</div>
											</Box>
										</Stack>
									</div>
									<div className=" flex justify-center items-center">
										<Stack direction="row" spacing={1.5} alignItems="center">
											<Box>
												<img
													src="/Home2/brotherhood 1.svg"
													alt=""
													className="lg:relative  right-2"
												/>
											</Box>
											<Box className="lg:relative top-2 right-2 ">
												<Typography variant="h2" className="section__title text-white">
													99%
												</Typography>
												<div className="text-white lg:relative bottom-2">customer love</div>
											</Box>
										</Stack>
									</div>
									<div className=" flex justify-center items-center">
										<Stack direction="row" spacing={1} alignItems="center">
											<Box>
												<img src="/Home2/earth 1.svg" alt="" className="lg:relative top-1 left-1" />
											</Box>
											<Box className="lg:relative top-1 left-2 ">
												<Typography
													variant="h2"
													className="section__title text-white lg:relative top-1"
												>
													75+
												</Typography>
												<div className="text-white">asian branch</div>
											</Box>
										</Stack>
									</div>
									<div className=" flex justify-center items-center">
										<Stack direction="row" spacing={2} alignItems="center">
											<Box>
												<img src="/Home2/doctor 1.svg" alt="" />
											</Box>
											<Box className="lg:relative top-1 right-1">
												<Typography
													variant="h2"
													className="section__title text-white lg:relative top-1"
												>
													1.200+
												</Typography>
												<div className="text-white">licensed worker</div>
											</Box>
										</Stack>
									</div>
								</div>
							</div>
						</div>
					</BannerBox>
				</Container>
			</div>

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

					<div className="grid grid-cols-1 md:grid-cols-3 mt-20 pt-2 gap-12">
						{BlogCardData.map((blog) => (
							<div>
								<Card
									sx={{
										borderRadius: 4,
										boxShadow: '0 14px 40px rgba(9, 17, 86, 0.08)',
										border: '1px solid var(--color-secondary-surface-alt)',
										transition: 'box-shadow .2s, transform .2s',
										'&:hover': {
											boxShadow: '0 20px 60px rgba(9, 17, 86, 0.12)',
											transform: 'translateY(-4px)',
										},
									}}
								>
									<Box sx={tw`h-64 bg-gray-200`}>
										<img src={blog.image} alt="News 1" className="w-full h-full object-cover" />
									</Box>
									<CardContent
										sx={{
											py: 6.5,
											pl: 4.7,
										}}
									>
										<Typography variant="h6" color="primary" className=" mb-3 ">
											{blog.title}
										</Typography>
										<Typography variant="body1" className="card__description">
											{blog.description}
										</Typography>
										<Box sx={tw`text-pink-500 font-semibold text-sm mt-6 mb-12 flex items-start`}>
											Learn more &gt;&gt;
										</Box>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</Container>
			</NewsSection>

			{/* Contact Section */}
			<ContactSection>
				<Container className=" mb-24 pb-3">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] items-start gap-10">
						{/* Left content */}
						<Box>
							<Typography variant="h2" className="section__title">
								Request call services
							</Typography>
							<Typography
								variant="subtitle2"
								component="p"
								className="section__description mt-6"
							>
								Lorem ipsum dolor sit amet, consect adipiscing elit{' '}
								<span className="font-semibold leading-8 text-secondary">Contact Us.</span>
							</Typography>
						</Box>

						{/* Right form */}
						<Box sx={{ width: '100%', maxWidth: 720, height: '100%', maxHeight: '160px' }}>
							<form>
								<Box
									sx={{
										display: 'flex',
										mt: 1.8,
										alignItems: 'stretch',
										border: '1px solid var(--color-secondary-border)',
										borderRadius: '25px',
										overflow: 'hidden',
										boxShadow: '0 8px 24px rgba(9,17,86,0.06)',
									}}
								>
									<input
										size={500}
										type="tel"
										placeholder="Insert your phone number here ..."
										style={{
											width: '100%',
											height: '73px',
											padding: '18px 38px',
											border: 'none',
											borderRadius: '16px',
											fontSize: '16px',
										}}
										className="placeholder:text-neutral-400 placeholder:tracking-widest"
									/>
									<Button
										variant="contained"
										type="submit"
										sx={{
											backgroundColor: 'var(--color-primary)',
											color: 'white',
											px: 5.5,
											display: 'flex',
											alignItems: 'center',
											gap: 1,
											fontWeight: 600,
											fontSize: 14,
											borderRadius: 0,
											boxShadow: '0 10px 30px rgba(255, 100, 174, 0.3)',
											'&:hover': { backgroundColor: 'var(--color-primary-strong)' },
										}}
									>
										<img src="/Home2/phone.svg" alt="call" />
									</Button>
								</Box>
								<Box sx={{ mt: 0.7, display: 'flex', justifyContent: 'flex-end' }}>
									<Typography
										sx={{
											fontSize: 14,
											letterSpacing: '0.02em',
											color: 'var(--color-neutral-600)',
										}}
									>
										Toll free for our coverage areas.
									</Typography>
								</Box>
							</form>
						</Box>
					</div>
				</Container>
			</ContactSection>
		</div>
	);
};

export default Home2;
