import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import BannerBox from '../components/Banner';
import { TitleBlock } from '../components/TitleBlock';
import tw, { styled } from 'twin.macro';

// Styled components
const PageRoot = styled('div')(() => [tw``]);
const BackgroundDecoration = styled(Box)(() => [
	tw`absolute top-[10%] right-0 w-full h-fit flex justify-center pointer-events-none -z-10`,
	{
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
]);

const HeroSection = styled('section')(() => [tw`relative lg:mt-9 lg:pt-[35px]`]);
const HeroInner = styled('div')(() => [
	tw`flex flex-col items-center justify-center h-full pt-32 lg:pt-40 pb-4`,
]);
const HeroGrid = styled(Grid)(() => [tw`mt-14 px-5`]);
const HeroImageSmall = styled('img')(() => [tw`max-h-[254px]`]);

const HeroTrailingGrid = styled(Grid)(() => [
	tw`max-h-[254px] flex justify-center lg:(ml-auto justify-end)`,
]);

const ConsultantSection = styled('section')(() => [tw`my-16 mt-28 pt-1 lg:(mt-40 mb-[9.6rem])`]);
const ConsultantGrid = styled(Grid)(() => [tw`flex text-left`]);
const ServiceTextBlock = styled('div')(() => [tw`flex flex-col gap-3 h-full`]);
const CTAWrapper = styled('div')(() => [tw`mt-2 flex items-center gap-3`]);

// FAQ
const FaqSection = styled(Container)(() => [tw`my-20 pb-2 lg:(mt-28 mb-[118px])`]);
const FaqTitle = styled(Typography)(() => [tw`text-center pt-1 lg:ml-2`]);
const DividerBar = styled('div')(() => [tw`w-10 h-1.5 rounded-full bg-secondary mx-auto my-3`]);
const FaqWrapper = styled('div')(() => [tw`w-[85%] mx-auto py-9`]);

const FaqAccordion = styled(Accordion)(() => [
	tw`shadow-none  mb-2`,
	{
		'&.MuiAccordion-root:before': { display: 'none' },
	},
]);
const FaqSummaryText = styled(Typography)(() => [
	tw`px-[1.1em]  font-semibold lg:relative top-0.5`,
]);
const FaqDetails = styled(AccordionDetails)(() => [
	tw`bg-[var(--color-secondary-surface)] pt-12 pb-14  px-[74px] rounded-b-2xl italic`,
]);

// FAQ data
const faqItems = [
	{
		question: 'Is beauty consultation handled thoroughly?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna\n\nporttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla',
	},
	{
		question: 'Can I be beautiful in an instant time?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna\n\nporttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla',
	},
	{
		question: 'Are there any side effects to the treatment methods or treatments at this clinic?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna\n\nporttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla',
	},
	{
		question: 'Do professionals have accreditation in their respective fields?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna\n\nporttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla',
	},
];

const Service = () => {
	return (
		<PageRoot>
			<BackgroundDecoration>
				<img src="./Service/BackgroundImage.png" alt="" aria-hidden />
			</BackgroundDecoration>
			{/* Hero Block */}
			<HeroSection>
				<Container>
					<HeroInner>
						<TitleBlock
							subTitle="Our Services"
							mainTitle="We focus on your beauty"
							description="Lorem ipsum dolor sit amet"
							mg
						/>
					</HeroInner>
					<HeroGrid rowSpacing={{ xs: 2, md: 3, lg: 8 }} container spacing={2.6}>
						<Grid size={4}>
							<HeroImageSmall src="./Service/Hero_1.png" alt="" />
						</Grid>
						<Grid size={8}>
							<img src="./Service/Hero_2.png" alt="" />
						</Grid>
						<Grid size={8}>
							<img src="./Service/Hero_3.png" alt="" />
						</Grid>
						<HeroTrailingGrid size={4}>
							<HeroImageSmall src="./Service/Hero_4.png" alt="" />
						</HeroTrailingGrid>
					</HeroGrid>
				</Container>
			</HeroSection>
			{/* Consultant Block */}
			<ConsultantSection>
				<Container disableGutters>
					<ConsultantGrid
						rowSpacing={{ xs: 6, md: 10, lg: 12.5 }}
						container
						spacing={{ xs: 5, md: 10, lg: 15, xl: 23 }}
					>
						<Grid size={6}>
							<div className="flex items-center justify-center">
								<div className="lg:relative bottom-6 left-1.5">
									<img src="./Service/Consultant_1.png" alt="Beauty consultation" />
								</div>
							</div>
						</Grid>
						<Grid size={6}>
							<ServiceTextBlock className="">
								<Typography variant="subtitle1" color="secondary">
									Beauty Consultation
								</Typography>
								<Typography variant="h2" color="primary.main">
									We services beauty consultation
								</Typography>
								<Typography variant="subtitle2" className="w-[95%] tracking-widest">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
									donec amet. Egestas volutpat facilisi eu libero.
								</Typography>
								<CTAWrapper>
									<Typography
										color="primary.main"
										variant="subtitle1"
										className="font-semibold tracking-widest"
									>
										Make an Appointment
									</Typography>
									<a href="/" aria-label="Make an appointment">
										<span>
											<img src="./Service/angle-double-right.svg" alt="Arrow" />
										</span>
									</a>
								</CTAWrapper>
							</ServiceTextBlock>
						</Grid>
						<Grid size={6}>
							<ServiceTextBlock className="">
								<Typography variant="subtitle1" color="secondary">
									Skin Treatements
								</Typography>
								<Typography variant="h2" color="primary.main" className="w-11/12">
									Skin care and treatment by expert
								</Typography>
								<Typography variant="subtitle2" className="w-[95%] tracking-widest">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
									donec amet. Egestas volutpat facilisi eu libero.
								</Typography>
								<CTAWrapper>
									<Typography
										color="primary.main"
										variant="subtitle1"
										className="font-semibold tracking-widest"
									>
										Make an Appointment
									</Typography>
									<a href="/">
										<span>
											<img src="./Service/angle-double-right.svg" alt="Arrow" />
										</span>
									</a>
								</CTAWrapper>
							</ServiceTextBlock>
						</Grid>
						<Grid size={6}>
							<div className="flex items-center justify-center">
								<div className="lg:relative left-2.5 bottom-4">
									<img src="./Service/Consultant_2.png" alt="Consultant" className="lg:relative " />
								</div>
							</div>
						</Grid>
						<Grid size={6}>
							<div className="flex items-center justify-center">
								<div className="lg:relative top-14">
									<img src="./Service/Consultant_3.png" alt="Product expert" />
								</div>
							</div>
						</Grid>
						<Grid size={6}>
							<ServiceTextBlock className="lg:pt-4">
								<Typography variant="subtitle1" color="secondary">
									Beauty Product
								</Typography>
								<Typography variant="h2" color="primary.main">
									We present quality beauty products
								</Typography>
								<Typography variant="subtitle2" className="w-[95%] tracking-widest">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
									donec amet. Egestas volutpat facilisi eu libero.
								</Typography>
								<CTAWrapper>
									<Typography
										color="primary.main"
										variant="subtitle1"
										className="font-semibold tracking-widest"
									>
										Make an Appointment
									</Typography>
									<a href="/" aria-label="Make an appointment">
										<span>
											<img src="./Service/angle-double-right.svg" alt="Arrow" />
										</span>
									</a>
								</CTAWrapper>
							</ServiceTextBlock>
						</Grid>
					</ConsultantGrid>
				</Container>
			</ConsultantSection>
			{/* Banner Block */}
			<Container className="relative">
				<BannerBox url="./Service/BannerImage.png" pt={22} pb={24}>
					<Grid container className="flex">
						<Grid
							size={{ xs: 12, md: 6 }}
							className="flex text-center lg:text-start flex-col gap-6"
						>
							<Typography variant="h2" color="primary.contrastText" className="lg:relative top-1">
								Best responsibility and service for our customers
							</Typography>
							<Typography variant="subtitle2" component="div" className="leading-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
								luctus venenatis
							</Typography>
						</Grid>
					</Grid>
				</BannerBox>
			</Container>
			{/* FAQ Block */}
			<FaqSection>
				<FaqTitle variant="h2" color="primary.main">
					Services FAQ’s
				</FaqTitle>
				<DividerBar />
				<FaqWrapper>
					{faqItems.map((item, i) => {
						const answerParts = item.answer.split(/\n\n/);
						return (
							<FaqAccordion key={i} defaultExpanded={i === 0}>
								<AccordionSummary
									expandIcon={<img src="./Service/accordion-arrow.svg" alt="Arrow" />}
									aria-controls={`faq-panel-${i}-content`}
									id={`faq-panel-${i}-header`}
								>
									<FaqSummaryText variant="subtitle2" color="primary">
										{item.question}
									</FaqSummaryText>
								</AccordionSummary>
								<FaqDetails>
									{answerParts.map((p, idx) => (
										<span key={idx}>
											{p}
											{idx < answerParts.length - 1 && (
												<>
													<br />
													<br />
												</>
											)}
										</span>
									))}
								</FaqDetails>
							</FaqAccordion>
						);
					})}
				</FaqWrapper>
			</FaqSection>
		</PageRoot>
	);
};

export default Service;
