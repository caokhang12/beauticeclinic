import { Avatar, Card, Grid, Typography } from '@mui/material';

const TeamData = [
	{
		name: 'Briyan Nevalli',
		role: 'Surgeon',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.',
		avatar: '/Home/Team_1.png',
	},
	{
		name: 'Bella sebastian',
		role: 'Dermatologist',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.',
		avatar: '/Home/Team_2.png',
	},
	{
		name: 'Lilly Adams',
		role: 'Stylist expert',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.',
		avatar: '/Home/Team_3.png',
	},
];

const TeamBlock = () => {
	return (
		<section>
			<Grid container spacing={10} justifyContent="center" alignItems={'center'}>
				{TeamData.map((item, index) => (
					<Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
						<Card
							sx={{
								borderRadius: 10,
								paddingTop: {
									sx: '40px',
									md: '48px',
									lg: '60px',
									xl: '64px',
								},
								backgroundColor: 'none',
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
									transform: 'scale(1.3)',
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
								className="pt-[0.35rem] pb-1 xl:mt-12 lg:mt-10 md:mt-8 mt-9"
							>
								{item.role}
							</Typography>
							<Typography
								color="primary.main"
								variant="h6"
								className="card__title xl:mt-3 lg:mt-2 mt-1"
							>
								{item.name}
							</Typography>
							<Typography variant="body1" className="xl:mt-5 lg:mt-5 mt-3">
								{item.description}
							</Typography>
							<div className="flex justify-around xl:mt-14 pt-1 mt-9">
								<a href="#" className="expert-card__social-link">
									<img src="/Home/twitter.svg" alt="Facebook" />
								</a>
								<a href="#" className="expert-card__social-link">
									<img src="facebook-f.png" alt="Facebook" />
								</a>
								<a href="#" className="expert-card__social-link">
									<img src="/Home/instagram.svg" alt="Facebook" />
								</a>
							</div>
						</Card>
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default TeamBlock;
