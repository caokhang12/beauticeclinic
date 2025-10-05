import { Box, Container, Grid, Typography } from '@mui/material';
import { PinkButton } from '../components/PinkButton';
import BannerBox from '../components/Banner';

const Gallery = () => {
	return (
		<div>
			<Box
				sx={{
					position: 'absolute',
					top: '13%',
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
					top: '50%',
					right: 0,
					width: '100%',
					height: 'fit-content',
					display: 'flex',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					zIndex: -1,
					pointerEvents: 'none',
				}}
			>
				<img src="/BubbleMid1.png" className="transform scale-x-[-1]" alt="" />
			</Box>
			{/* Hero Block */}
			<section className="mt-32 mb-28 pt-9 lg:mt-44 lg:pt-[42px] relative">
				<Container>
					<div className="pt-3">
						<Typography variant="subtitle1" className="section__subtitle ">
							Our Gallery
						</Typography>
						<Grid container spacing={{ xs: 2, md: 3, lg: 10 }} className="mt-1">
							<Grid size={{ xs: 12, md: 6, lg: 7 }}>
								<Typography variant="h2" className="section__title lg:mt-2">
									Check out the collection pictures from our clinic
								</Typography>
							</Grid>
							<Grid size={{ xs: 12, md: 6, lg: 5 }}>
								<Typography
									variant="subtitle2"
									component="p"
									className="section__description leading-6 mt-3 lg:mt-2"
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
							lg: 4.56,
						}}
						rowGap={4.8}
						className="lg:mt-16 my-10 lg:py-6 py-2"
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
					<div className="mt-11 w-3/5">
						<Typography
							variant="subtitle2"
							component="p"
							className="leading-6 section__description sm:text-sm md:text-base"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim,
							<span className="font-semibold text-secondary"> our teams</span>.
						</Typography>
					</div>
				</Container>
			</section>
			{/* Video Block */}
			<section className="mt-32 mb-28 ">
				<Container className="relative z-10 lg:bottom-1">
					<BannerBox
						pt={{ xs: 10, md: 15, lg: 20 }}
						pb={{ xs: 10, md: 15, lg: 20 }}
						url="/Gallery/BackgroundVideo.png"
						className=" flex justify-center items-center flex-col "
					>
						<Typography variant="h2" className="section__title pt-2 text-white">
							Watch the video tour
						</Typography>
						<Typography
							variant="subtitle2"
							component="div"
							className="section__description leading-7 mt-4 md:w-1/2 tracking-widest text-center text-white"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus venenatis
						</Typography>
						{/* Overlay Play Button */}
						<img
							src="/Gallery/Play Button.png"
							alt="Video Thumbnail"
							className="w-fit h-auto mt-6 lg:mt-12"
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
								<Typography variant="subtitle1" className="section__subtitle">
									Get The Quota
								</Typography>
								<Typography variant="h2" className="section__title lg:mt-3">
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
								<PinkButton sx={{ py: 2.7, px: 6.6 }}>Make an Appointment</PinkButton>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>
		</div>
	);
};

export default Gallery;
