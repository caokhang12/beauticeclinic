import React from 'react';
import { Avatar, Box, Container, Grid, Rating, Typography } from '@mui/material';
import BannerBox from '../components/Banner';
import { TitleBlock } from '../components/TitleBlock';
import TeamBlock from '../components/TeamBlock';
import tw, { styled } from 'twin.macro';

// Data for assistance members
const assistanceMembers = [
	{
		img: './Team/Assistance_1.png',
		name: 'Lina Gustav',
		role: 'Pharmacist',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.',
	},
	{
		img: './Team/Assistance_2.png',
		name: 'Adam White',
		role: 'Finance',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.',
	},
	{
		img: './Team/Assistance_3.png',
		name: 'Jane Doe',
		role: 'Marketer',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.',
	},
];

// Styled components
const MainWrapper = tw.main`relative`;
const TeamSectionWrapper = tw.section`mt-52 py-5 text-center`;
const TeamBlockWrapper = tw.div`mt-12 lg:mt-20 xl:mt-28 pt-[0.7rem] pb-1`;

const AssistanceSection = tw.section`lg:mt-36 mt-28 mb-20 lg:mb-28 pt-2 lg:pt-6`;
const AssistanceHeader = tw.div`flex flex-col items-center justify-center text-center gap-3 mb-24`;
const AssistanceGrid = styled(Grid)(() => [
	tw`pt-4`,
	{ alignItems: 'center', justifyContent: 'center', display: 'flex' },
]);

const AssistanceTextBox = styled(Box)(() => [
	tw`flex flex-col h-full px-10 md:px-16 pt-5 py-6 lg:pt-7 lg:py-11`,
]);

const BannerSection = tw.section`w-full h-full relative pt-1`;
const BannerStack = styled('div')(() => [
	tw`flex flex-col items-center text-center gap-2 relative lg:relative bottom-5`,
]);

const ReviewsSection = tw.section``;
const ReviewsContainer = tw.div`mt-16 lg:mt-24 lg:mb-32 mb-20 pt-6 pb-5`;
const ReviewsHeader = tw.div`flex flex-col items-center justify-center text-center gap-3`;
const ReviewsAvatarWrapper = tw.div`mt-[3.8rem]  flex justify-center`;

const ReviewArrowsRow = styled('div')(() => [
	tw`flex flex-row items-center justify-center gap-2 sm:gap-6 md:gap-[5.5rem] text-center mt-11`,
]);
const ArrowWrapper = styled('div')(() => [
	tw`relative cursor-pointer hover:(opacity-70 scale-105)`,
]);
const StyledRating = styled(Rating)(() => [
	{
		'& .MuiRating-iconFilled': { color: '#FFA800' },
		'& .MuiRating-icon': { marginRight: 5, fontSize: 31 },
		display: 'flex',
		justifyContent: 'center',
	},
]);

const Team = () => {
	return (
		<MainWrapper>
			{/* Team Block */}
			<TeamSectionWrapper>
				<Container>
					<div className="lg:mr-20">
						<TitleBlock
							subTitle="Our Team"
							mainTitle="We are Professional"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
							mg
						/>
					</div>
					<TeamBlockWrapper>
						<TeamBlock />
					</TeamBlockWrapper>
				</Container>
			</TeamSectionWrapper>

			{/* Assistance Block */}
			<AssistanceSection>
				<Container>
					<AssistanceHeader>
						<TitleBlock
							subTitle="Assistance Team"
							mainTitle="Meet the pro assistance"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
							mg
						/>
					</AssistanceHeader>
					<AssistanceGrid container rowGap={{ xs: 6, md: 8, lg: 9.2 }} spacing={{ xl: 9 }}>
						{assistanceMembers.map((m) => (
							<React.Fragment key={m.name}>
								<Grid size={{ xs: 12, sm: 5 }}>
									<img src={m.img} alt={m.name} />
								</Grid>
								<Grid size={{ xs: 12, sm: 7 }}>
									<AssistanceTextBox>
										<Typography variant="h6" color="primary.main">
											{m.name} /<span className="italic font-normal text-sm"> {m.role}</span>
										</Typography>
										<Typography variant="subtitle2" component="p" className="leading-6 mt-5 w-4/5">
											{m.desc}
										</Typography>
									</AssistanceTextBox>
								</Grid>
							</React.Fragment>
						))}
					</AssistanceGrid>
				</Container>
			</AssistanceSection>

			{/* Banner Block */}
			<BannerSection>
				<Container className="relative">
					<BannerBox pt={25} pb={23} url="./Team/BackgroundBanner.png">
						<BannerStack>
							<Typography
								variant="h2"
								color="primary.contrastText"
								className="md:w-[45%] relative lg:pl-6"
							>
								Customer satisfaction is our main goal
							</Typography>
							<Typography variant="subtitle2" component="p" className="md:w-[57%] leading-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
								luctus venenatis
							</Typography>
						</BannerStack>
					</BannerBox>
				</Container>
			</BannerSection>

			{/* Reviews Block */}
			<ReviewsSection>
				<Container>
					<ReviewsContainer>
						<ReviewsHeader>
							<TitleBlock
								subTitle="Our Testimonials"
								mainTitle="What our customer says"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
								mg
							/>
						</ReviewsHeader>
						<ReviewsAvatarWrapper>
							<Avatar alt="Reviewer" src="./Team/Avatar.png" sx={{ width: 73, height: 73 }} />
						</ReviewsAvatarWrapper>
						<ReviewArrowsRow>
							<ArrowWrapper className="bottom-5 relative">
								<img src="./Team/arrow-left.svg" alt="Previous" />
							</ArrowWrapper>
							<Typography variant="body1" className="  w-[48%]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt
								laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet
								fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut.
								Purus volutpat in turpis gravida blandit.
							</Typography>
							<ArrowWrapper className="bottom-6 relative rotate-180">
								<img src="./Team/arrow-left.svg" alt="Next" />
							</ArrowWrapper>
						</ReviewArrowsRow>
						<Box sx={{ mt: 4, ml: 1, display: 'flex', justifyContent: 'center' }}>
							<StyledRating defaultValue={5} precision={0.5} />
						</Box>
					</ReviewsContainer>
				</Container>
			</ReviewsSection>
		</MainWrapper>
	);
};

export default Team;
