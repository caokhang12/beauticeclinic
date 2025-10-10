import React from 'react';
import { PinkButton } from '../components/PinkButton';
import TeamBlock from '../components/TeamBlock';
import { Box, Container, Stack, Typography } from '@mui/material';
import ContactForm from '../components/ContactForm';
import { TitleBlock } from '../components/TitleBlock';
import BubbleBackground from '../components/BubbleBg';
import tw, { styled } from 'twin.macro';

const serviceCardData = [
	{
		image: './Home/Home_1.png',
		title: 'Beauty consultation',
		description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
	},
	{
		image: './Home/Home_2.png',
		title: 'Skin treatments',
		description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
	},
	{
		image: './Home/Home_3.png',
		title: 'Beauty product',
		description: 'Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.',
	},
];

const PageWrapper = styled(Box)(() => [tw`relative overflow-hidden w-full`]);
const HeroSection = styled('section')(() => [tw`pt-36 lg:pt-56 xl:pt-64 xl:mt-1`]);
const HeroGrid = styled(Box)(() => [
	tw`grid lg:grid-cols-[1fr_1.2fr] gap-20 xl:gap-4 md:grid-cols-1`,
]);
const HeroContent = styled(Box)(() => [tw`pt-14 pl-10`]);
const HeroCTAWrapper = styled(Box)(() => [tw`mt-[2.15rem]`]);
const HeroImageWrapper = styled(Box)(() => [tw`lg:ml-1 w-full h-auto flex justify-center`]);
const HeroButton = styled(PinkButton)(() => [tw`px-[2.5rem] py-3 lg:py-[1rem]`]);
const HeroSlider = styled(Box)(() => [tw`flex gap-2 justify-center mt-32 py-2`]);

const ServicesSection = styled('section')(() => [tw`mt-28 py-1 text-center`]);
const ServicesGrid = styled(Box)(() => [
	tw`grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-14 mt-24`,
]);
const ServiceCard = styled(Box)(() => [tw`px-8 lg:px-8 pb-16 py-12`]);
const ServiceImageWrapper = styled(Box)(() => [tw`flex items-center justify-center`]);

const ClinicSection = styled('section')(() => [tw`mt-32 w-full py-2`]);
const ClinicGrid = styled(Box)(() => [tw`grid lg:grid-cols-[1fr_1fr] md:grid-cols-1 gap-10`]);
const ClinicActions = styled(Box)(() => [tw`flex gap-10 items-center lg:mt-12 pt-10`]);
const ClinicMedia = styled(Box)(() => [
	tw`lg:relative top-5 flex items-center justify-center  md:justify-end w-full`,
]);

const TeamSection = styled(Box)(() => [tw`mt-20 lg:mt-28 py-2 lg:py-[1.5rem] text-center`]);
const TeamTitleWrapper = styled(Box)(() => [tw` flex text-center justify-center`]);
const TeamContentWrapper = styled(Box)(() => [tw`mt-12 lg:mt-20 xl:mt-32 py-2 lg:py-3`]);

const ContactSection = styled('section')(() => [tw`mt-24 lg:mb-32 mb-20 py-2 lg:pt-[1.3rem]`]);
const ContactGrid = styled(Box)(() => [
	tw`grid lg:grid-cols-2 md:grid-cols-1 items-center lg:gap-24 gap-10`,
]);
const ContactImageWrapper = styled(Box)(() => [tw`lg:pt-16 md:pt-11 lg:relative top-2`]);
const ContactContent = styled(Box)(() => [tw`ml-[0.20rem] md:mt-8 mt-6`]);
const ContactFormWrapper = styled(Box)(() => [tw`mt-5 lg:mt-10 pt-1`]);
const Home: React.FC = () => {
	return (
		<PageWrapper>
			<BubbleBackground image="./Bubble2.png" top={0} left={0} />

			<BubbleBackground image="./BubbleMid1.png" top="33%" right={0} justifyContent="flex-end" />
			<BubbleBackground image="./BubbleMid1.png" top="75%" left={0} flipX />
			{/* <!-- Hero Block --> */}
			<HeroSection>
				<Container>
					<HeroGrid>
						<HeroContent>
							<Typography color="primary" variant="h1">
								Clinic & beauty consultant
							</Typography>
							<Typography variant="subtitle2" className="mt-2 mb-6">
								It is a long established fact that a reader will be by the readable content of a
								page.
							</Typography>
							<HeroCTAWrapper>
								<HeroButton>More Details</HeroButton>
							</HeroCTAWrapper>
						</HeroContent>
						<HeroImageWrapper>
							<img src="./HeroImage.png" alt="Hero Image" className="w-full h-auto" />
						</HeroImageWrapper>
					</HeroGrid>
					{/* Hero Slider */}
					<HeroSlider>
						<span className="self-center w-4 h-1 rounded-xl bg-slider"></span>
						<span className="bg-sliderActive h-2 w-6 rounded-xl"></span>
						<span className="self-center w-4 h-1 rounded-xl bg-slider"></span>
					</HeroSlider>
				</Container>
			</HeroSection>

			{/* <!-- Services Block --> */}
			<ServicesSection>
				<Container>
					<TitleBlock
						subTitle={'Main Services'}
						mainTitle={`Learn services to focus on your beauty`}
						description={
							'Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'
						}
					/>
					<ServicesGrid>
						{serviceCardData.map((item, index) => (
							<ServiceCard key={index}>
								<ServiceImageWrapper>
									<img src={item.image} alt="Service Image" />
								</ServiceImageWrapper>
								<Typography color="primary.main" variant="h6" className="md:mt-[3.6rem] mt-5">
									{item.title}
								</Typography>
								<Typography variant="body1" color="text.primary" className=" md:mt-5 px-1 ">
									{item.description}
								</Typography>
							</ServiceCard>
						))}
					</ServicesGrid>
				</Container>
			</ServicesSection>

			{/* <!-- Clinic Block --> */}
			<ClinicSection>
				<Container>
					<ClinicGrid>
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

							<ClinicActions>
								<PinkButton
									variant="contained"
									sx={{
										py: { xs: 1, lg: 2 },
										px: {
											xs: 3,
											md: 4,
											lg: 6,
										},
									}}
								>
									Learn More
								</PinkButton>
								<a href="#" className="flex no-underline items-center gap-3 ml-1">
									<img src="./Home/Play_button.png" alt="" className=" w-fit" />
									<Typography
										variant="subtitle1"
										color="text.primary"
										component="span"
										className="tracking-widest"
									>
										Watch Video
									</Typography>
								</a>
							</ClinicActions>
						</Stack>
						<ClinicMedia>
							<img
								src="./unsplash_about.png"
								alt="Clinic Image"
								className="w-full h-auto  max-w-[476px] max-h-[350px]"
							/>
						</ClinicMedia>
					</ClinicGrid>
				</Container>
			</ClinicSection>

			{/* <!-- Team Block --> */}
			<TeamSection>
				<Container>
					<TeamTitleWrapper>
						<TitleBlock
							subTitle="Professional Teams"
							mainTitle="The Professional expert"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
						/>
					</TeamTitleWrapper>
					<TeamContentWrapper>
						<TeamBlock />
					</TeamContentWrapper>
				</Container>
			</TeamSection>

			{/* <!-- Contact Block --> */}
			<ContactSection>
				<Container>
					<ContactGrid>
						<ContactImageWrapper>
							<img src="./ContactAnimations.png" alt="Contact Image" className="w-full h-auto" />
						</ContactImageWrapper>
						<ContactContent>
							<Typography variant="subtitle1" color="secondary">
								Contact Us
							</Typography>
							<Typography variant="h2" color="primary.main" className=" mt-3">
								Send your inquiry to
								<br />
								our expert team
							</Typography>
							<Typography variant="subtitle2" className=" mt-5">
								Lorem ipsum dolor sit amet nulla turapis tellus.
							</Typography>
							<ContactFormWrapper>
								<ContactForm />
							</ContactFormWrapper>
						</ContactContent>
					</ContactGrid>
				</Container>
			</ContactSection>
		</PageWrapper>
	);
};

export default Home;
