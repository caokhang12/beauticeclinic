import tw from 'twin.macro';
import TeamBlock from '../components/TeamBlock';
import { Box, Container, Typography } from '@mui/material';
import BannerBox from '../components/Banner';

const About = () => {
	return (
		<div className="relative ">
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
					top: '60%',
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
			<section className="mt-40 pt-9 relative">
				<Container>
					<div className="flex flex-col items-start justify-center h-full gap-3 py-8">
						<Typography variant="subtitle1" className="section__subtitle">
							About
						</Typography>
						<Typography variant="h2" className="section__title md:w-2/3">
							We are a leading beauty clinic that has been around since 2002
						</Typography>
						<Typography
							variant="subtitle2"
							component="p"
							className="section__description leading-6 mt-2 md:w-3/5"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus venenatis
						</Typography>
					</div>
					<Box
						sx={{
							width: '100%',
							position: 'relative',
							height: 'fit-content',
							borderRadius: 15,
							overflow: 'hidden',
							boxShadow: '2px 4px 15px rgba(0, 0, 0, 0.5)',
							my: 4,
						}}
					>
						<Box
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								zIndex: 3,
								cursor: 'pointer',
							}}
						>
							<img src="/About/Play Button.png" alt="" />
						</Box>
						<img
							src="/About/HeroImage.png"
							alt="Leaf"
							className="w-full h-full md:h-auto object-cover"
						/>
					</Box>
				</Container>
			</section>

			{/* Team Block */}
			<div className="my-32 pt-3 pb-6">
				<TeamBlock />
			</div>
			{/* Slogan Block */}
			<section>
				<Container className="relative mt-40">
					<BannerBox pt={21} pb={23} url='"/About/BackgroundBanner.png"'>
						<div className="flex flex-col items-center justify-center text-center gap-2 ">
							<Typography
								variant="subtitle1"
								className="section__subtitle text-white relative lg:bottom-[3px]"
							>
								Business Slogan
							</Typography>
							<Typography variant="h2" className="section__title w-1/2 text-white">
								Best responsibility and service for our customers
							</Typography>
							<Typography
								variant="subtitle2"
								component="p"
								className="section__description leading-6 w-3/5 lg:mt-1 relative lg:top-2 text-white"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
								luctus venenatis
							</Typography>
						</div>
					</BannerBox>
				</Container>
			</section>
			{/* Mission Block */}
			<section className="lg:mt-28 mt-20 py-3">
				<Container>
					<div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-[142px]  gap-20 items-start">
						<div>
							<Box sx={tw`flex justify-center items-end lg:mb-0`}>
								<Box
									sx={{
										position: 'relative',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										top: 25,
										right: {
											xs: 0,
											lg: 7,
										},
									}}
								>
									<img src="/About/About_1.png" alt="About Us" className="" />
								</Box>
							</Box>
						</div>
						<div className="order-2 lg:pl-5">
							<Typography variant="subtitle1" className="section__subtitle mb-2 lg:mb-[10px] ">
								Our Vision
							</Typography>
							<Typography variant="h2" className="section__title mb-4">
								Be the best and go international
							</Typography>
							<Typography
								variant="subtitle2"
								component="p"
								className="tracking-widest section__description leading-6 w-full"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
								donec amet. Egestas volutpat facilisi eu libero.
								<br />
								<br />
								Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
							</Typography>
						</div>
						<div className="order-4 flex justify-start lg:mb-0">
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									position: {
										xs: 'static',
										lg: 'relative',
									},
									top: -15,
									left: {
										xs: 0,
										lg: 20,
									},
								}}
							>
								<img src="/About/About_2.png" alt="About Us" className="max-w-3/4" />
							</Box>
						</div>
						<div className="order-3">
							<Typography variant="subtitle1" className="section__subtitle mb-2">
								Our Mission
							</Typography>
							<Typography variant="h2" className="section__title mb-4">
								Special & premium service to any clients
							</Typography>
							<Typography
								variant="subtitle2"
								component="p"
								className="tracking-widest section__description leading-6 md:w-[95%]"
							>
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
						<Typography variant="subtitle1" className="section__subtitle">
							Our Clients
						</Typography>
						<Typography variant="h2" className="section__title">
							Well-known agencies
						</Typography>
						<Typography
							variant="subtitle2"
							component="p"
							className="section__description mt-2 leading-6"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Typography>
					</div>
					<div className=" w-fit mb-20 mt-8  grid grid-cols-2 md:grid-cols-5 items-center justify-center mx-auto gap- lg:gap-[60px] lg:relative left-[12px]">
						{Array.from({ length: 5 }).map((_, index) => (
							<Box key={index} sx={tw`flex justify-center items-center`}>
								<img
									src={`/About/LOGO${index + 1}.svg`}
									alt={`Client Logo ${index + 1}`}
									className="h-36 w-36 object-contain"
								/>
							</Box>
						))}
					</div>
				</Container>
			</section>
		</div>
	);
};

export default About;
