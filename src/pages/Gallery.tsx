import { Container, Grid, Typography } from '@mui/material';
import { PinkButton } from '../components/PinkButton';
import BannerBox from '../components/Banner';
import BubbleBackground from '../components/BubbleBg';

const Gallery = () => {
	return (
		<div className="relative">
			<BubbleBackground
				image="/BubbleMid1.png"
				top="13%"
				right={0}
				justify="flex-end"
				imageProps={{ 'aria-hidden': true }}
			/>
			<BubbleBackground
				image="/BubbleMid1.png"
				top="50%"
				right={0}
				flipX
				imageProps={{ 'aria-hidden': true }}
			/>
			{/* Hero Block */}
			<section className="mt-32 mb-28 pt-9 lg:mt-44 lg:pt-[42px] relative">
				<Container>
					<div className="pt-3">
						<Typography variant="subtitle1" color="secondary">
							Our Gallery
						</Typography>
						<Grid container spacing={{ xs: 2, md: 3, lg: 10.2 }}>
							<Grid size={{ xs: 12, md: 6, lg: 7 }} className="lg:mt-3">
								<Typography variant="h2" color="primary.main">
									Check out the collection pictures from our clinic
								</Typography>
							</Grid>
							<Grid size={{ xs: 12, md: 6, lg: 5 }}>
								<Typography
									variant="subtitle2"
									component="p"
									className="leading-6 mt-3 lg:mt-[0.7rem]"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
									luctus venenatis
								</Typography>
							</Grid>
						</Grid>
					</div>
					<Grid
						container
						spacing={{
							xs: 1,
							md: 3,
							lg: 4.5,
						}}
						rowGap={4}
						className="lg:mt-16 my-10 lg:pt-6 py-5"
					>
						{Array.from({ length: 9 }).map((_, index) => (
							<Grid size={4} key={index}>
								<div>
									<img
										src={`/Gallery/Hero_${index + 1}.png`}
										alt={`Gallery Image ${index + 1}`}
										className="w-full h-auto"
									/>
								</div>
							</Grid>
						))}
					</Grid>
					<div className="mt-8 w-3/5">
						<Typography variant="subtitle2" component="p" className="leading-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim,
							<span className="font-semibold text-primary"> our teams</span>.
						</Typography>
					</div>
				</Container>
			</section>
			{/* Video Block */}
			<section className="mt-24 lg:mt-[130px] mb-28 ">
				<Container className="relative z-10 lg:bottom-1">
					<BannerBox
						pt={{ xs: 10, md: 15, lg: 19.5 }}
						pb={{ xs: 10, md: 15, lg: 20.5 }}
						url="/Gallery/BackgroundVideo.png"
						className=" flex justify-center items-center flex-col "
					>
						<Typography variant="h2" color="primary.contrastText" className=" pt-3">
							Watch the video tour
						</Typography>
						<Typography
							variant="subtitle2"
							color="primary.contrastText"
							className="mt-5 md:w-1/2 leading-6 text-center "
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus venenatis
						</Typography>
						{/* Overlay Play Button */}
						<img
							src="/Gallery/Play Button.png"
							alt="Video Thumbnail"
							className="w-fit h-auto mt-6 lg:mt-12 "
						/>
					</BannerBox>
				</Container>
			</section>
			{/* Quota Block */}

			<section className="mt-28 mb-40 pb-[6px] pt-1 ">
				<Container>
					<Grid container spacing={6}>
						<Grid size={{ xs: 12, md: 7 }}>
							<div className="flex flex-col justify-center h-full">
								<Typography variant="subtitle1" color="secondary">
									Get The Quota
								</Typography>
								<Typography variant="h2" color="primary.main" className="section__title lg:mt-3">
									Want to be handled by our professional team immediately?
								</Typography>
								<Typography
									variant="subtitle2"
									component="p"
									className="section__description leading-6 mt-3 lg:mt-[22px] w-11/12"
								>
									Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus
									enim.
								</Typography>
							</div>
						</Grid>
						<Grid size={{ xs: 12, md: 5 }}>
							<div className="flex items-center justify-center h-full  lg:pl-[19px]">
								<PinkButton className="px-[3.2rem]">Make an Appointment</PinkButton>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>
		</div>
	);
};

export default Gallery;
