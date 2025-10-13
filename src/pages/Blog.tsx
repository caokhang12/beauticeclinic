import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	IconButton,
	Pagination,
	Stack,
	Typography,
} from '@mui/material';
import tw, { styled } from 'twin.macro';
import BannerBox from '../components/Banner';
import { PinkButton } from '../components/PinkButton';
import BubbleBackground from '../components/BubbleBg';
import { InputBaseCustom } from '../components/ContactForm';

const BlogData = [
	{
		id: 1,
		image: './Blog/Blog_1.png',
		category: 'Consultation',
		title: 'How much does a consultation cost at our clinic?',
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
	},
	{
		id: 2,
		image: './Blog/Blog_2.png',
		category: 'Beauty',
		title: "Watch out! don't choose the wrong beauty product",
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
	},
	{
		id: 3,
		image: './Blog/Blog_3.png',
		category: 'Treatments',
		title: 'About skin care you need to know',
		description:
			'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
	},
];

const categories = ['Consultation', 'Beauty', 'Treatments', 'News'];
const cloudTags = ['beauty', 'cute', 'skin', 'glow', 'style', 'clinic', 'style', 'great', 'cute'];
const socialIcons = [
	{ icon: './Blog/facebook.svg', alt: 'Facebook' },
	{ icon: './Blog/Twitter.svg', alt: 'Twitter' },
	{ icon: './Blog/Instagram.svg', alt: 'Instagram' },
	{ icon: './Blog/Linkedin.svg', alt: 'Linkedin' },
];

// Layout wrappers
const RootWrapper = styled(Box)(() => [tw`relative mt-32 py-3`]);
const PaginationWrapper = styled(Box)(() => [
	tw`flex justify-center pl-5 mt-16 py-2 pb-4 mb-16 lg:mb-[92px]`,
]);
const BannerHeader = styled(Stack)(() => [tw`flex-row items-center justify-between gap-3`]);
const BlogGridWrapper = styled(Grid)(() => [tw`w-full mt-20 py-7 flex `]);
const BlogMainCol = styled(Grid)(() => [tw`lg:pr-4`]);
const BlogSidebarCol = styled(Grid)(() => [tw``]);

// Card & content
const BlogCardWrapper = styled(Card)(() => [
	tw`overflow-hidden`,
	{
		borderRadius: 38,
		boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
	},
]);

const BlogCardContent = styled(CardContent)(() => [
	tw`pt-6 px-6 md:(pt-10 px-10) lg:(pt-[52px] px-[76px])`,
]);

const BlogCategory = styled(Typography)(() => [tw`flex items-center gap-8 mt-[6px] lg:gap-[14px]`]);

const BlogTitle = styled(Typography)(() => [tw`mt-2 md:mt-3 lg:mt-4`]);
const BlogDescription = styled(Typography)(() => [tw`mt-3 md:mt-4 lg:mt-5`]);

const ReadMoreWrapper = styled('div')(() => [tw`mt-4 lg:mt-[30px] md:mb-8 lg:mb-16 pt-1 md:pb-3`]);
const ReadMoreButton = styled(PinkButton)(() => [
	tw`relative px-[3.85rem] py-3 lg:py-4`,
	{
		'&::after': {
			content: '""',
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			width: 0,
			height: 0,
			right: '2.8rem',
			borderTop: '8px solid transparent',
			borderBottom: '8px solid transparent',
			borderLeft: '8px solid currentColor',
			pointerEvents: 'none',
		},
	},
]);

// Sidebar shared section base
const SidebarSection = styled(Box)(() => [
	tw`rounded-lg`,
	{ boxShadow: '0px 10px 30px rgba(0,0,0,0.08)' },
]);

const RecentPostsSection = styled(SidebarSection)(() => [
	tw`pt-[53px] pb-16 pl-8 md:pl-10 lg:pl-[2.9rem]`,
]);

const CategoriesSection = styled(SidebarSection)(() => [
	tw`pl-8 pt-11 pb-9 md:(pl-10 pt-12 pb-[52px]) lg:pl-[2.9rem]`,
]);

const CloudTagsSection = styled(SidebarSection)(() => [
	tw`pl-9 pt-9 pb-[52px] md:pt-[3.1rem]  lg:(pl-[2.6rem] pr-11)`,
]);

const SocialSection = styled(SidebarSection)(() => [
	tw`pl-8 pt-12 pb-14 md:pt-[3.8rem] md:pl-10 lg:pl-[2.9rem]`,
]);

const SearchBarWrapper = styled(Box)(() => [tw`flex items-stretch w-full border rounded-full`]);
const InputBaseStyle = styled(InputBaseCustom)(() => [tw`border-l rounded-l-full flex-1`]);
const SearchButton = styled(IconButton)(() => [tw`px-[1.6rem] bg-primary rounded-r-full border-r`]);

const SidebarStack = styled(Stack)(() => [tw`mt-10 lg:mt-20`]);

const TagItem = styled(Grid)(() => [
	tw`flex justify-center items-center cursor-pointer rounded-[28px] px-2.5 py-0.5 max-w-[82px] min-w-[82px] font-medium tracking-[0.1em] text-[14px] hover:bg-secondary hover:text-white`,
]);

const SocialIconsRow = styled(Stack)(() => [tw`relative  lg:right-2 mt-6 flex-row flex-wrap`]);

// Recent posts helper components
const RecentPostsTitle = styled(Typography)(() => [tw`mb-7`]);
const RecentPostsList = styled(Stack)(() => [tw`mt-[26px]`]);
const RecentPostItem = styled(Box)(() => [tw`flex  sm:flex-row gap-[22px]`]);
const RecentPostImageWrapper = styled(Box)(() => [tw`overflow-hidden shrink rounded-lg`]);
const RecentPostDate = styled(Typography)(() => [tw`mb-2.5 tracking-wider text-secondary`]);
const RecentPostExcerpt = styled(Typography)(() => [
	tw`md:mt-1.5 text-xs leading-[1.1rem] tracking-[0.1em]`,
]);

// Categories
const CategoriesTitle = styled(Typography)(() => [tw`mb-5 text-primary`]);
const CategoryRow = styled(Box)(() => [tw`flex`]);
const CategoryItem = styled(Typography)(() => [
	tw`text-[14px] mb-3 font-medium tracking-[0.1em] leading-[1.6rem] cursor-pointer hover:(text-secondary)`,
]);

// Cloud Tags
const CloudTagsTitle = styled(Typography)(() => [tw`mb-6 text-primary`]);

// Banner subtitle
const BannerBreadcrumb = styled(Typography)(() => [tw`mt-2`]);

// Styled pagination
const StyledPagination = styled(Pagination)(() => [
	{
		'& .MuiPaginationItem-root': {
			marginLeft: '0.6rem',
			marginRight: '0.6rem',
			fontSize: 16,
		},
		'& .MuiPaginationItem-root.Mui-selected': {
			backgroundColor: 'var(--color-secondary)',
			color: 'white',
			paddingInline: 0,
		},
	},
]);

const Blog = () => {
	return (
		<RootWrapper>
			<BubbleBackground image="./BubbleMid1.png" top="33%" right={0} justifyContent="flex-end" />
			<BubbleBackground image="./BubbleMid1.png" top="60%" left={0} flipX />
			{/* Banner Block */}
			<Container className="relative">
				<BannerBox
					pt={{ xs: 5, md: 10, lg: 15 }}
					pb={{ xs: 5, md: 10, lg: 15 }}
					url='"./Blog/BackgroundBanner.png"'
				>
					<BannerHeader>
						<Typography variant="h2" color="primary.contrastText">
							Blog
						</Typography>
						<BannerBreadcrumb variant="subtitle2" color="primary.contrastText">
							Home • Blog
						</BannerBreadcrumb>
					</BannerHeader>
				</BannerBox>
			</Container>
			{/* Blog Block */}
			<Container>
				<BlogGridWrapper container spacing={{ xs: 6, md: 3, lg: 4.5 }}>
					<BlogMainCol size={{ xs: 12, md: 8 }}>
						<Grid container spacing={{ xs: 5, md: 10, lg: 12, xl: 16.8 }} alignItems={'center'}>
							{BlogData.map((blog) => (
								<Grid size={{ xs: 12, sm: 6, md: 12 }} key={blog.id}>
									<BlogCardWrapper>
										<CardMedia component="img" image={blog.image} alt={blog.title} />
										<BlogCardContent>
											<BlogCategory variant="subtitle1" color="secondary">
												<span>
													<img src="./Blog/Document.svg" alt="Document Icon" />
												</span>
												{blog.category}
											</BlogCategory>
											<BlogTitle variant="h2" color="primary">
												{blog.title}
											</BlogTitle>
											<BlogDescription variant="subtitle2" component="p">
												{blog.description}
											</BlogDescription>
											<ReadMoreWrapper>
												<ReadMoreButton variant="contained">Read More</ReadMoreButton>
											</ReadMoreWrapper>
										</BlogCardContent>
									</BlogCardWrapper>
								</Grid>
							))}
						</Grid>
					</BlogMainCol>
					<BlogSidebarCol order={{ xs: -1, md: 0 }} pl={1} size={{ xs: 12, md: 4 }}>
						{/* Search */}
						<SearchBarWrapper>
							<InputBaseStyle placeholder="Search here ..." />
							<SearchButton>
								<img src="./Blog/search.svg" alt="Search" />
							</SearchButton>
						</SearchBarWrapper>
						<SidebarStack spacing={{ xs: 3, md: 6, lg: 8, xl: 11 }}>
							{/* Recent Posts */}
							<RecentPostsSection>
								<RecentPostsTitle variant="subtitle1" color="primary.main">
									Recent Posts
								</RecentPostsTitle>
								<RecentPostsList spacing={2.5}>
									{BlogData.map((blog, index) => (
										<RecentPostItem key={index}>
											<RecentPostImageWrapper>
												<img
													src={`./Blog/Recent_${index + 1}.png`}
													alt={blog.title}
													className="rounded-lg"
												/>
											</RecentPostImageWrapper>
											<Box tw="flex-1 ml-1">
												<RecentPostDate variant="subtitle1" className="tracking-wide">
													01 jan 2021
												</RecentPostDate>
												<RecentPostExcerpt component="p">
													Lorem ipsum dolor sit amet, consectetur adipiscing.
												</RecentPostExcerpt>
											</Box>
										</RecentPostItem>
									))}
								</RecentPostsList>
							</RecentPostsSection>
							{/* Categories */}
							<CategoriesSection>
								<CategoriesTitle variant="subtitle1">Categories</CategoriesTitle>
								<Stack>
									{categories.map((category, index) => (
										<CategoryRow key={index}>
											<CategoryItem>{category}</CategoryItem>
										</CategoryRow>
									))}
								</Stack>
							</CategoriesSection>
							{/* Cloud Tags */}
							<CloudTagsSection>
								<CloudTagsTitle variant="subtitle1" className="pl-1.5">
									Cloud Tags
								</CloudTagsTitle>
								<Grid
									container
									direction="row"
									flexWrap="wrap"
									justifyContent={{ xs: 'flex-start', md: 'space-between' }}
									rowGap={2.5}
								>
									{cloudTags.map((tag, index) => (
										<TagItem key={index}>{tag}</TagItem>
									))}
								</Grid>
							</CloudTagsSection>
							{/* Social Media */}
							<SocialSection>
								<Typography color="primary.main" variant="subtitle1">
									Social Connect
								</Typography>
								<SocialIconsRow direction="row" spacing={1.5}>
									{socialIcons.map((social, index) => (
										<img
											key={index}
											src={social.icon}
											alt={social.alt}
											style={{ cursor: 'pointer' }}
											className="hover:opacity-70 transition-opacity rounded-full w-fit flex items-center justify-center p-1"
										/>
									))}
								</SocialIconsRow>
							</SocialSection>
						</SidebarStack>
					</BlogSidebarCol>
				</BlogGridWrapper>
			</Container>
			{/* Pagination Block */}
			<PaginationWrapper>
				<StyledPagination hideNextButton hidePrevButton count={3} size="medium" />
			</PaginationWrapper>
		</RootWrapper>
	);
};

export default Blog;
