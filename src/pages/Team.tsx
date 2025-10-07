import { Avatar, Box, Card, Container, Grid, Icon, Rating, Stack, Typography } from '@mui/material';
import BannerBox from '../components/Banner';

const TeamData = [
	{
		name: 'Briyan Nevalli',
		role: 'Surgeon',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
		avatar: '/Home/Team_1.png',
	},
	{
		name: 'Bella sebastian',
		role: 'Dermatologist',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
		avatar: '/Home/Team_2.png',
	},
	{
		name: 'Lilly Adams',
		role: 'Stylist expert',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
		avatar: '/Home/Team_3.png',
	},
];

const Team = () => {
	return (
		<main>
			{/* Team Block */}
			<div className="mt-52 py-5">
				<section className="text-center">
					<div className="container">
						<div className="lg:mr-20">
							<Typography
								variant="subtitle1"
								color="secondary"
								className="section__subtitle"
								component="div"
							>
								Our Team
							</Typography>
							<Typography variant="h2" color="primary.main" className="section__title mt-3">
								We are Professional
							</Typography>
							<Typography
								variant="subtitle2"
								component="p"
								className="section__description text[0.99em] mt-5 lg:ml-2 lg:mt-8"
							>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit ut aliquam.
							</Typography>
						</div>
						<div
							className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-20 mt-28 py-3
"
						>
							{TeamData.map((item, index) => (
								<Card
									key={index}
									sx={{
										borderRadius: 10,
										paddingTop: {
											sx: '40px',
											md: '48px',
											lg: '60px',
											xl: '64px',
										},
										px: 5,
										py: 8,
										border: 'none',
										shadow: 'none',
										boxShadow: 'none',
										textAlign: 'center',
										transform: 'scale(1)',
										transition: 'transform 0.3s ease, box-shadow 0.3s ease',
										'&:hover': {
											boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
											transform: 'scale(1.05)',
										},
									}}
								>
									<Avatar
										src={item.avatar}
										alt={item.name}
										sx={{ mx: 'auto', width: 146, height: 146 }}
									/>
									<Typography
										variant="subtitle1"
										color="secondary"
										className="section__subtitle xl:mt-14 lg:mt-10 md:mt-8 mt-9"
									>
										{item.role}
									</Typography>
									<h3 className="card__title xl:mt-3 lg:mt-2 mt-1">{item.name}</h3>
									<p className="card__description xl:mt-5 leading-4.5 lg:mt-4 mt-3 ">
										{item.description}
									</p>
									<div className="flex justify-around xl:mt-14 mt-8">
										<a href="#" className="expert-card__social-link">
											<img src="/Home/twitter.svg" alt="Twitter" />
										</a>
										<a href="#" className="expert-card__social-link">
											<img src="facebook-f.png" alt="Facebook" />
										</a>
										<a href="#" className="expert-card__social-link">
											<img src="/Home/instagram.svg" alt="Facebook" />
										</a>
									</div>
								</Card>
							))}
						</div>
					</div>
				</section>
			</div>
			{/* Assistance Block */}
			<section className="lg:mt-36 mt-28 mb-20 lg:mb-28 pt-2 lg:pt-4 ">
				<Container>
					<div className="flex flex-col items-center justify-center text-center gap-3 mb-24">
						<Typography variant="subtitle1" color="secondary" className="section__subtitle">
							Assistance Team
						</Typography>
						<Typography variant="h2" color="primary.main" className="section__title">
							Meet the pro assistance
						</Typography>
						<Typography
							variant="subtitle2"
							component="p"
							className="section__description tracking-widest mt-4 lg:ml-1"
						>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit ut aliquam.
						</Typography>
					</div>
					<Grid
						container
						rowGap={{
							xs: 6,
							md: 8,
							lg: 10,
						}}
						spacing={{ xl: 9 }}
						sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', pt: '19px' }}
					>
						<Grid size={{ xs: 12, md: 5 }}>
							<img src="/Team/Assistance_1.png" alt="" />
						</Grid>
						<Grid size={{ xs: 12, md: 7 }}>
							<div className="flex flex-col px-16 pt-5 py-6 lg:pt-8 lg:py-10 h-full">
								<h2 className="card__title">
									Lina Gustav /<span className="italic font-normal text-sm "> Pharmacist</span>
								</h2>
								<Typography
									variant="subtitle2"
									component="p"
									className="section__description leading-6  mt-5  w-4/5"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat
									pulvinar euismod neque.
								</Typography>
							</div>
						</Grid>
						<Grid size={{ xs: 12, md: 5 }}>
							<img src="/Team/Assistance_2.png" alt="" />
						</Grid>
						<Grid size={{ xs: 12, md: 7 }}>
							<div className="flex flex-col px-16 pt-5 py-6 lg:pt-7 lg:py-10 h-full">
								<h2 className="card__title">
									Adam White /<span className="italic font-normal text-sm "> Finance</span>
								</h2>
								<Typography
									variant="subtitle2"
									component="p"
									className="section__description leading-6  mt-5  w-4/5"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat
									pulvinar euismod neque.
								</Typography>
							</div>
						</Grid>
						<Grid size={{ xs: 12, md: 5 }}>
							<img src="/Team/Assistance_3.png" alt="" />
						</Grid>
						<Grid size={{ xs: 12, md: 7 }}>
							<div className="flex flex-col px-16 pt-5 py-6 lg:pt-7 lg:py-10 h-full">
								<h2 className="card__title">
									Jane Doe /<span className="italic font-normal text-sm "> Marketer</span>
								</h2>
								<Typography
									variant="subtitle2"
									component="p"
									className="section__description leading-6  mt-5  w-4/5"
								>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat
									pulvinar euismod neque.
								</Typography>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>
			{/* Banner Block */}
			<section className="w-full h-full relative pt-3">
				<Container className="relative ">
					<BannerBox pt={25} pb={23} url='"/Team/BackgroundBanner.png"'>
						<Stack
							sx={{
								textAlign: 'center',
								alignItems: 'center',
								gap: 1,
								position: 'relative',
								bottom: {
									xs: 0,
									md: 10,
									lg: 20,
								},
							}}
						>
							<Typography
								variant="h2"
								className="section__title md:w-[45%] text-white relative lg:pl-5"
							>
								Customer satisfaction is our main goal
							</Typography>
							<Typography
								variant="subtitle2"
								component="p"
								className="section__description md:w-[57%] leading-6"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
								luctus venenatis
							</Typography>
						</Stack>
					</BannerBox>
				</Container>
			</section>
			{/* Reviews Block */}
			<section>
				<Container className="mt-16 lg:mt-24 py-5">
					<div className="flex flex-col items-center justify-center text-center gap-3">
						<Typography variant="subtitle1" color="secondary" className="section__subtitle">
							Our Testimonials
						</Typography>
						<Typography variant="h2" color="primary.main" className="section__title">
							What our customer says
						</Typography>
						<Typography
							variant="subtitle2"
							component="p"
							className="section__description tracking-[0.095em] mt-[18px]"
						>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit ut aliquam.
						</Typography>
					</div>
					<Box sx={{ mt: 8.5, mb: 4, justifyContent: 'center', display: 'flex' }}>
						<Avatar alt="" src="/Team/Avatar.png" sx={{ width: 73, height: 73 }} />
					</Box>
					<Stack
						flexDirection="row"
						justifyContent={'center'}
						sx={{
							textAlign: 'center',
							alignItems: 'center',
							gap: {
								xs: 2,
								sm: 6,
								md: 11,
							},
						}}
						spacing={1}
					>
						<Icon sx={{ position: 'relative', bottom: 18, left: 3 }}>
							<img src="/Team/arrow-left.svg" alt="" />
						</Icon>
						<Typography
							variant="subtitle2"
							component="p"
							className="section__description pt-1 leading-[1.3]
						tracking-[0.027em] w-[49%] "
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt
							laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum
							elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus
							volutpat in turpis gravida blandit.
						</Typography>
						<Icon sx={{ position: 'relative', bottom: 20, right: 3, transform: 'rotate(180deg)' }}>
							<img src="/Team/arrow-left.svg" alt="" />
						</Icon>
					</Stack>
					<Box sx={{ mt: 4, ml: 1, display: 'flex', justifyContent: 'center' }}>
						<Rating
							defaultValue={5}
							sx={{
								justifyContent: 'center',
								'& .MuiRating-iconFilled': {
									color: 'var(--color-accent-warning)',
								},
								'& .MuiRating-icon': {
									marginRight: '5px',
									fontSize: '31px',
								},
							}}
							precision={0.5}
						/>
					</Box>
				</Container>
			</section>
		</main>
	);
};

export default Team;
