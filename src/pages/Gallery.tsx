import { Container, Grid, Typography } from '@mui/material';
import tw, { styled } from 'twin.macro';
import { PinkButton } from '../components/PinkButton';
import BannerBox from '../components/Banner';
import BubbleBackground from '../components/BubbleBg';

const PageWrapper = tw.div`relative`;
const HeroSection = tw.section`relative mt-32 mb-28 pt-9 lg:mt-44 lg:pt-[42px]`;
const HeroIntro = tw.div`pt-3`;
const HeroHeadingGrid = styled(Grid)(() => [tw`lg:mt-3`]);
const HeroDescription = styled(Typography)(() => [tw`leading-6 mt-3 lg:mt-[0.7rem]`]);
const GalleryGrid = styled(Grid)(() => [tw`lg:mt-16 my-10 lg:pt-6 py-5`]);
const GallerySummaryWrapper = tw.div`mt-8 lg:w-3/5`;
const GallerySummaryText = styled(Typography)(() => [tw`leading-6`]);
const GalleryImage = styled.img(() => [tw`w-full h-auto`]);

const VideoSection = tw.section`mt-24 lg:mt-[130px] mb-28`;
const VideoContainer = styled(Container)(() => [tw`relative z-10 lg:bottom-1`]);
const VideoContent = tw.div`flex justify-center items-center flex-col`;
const VideoTitle = styled(Typography)(() => [tw`pt-3`]);
const VideoDescription = styled(Typography)(() => [tw`mt-5 md:w-1/2 leading-6 text-center`]);
const VideoPlayButton = styled.img(() => [tw`w-fit h-auto mt-6 lg:mt-12`]);

const CallSection = tw.section`mt-28 mb-40 pb-[6px] pt-1`;
const CallLayout = styled(Grid)(() => [tw``]);
const CallTextWrapper = tw.div`flex flex-col justify-center h-full`;
const CallDescription = styled(Typography)(() => [tw`leading-6 mt-3 lg:mt-[22px] w-11/12`]);
const CallButtonWrapper = tw.div`flex items-center justify-center h-full lg:pl-[19px]`;
const AppointmentButton = styled(PinkButton)(() => [tw`px-[3.2rem] py-3 lg:py-4`]);

const Gallery = () => {
	return (
		<PageWrapper>
			<BubbleBackground image="./BubbleMid1.png" top="13%" right={0} justifyContent="flex-end" />
			<BubbleBackground image="./BubbleMid1.png" top="50%" left={0} flipX />
			{/* Hero Block */}
			<HeroSection>
				<Container>
					<HeroIntro>
						<Typography variant="subtitle1" color="secondary">
							Our Gallery
						</Typography>
						<Grid container spacing={{ xs: 2, md: 3, lg: 10.2 }}>
							<HeroHeadingGrid size={{ xs: 12, md: 6, lg: 7 }}>
								<Typography variant="h2" color="primary.main">
									Check out the collection pictures from our clinic
								</Typography>
							</HeroHeadingGrid>
							<Grid size={{ xs: 12, md: 6, lg: 5 }}>
								<HeroDescription variant="subtitle2" component="p">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
									luctus venenatis
								</HeroDescription>
							</Grid>
						</Grid>
					</HeroIntro>
					<GalleryGrid
						container
						spacing={{
							xs: 1,
							md: 3,
							lg: 4.5,
						}}
						rowGap={4}
					>
						{Array.from({ length: 9 }).map((_, index) => (
							<Grid size={4} key={index}>
								<div>
									<GalleryImage
										src={`./Gallery/Hero_${index + 1}.png`}
										alt={`Gallery Image ${index + 1}`}
									/>
								</div>
							</Grid>
						))}
					</GalleryGrid>
					<GallerySummaryWrapper>
						<GallerySummaryText variant="subtitle2" component="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim,
							<span className="font-semibold text-primary"> our teams</span>.
						</GallerySummaryText>
					</GallerySummaryWrapper>
				</Container>
			</HeroSection>
			{/* Video Block */}
			<VideoSection>
				<VideoContainer>
					<BannerBox
						pt={{ xs: 10, md: 15, lg: 19.5 }}
						pb={{ xs: 10, md: 15, lg: 20.5 }}
						url="./Gallery/BackgroundVideo.png"
					>
						<VideoContent>
							<VideoTitle variant="h2" color="primary.contrastText">
								Watch the video tour
							</VideoTitle>
							<VideoDescription variant="subtitle2" color="primary.contrastText">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
								luctus venenatis
							</VideoDescription>
							{/* Overlay Play Button */}
							<VideoPlayButton src="./Gallery/Play Button.png" alt="Video Thumbnail" />
						</VideoContent>
					</BannerBox>
				</VideoContainer>
			</VideoSection>
			{/* Quota Block */}

			<CallSection>
				<Container>
					<CallLayout container spacing={6}>
						<Grid size={{ xs: 12, md: 7 }}>
							<CallTextWrapper>
								<Typography variant="subtitle1" color="secondary">
									Get The Quota
								</Typography>
								<Typography variant="h2" color="primary.main" className="lg:mt-3">
									Want to be handled by our professional team immediately?
								</Typography>
								<CallDescription variant="subtitle2" component="p">
									Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus
									enim.
								</CallDescription>
							</CallTextWrapper>
						</Grid>
						<Grid size={{ xs: 12, md: 5 }}>
							<CallButtonWrapper>
								<AppointmentButton>Make an Appointment</AppointmentButton>
							</CallButtonWrapper>
						</Grid>
					</CallLayout>
				</Container>
			</CallSection>
		</PageWrapper>
	);
};

export default Gallery;
