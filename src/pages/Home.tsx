import React from 'react';
import { PinkButton } from '../components/PinkButton';
import TeamBlock from '../components/TeamBlock';
import { Box, Container, Stack, Typography } from '@mui/material';
import ContactForm from '../components/ContactForm';
import { TitleBlock } from '../components/TitleBlock';

const serviceCardData = [
	{
		image: '/Home/Home_1.png',
		title: 'Beauty consultation',
		description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
	},
	{
		image: '/Home/Home_2.png',
		title: 'Skin treatments',
		description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
	},
	{
		image: '/Home/Home_3.png',
		title: 'Beauty product',
		description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
	},
];
const Home: React.FC = () => {
	return (
		<div className="relative">
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					// backgroundImage: 'url(/Bubble2.png)',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					zIndex: -1,
					pointerEvents: 'none',
				}}
			>
				<img src="/Bubble2.png" className="" alt="" />
			</Box>

			<Box
				sx={{
					position: 'absolute',
					top: '33%',
					right: 0,
					width: '100%',
					height: 'fit-content',
					display: 'flex',
					justifyContent: 'flex-end',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					zIndex: -1,
					pointerEvents: 'none',
				}}
			>
				<img src="/BubbleMid1.png" className="" alt="" />
			</Box>
			<Box
				sx={{
					position: 'absolute',
					top: '75%',
					left: 0,
					width: '100%',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					zIndex: -1,
					pointerEvents: 'none',
				}}
			>
				<img src="/BubbleMid1.png" className="transform scale-x-[-1]" alt="" />
			</Box>
			{/* <!-- Hero Block --> */}
			<section className="pt-36 lg:pt-56 xl:mt-1 xl:pt-64 ">
				<Container>
					<div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 xl:gap-4 md:grid-cols-1">
						<div className="pt-14 pl-10">
							<Typography color="primary" variant="h1" component="h1">
								Clinic & beauty consultant
							</Typography>
							<Typography variant="subtitle2" className="mt-2 mb-6 text-secondary font-medium">
								It is a long established fact that a reader will be by the readable content of a
								page.
							</Typography>
							<div className="mt-[2.15rem]">
								<PinkButton
									variant="contained"
									sx={{
										py: 2.6,
										px: 5,
									}}
								>
									More Details
								</PinkButton>
							</div>
						</div>
						<div className="lg:ml-2 items-center flex justify-center">
							<img src="/HeroImage.png" alt="Hero Image" />
						</div>
					</div>
					{/* Hero Slider */}
					<div className="flex gap-2 justify-center mt-32 py-2">
						<span className="self-center w-4 h-1 rounded-xl bg-slider"></span>
						<span className="bg-sliderActive h-2 w-6 rounded-xl"></span>
						<span className="self-center w-4 h-1 rounded-xl bg-slider"></span>
					</div>
				</Container>
			</section>

			{/* <!-- Services Block --> */}
			<section className="lg:py-28 mt-3  text-center">
				<Container>
					<TitleBlock
						subTitle={'Main Services'}
						mainTitle={'Learn services to focus on your beauty'}
						description={
							'Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'
						}
					/>

					<div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-14 mt-24">
						{serviceCardData.map((item, index) => (
							<div key={index} className="px-8 lg:px-8 pb-16 py-12 ">
								<div className="flex items-center justify-center ">
									<img src={item.image} alt="" />
								</div>
								<Typography color="primary.main" variant="h6" className="md:mt-14">
									{item.title}
								</Typography>
								<Typography
									variant="body1"
									color="text.primary"
									className="card__description md:mt-5 px-1 "
								>
									{item.description}
								</Typography>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* <!-- Clinic Block --> */}
			<section className="mt-6 py-1">
				<Container>
					<div className="grid lg:grid-cols-[1fr_1fr] md:grid-cols-1 gap-10 ">
						<Stack spacing={1.5}>
							<Typography variant="subtitle1" color="secondary">
								About Us
							</Typography>
							<Typography variant="h2" color="primary.main">
								We are the best beauty clinic
							</Typography>
							<Typography
								variant="subtitle2"
								className="pt-2 lg:w-[89%] leading-6"
								color="text.primary"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
								donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam
								quis enim. Varius tellus in suspendisse placerat.
								<br />
								<br />
								Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus
								enim.
							</Typography>

							<div className="flex gap-10 items-center  mt-8 lg:mt-12 pt-1">
								<PinkButton
									variant="contained"
									sx={{
										py: { xs: 1, lg: 2.6 },
										px: {
											xs: 3,
											md: 4,
											lg: 6,
										},
									}}
								>
									Learn More
								</PinkButton>
								<a href="#" className="flex items-center gap-3 ml-1">
									<div className="">
										<img src="/Home/Play_button.png" alt="" className=" w-fit" />
									</div>
									<Typography variant="subtitle2" component="span" className="section__description text-text-body">
										Watch Video
									</Typography>
								</a>
							</div>
						</Stack>
						<div className="relative w-full h-full flex items-center justify-center lg:items-end lg:justify-end lg:pb-1">
							<img src="/unsplash_about.png" alt="Clinic Image" className="" />
						</div>
					</div>
				</Container>
			</section>

			{/* <!-- Team Block --> */}
			<div className="mt-20 lg:mt-28 py-2 lg:py-5 text-center">
				<Container>
					<TitleBlock
						subTitle="Professional Teams"
						mainTitle="The Professional expert"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
					/>
					<TeamBlock />
				</Container>
			</div>

			{/* <!-- Contact Block --> */}
			<section className=" mt-28 lg:mb-32 mb-20 py-[26px]">
				<Container>
					<div className="grid lg:grid-cols-2 md:grid-cols-1  items-center lg:gap-24 gap-10">
						<div className="lg:pt-16 md:pt-11 relative top-1">
							<img src="ContactAnimations.png" alt="Contact Image" />
						</div>
						<div className="ml-[0.20rem]  md:mt-8 mt-6">
							<Typography variant="subtitle1" color="secondary">
								Contact Us
							</Typography>
							<Typography variant="h2" color="primary" className=" mt-3">
								Send your inquiry to
								<br />
								our expert team
							</Typography>
							<Typography variant="subtitle2" className=" mt-5">
								Lorem ipsum dolor sit amet nulla turapis tellus.
							</Typography>
							<div className=" mt-5 lg:mt-10 pt-1 ">
								<ContactForm />
							</div>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default Home;
