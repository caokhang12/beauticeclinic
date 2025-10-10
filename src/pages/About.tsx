import tw, { styled } from 'twin.macro';
import TeamBlock from '../components/TeamBlock';
import { Box, Container, Typography } from '@mui/material';
import BannerBox from '../components/Banner';
import { TitleBlock } from '../components/TitleBlock';
import BubbleBackground from '../components/BubbleBg';

const PageWrapper = tw.div`relative`;

const HeroMediaWrapper = styled(Box)`
	${tw`relative w-full my-7`}
	border-radius: 15px;
`;

const HeroPlayButton = styled(Box)`
	${tw`absolute   cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30`}
`;

const TeamSection = styled.section`
	${tw`my-24 pt-9 pb-6`}
`;

const MissionImageFrame = styled(Box)`
	${tw`flex justify-center w-full items-end lg:mb-1`}
`;

const MissionPrimaryImage = styled(Box)`
	${tw`lg:relative top-6 right-2 flex w-full h-auto justify-center items-center`}
`;

const MissionSecondaryImage = styled(Box)`
	${tw`flex lg:relative bottom-3 w-full h-auto left-3 justify-center items-center`}
`;

const ClientLogoContainer = styled(Box)`
	${tw`flex justify-center items-center`}
`;

const About = () => {
	return (
		<PageWrapper>
			<BubbleBackground image="./BubbleMid1.png" top="33%" right={0} justifyContent="flex-end" />
			<BubbleBackground image="./BubbleMid1.png" top="60%" left={0} flipX />
			{/* Hero Block */}
			<section className="mt-40 pt-9">
				<Container>
					<div className="flex flex-col gap-3 py-[2.1rem]">
						<Typography variant="subtitle1" color="secondary">
							About
						</Typography>
						<Typography variant="h2" color="primary.main" className=" md:w-2/3">
							We are a leading beauty clinic that has been around since 2002
						</Typography>
						<Typography variant="subtitle2" className=" mt-2 md:w-3/5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus venenatis
						</Typography>
					</div>
					<HeroMediaWrapper>
						<HeroPlayButton>
							<img src="./About/Play Button.png" alt="Play" className="w-full h-auto" />
						</HeroPlayButton>
						<img src="./About/HeroImage.png" className="w-full h-auto" alt="Hero Image" />
					</HeroMediaWrapper>
				</Container>
			</section>

			{/* Team Block */}
			<TeamSection>
				<Container>
					<TitleBlock
						subTitle="Professional Teams"
						mainTitle="The Professional expert"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
					/>
					<div className="mt-12 lg:mt-20 xl:mt-32 pt-[0.7rem] pb-1">
						<TeamBlock />
					</div>
				</Container>
			</TeamSection>

			{/* Slogan Block */}
			<section>
				<Container className="relative mt-40">
					<BannerBox pt={21} pb={22} url="./About/BackgroundBanner.png">
						<div className="flex flex-col items-center text-center gap-2 ">
							<Typography
								variant="subtitle1"
								color="primary.contrastText"
								className="relative lg:bottom-[2px]"
							>
								Business Slogan
							</Typography>
							<Typography variant="h2" color="primary.contrastText">
								Best responsibility and service
								<br />
								for our customers
							</Typography>
							<Typography variant="subtitle2" color="primary.contrastText" className="mt-3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
								<br /> purus sit amet luctus venenatis
							</Typography>
						</div>
					</BannerBox>
				</Container>
			</section>
			{/* Mission Block */}
			<section className="lg:mt-[6.9rem] mt-20 py-3">
				<Container>
					<div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-[140px]  gap-20 items-start">
						<div>
							<MissionImageFrame>
								<MissionPrimaryImage>
									<img src="./About/About_1.png" alt="About Us" className="" />
								</MissionPrimaryImage>
							</MissionImageFrame>
						</div>
						<div className="order-2 lg:pl-5">
							<Typography
								variant="subtitle1"
								color="secondary"
								className="section__subtitle mb-2 lg:mb-[10px] "
							>
								Our Vision
							</Typography>
							<Typography variant="h2" color="primary.main" className="mb-4">
								Be the best and go international
							</Typography>
							<Typography variant="subtitle2" className=" leading-6 w-full">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
								donec amet. Egestas volutpat facilisi eu libero.
								<br />
								<br />
								Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
							</Typography>
						</div>
						<div className="order-4 flex">
							<MissionSecondaryImage>
								<img src="./About/About_2.png" alt="About Us" />
							</MissionSecondaryImage>
						</div>
						<div className="order-3">
							<Typography variant="subtitle1" color="secondary" className="mb-3">
								Our Mission
							</Typography>
							<Typography variant="h2" color="primary.main" className="mb-3">
								Special & premium service to any clients
							</Typography>
							<Typography variant="subtitle2" className=" leading-6 md:w-[95%]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
								donec amet. Egestas volutpat facilisi eu libero.
								<br />
								<br />
								Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
							</Typography>
						</div>
					</div>
				</Container>
			</section>
			{/* CLient Block */}
			<section className="my-10 pt-3 lg:pt-[18px] pb-3 lg:pr-6 lg:mb-16 mb-10">
				<Container>
					<div className="  flex flex-col items-center justify-center text-center gap-3 py-10">
						<TitleBlock
							subTitle="Our Clients"
							mainTitle="Well-known agencies"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
						/>
					</div>
					<div className=" w-fit mb-20 mt-8  grid grid-cols-2 md:grid-cols-5 items-center justify-center mx-auto gap-7 lg:gap-[60px] lg:relative left-[12px]">
						{Array.from({ length: 5 }).map((_, index) => (
							<ClientLogoContainer key={index}>
								<img
									src={`./About/LOGO${index + 1}.svg`}
									alt={`Client Logo ${index + 1}`}
									className="h-36 w-36 object-contain"
								/>
							</ClientLogoContainer>
						))}
					</div>
				</Container>
			</section>
		</PageWrapper>
	);
};

export default About;
