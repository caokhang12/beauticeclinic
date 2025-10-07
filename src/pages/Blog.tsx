import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	IconButton,
	InputBase,
	Pagination,
	Stack,
	Typography,
} from '@mui/material';
import BannerBox from '../components/Banner';
import { PinkButton } from '../components/PinkButton';
import BubbleBackground from '../components/BubbleBg';

const BlogData = [
	{
		id: 1,
		image: '/Blog/Blog_1.png',
		category: 'Consultation',
		title: 'How much does a consultation cost at our clinic?',
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
	},
	{
		id: 2,
		image: '/Blog/Blog_2.png',
		category: 'Beauty',
		title: "Watch out! don't choose the wrong beauty product",
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
	},
	{
		id: 3,
		image: '/Blog/Blog_3.png',
		category: 'Treatments',
		title: 'About skin care you need to know',
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
	},
];

const Blog = () => {
	return (
		<div className="relative mt-32 py-3">
			<BubbleBackground
				image="/BubbleMid1.png"
				top="33%"
				right={0}
				justify="flex-end"
				imageProps={{ 'aria-hidden': true }}
			/>
			<BubbleBackground
				image="/BubbleMid1.png"
				top="60%"
				right={0}
				flipX
				imageProps={{ 'aria-hidden': true }}
			/>
			{/* Banner Block */}
			<Container className="relative lg:mt- ">
				<BannerBox
					pt={{ xs: 5, md: 10, lg: 15 }}
					pb={{ xs: 5, md: 10, lg: 15 }}
					url='"/Blog/BackgroundBanner.png"'
				>
					<Stack direction={'row'} alignItems="center" justifyContent="space-between" gap={3}>
						<Typography variant="h2" color="primary.contrastText">
							Blog
						</Typography>
						<Typography variant="subtitle2" color="primary.contrastText" className="mt-1">
							Home • Blog
						</Typography>
					</Stack>
				</BannerBox>
			</Container>
			{/* Blog Block */}
			<Container>
				<Grid
					width="100%"
					container
					spacing={{ xs: 2, md: 3, lg: 4.5 }}
					className="mt-20 py-7"
					sx={{
						width: '100%',
						justifyContent: 'center',
					}}
				>
					<Grid
						size={{ xs: 12, md: 8 }}
						sx={{
							pr: { xs: 0, md: 2 },
						}}
					>
						{/* Blog List  */}
						<Grid container spacing={{ xs: 5, md: 10, lg: 12, xl: 16.5 }}>
							{BlogData.map((blog) => (
								<Grid size={{ xs: 12, sm: 4, md: 12 }} key={blog.id}>
									<Card
										sx={{
											borderRadius: 14,
											boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
											overflow: 'hidden',
										}}
									>
										<CardMedia component="img" image={blog.image} alt="consultation" />

										<CardContent
											sx={{
												px: { xs: 3, md: 5, lg: 9.5 },
												pt: { xs: 3, md: 5, lg: 6.5 },
											}}
										>
											<Typography
												variant="subtitle1"
												color="secondary"
												className="flex items-center gap-8 lg:gap-[14px] mt-[6px]"
											>
												<span>
													<img
														src="/Blog/Document.svg"
														alt="Document Icon"
														className="relative tracking-tight "
													/>
												</span>
												{blog.category}
											</Typography>

											<Typography variant="h2" color="primary" className="lg:mt-4 md:mt-3 sm:mt-2 ">
												{blog.title}
											</Typography>

											<Typography
												variant="subtitle2"
												component="p"
												className=" lg:mt-5 md:mt-4 sm:mt-3 sm:line-clamp-1 md:line-clamp-4
												lg:line-clamp-none"
											>
												{blog.description}
											</Typography>

											<div className="mt-4 lg:mt-[30px] mb-8 lg:mb-16 pt-1 pb-3">
												<PinkButton
													sx={{
														px: { xs: 2.8, md: 8 },
														py: { xs: 1.6, md: 2.1 },
														fontSize: { xs: 13, md: 16 },
														position: 'relative',
														right: 2,
														'&::before': {
															content: '""',
															position: 'absolute',
															right: { xs: 18, md: 50 },
															top: '50%',
															transform: 'translateY(-50%)',
															width: 0,
															height: 0,
															borderLeft: '8px solid var(--color-text-inverse)',
															borderTop: '8px solid transparent',
															borderBottom: '8px solid transparent',
														},
													}}
													variant="contained"
												>
													Read More
												</PinkButton>
											</div>
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid order={{ xs: -1, md: 0 }} pl={1} size={{ xs: 12, md: 4 }} sx={{}}>
						{/* Search Box */}
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								borderRadius: '9999px',
								overflow: 'hidden',
								boxShadow: 'var(--shadow-blog)',

								bgcolor: 'white',
							}}
						>
							{/* Input */}
							<InputBase
								placeholder="Search here ..."
								sx={{
									flex: 1,
									fontSize: 16,

									height: 65,
									paddingLeft: 3,
									fontFamily: 'Poppins, sans-serif',
									letterSpacing: '0.1em',
									'&::placeholder': {
										fontSize: 14,
										color: 'var(--color-text-body)',
									},
								}}
							/>

							{/* Button */}
							<IconButton
								sx={{
									bgcolor: 'var(--color-secondary-strong)',
									borderRadius: 0,
									borderTopRightRadius: '9999px',
									borderBottomRightRadius: '9999px',
									color: 'white',
									px: 3.2,
									py: 2.5,
									'&:hover': { bgcolor: 'var(--color-secondary-stronger)' },
								}}
							>
								<img src="/Blog/search.svg" alt="Search" />
							</IconButton>
						</Box>
						{/* Categories Box */}
						<Stack
							spacing={{
								xs: 3,
								md: 6,
								lg: 8,
								xl: 11,
							}}
							className="lg:mt-20 mt-10"
						>
							{/* Recent Posts */}
							<Box
								sx={{
									pl: {
										xs: 4,
										md: 5,
										lg: 6,
									},
									pr: 1,
									pt: 7,
									pb: 8,
									boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
									borderRadius: 4,
								}}
							>
								<Typography
									variant="subtitle1"
									color="secondary"
									className="section__subtitle mb-6 text-secondary"
								>
									Recent Posts
								</Typography>
								<Stack spacing={2.5} sx={{ mt: 3.2 }}>
									{BlogData.map((blog, index) => (
										<Box
											key={index}
											sx={{
												display: 'flex',
												gap: 2.5,
												flexDirection: { xs: 'column', sm: 'row' },
											}}
										>
											<Box
												sx={{
													height: {
														lg: 'full-width',
														width: 'full-width',
													},
													borderRadius: 2,
													overflow: 'hidden',
													flexShrink: 1,
												}}
											>
												<img
													src={`/Blog/Recent_${index + 1}.png`}
													alt={blog.title}
													style={{
														borderRadius: 8,
													}}
												/>
											</Box>
											<Box sx={{ flex: 1, ml: 0.5 }}>
												<p className="text-primary font-semibold text-sm tracking-widest">
													01 jan 2021
												</p>
												<h3 className="md:mt-2 text-xs  leading-5 tracking-widest">
													Lorem ipsum dolor sit amet, consectetur adipiscing.
												</h3>
											</Box>
										</Box>
									))}
								</Stack>
							</Box>
							{/* Categories */}
							<Box
								sx={{
									pl: {
										xs: 4,
										md: 5,
										lg: 6,
									},
									py: {
										xs: 5.5,
										md: 6,
										lg: 6.5,
									},
									boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
									borderRadius: 4,
								}}
							>
								<Typography
									variant="subtitle1"
									color="secondary"
									className="section__subtitle mb-5 text-secondary"
								>
									Categories
								</Typography>
								<Stack spacing={0}>
									{['Consultation', 'Beauty', 'Treatments', 'News'].map((category, index) => (
										<Box
											key={index}
											sx={{
												display: 'flex',
											}}
										>
											<Typography
												sx={{
													fontSize: 14,
													fontWeight: 500,
													letterSpacing: '0.1em',
													lineHeight: 1.8,
													color: 'var(--color-text-body)',
													cursor: 'pointer',
													'&:hover': {
														color: 'var(--color-primary)',
													},
												}}
											>
												{category}
											</Typography>
										</Box>
									))}
								</Stack>
							</Box>
							{/* Cloud Tags */}
							<Box
								sx={{
									pl: {
										xs: 4,
										md: 4.5,
										lg: 5,
									},
									py: {
										xs: 4.5,
										md: 5.5,
										lg: 6.5,
									},
									boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
									borderRadius: 4,
								}}
							>
								<Typography
									variant="subtitle1"
									color="secondary"
									className="section__subtitle lg:ml-1.5 mb-5 text-secondary"
								>
									Cloud Tags
								</Typography>
								<Grid
									container
									direction="row"
									flexWrap="wrap"
									gap={1.3}
									rowGap={2}
									sx={{ px: 0.5 }}
								>
									{[
										'beauty',
										'cute',
										'skin',
										'glow',
										'style',
										'clinic',
										'style',
										'great',
										'cute',
									].map((tag, index) => (
										<Grid
											key={index}
											sx={{
												color: 'var(--color-text-body)',

												fontSize: 14,
												fontWeight: 500,
												letterSpacing: '0.1em',
												px: 2.5,
												py: 0.5,
												maxWidth: '82px',
												borderRadius: 7,
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
												cursor: 'pointer',
												'&:hover': {
													bgcolor: 'var(--color-primary)',
													color: 'white',
												},
											}}
										>
											{tag}
										</Grid>
									))}
								</Grid>
							</Box>
							{/* Social Media */}
							<Box
								sx={{
									pl: {
										xs: 4,
										md: 5,
										lg: 6,
									},
									py: {
										xs: 5.5,
										md: 6,
										lg: 7,
									},
									boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
									borderRadius: 4,
								}}
							>
								<Typography
									variant="subtitle1"
									color="secondary"
									className="section__subtitle  text-secondary"
								>
									Social Connect
								</Typography>
								<Stack
									direction="row"
									spacing={1.5}
									className="relative lg:top-1 lg:right-2 mt-6 flex-wrap"
								>
									{[
										{ icon: '/Blog/facebook.svg', alt: 'Facebook' },
										{ icon: '/Blog/Twitter.svg', alt: 'Twitter' },
										{ icon: '/Blog/Instagram.svg', alt: 'Instagram' },

										{ icon: '/Blog/Linkedin.svg', alt: 'Linkedin' },
									].map((social, index) => (
										<img
											key={index}
											src={social.icon}
											alt={social.alt}
											style={{ cursor: 'pointer' }}
											className="hover:opacity-70 transition-opacity
											 rounded-full w-fit flex items-center justify-center p-1"
										/>
									))}
								</Stack>
							</Box>
						</Stack>
					</Grid>
				</Grid>
			</Container>
			{/* Pagination Block */}
			<div className="flex justify-center pl-5 mt-16 py-3 mb-16 lg:mb-[92px]">
				<Pagination
					hideNextButton
					hidePrevButton
					count={3}
					size="medium"
					sx={{
						gap: 20,
						'& .MuiPaginationItem-root': {
							marginX: 1.2,
							fontSize: 16,
						},
						'& .MuiPaginationItem-root.Mui-selected': {
							backgroundColor: 'var(--color-secondary)',
							color: 'white',
							paddingX: 0,
						},
					}}
				/>
			</div>
		</div>
	);
};

export default Blog;
