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
import { styled } from '@mui/material/styles';
import { TitleBlock } from '../components/TitleBlock';

const NoDividerAccordion = styled(Accordion)(() => ({
	'&.MuiAccordion-root:before': {
		display: 'none', // or content: 'none'
	},
}));

const Service = () => {
	return (
		<div>
			<Box
				sx={{
					position: 'absolute',
					top: '10%',
					right: 0,
					width: '100%',
					height: 'fit-content',
					display: 'flex',
					justifyContent: 'center',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					zIndex: -1,
					pointerEvents: 'none',
				}}
			>
				<img src="/Service/BackgroundImage.png" className="" alt="" />
			</Box>
			{/* Hero Block */}
			<section className="lg:mt-8 lg:pt-[38px] relative">
				<Container>
					<div className="flex flex-col items-center justify-center h-full  lg:pt-40 pt-32 pb-5">
						<TitleBlock
							subTitle="Our Services"
							mainTitle="We focus on your beauty"
							description="Lorem ipsum dolor sit amet"
						/>
					</div>
					<Grid
						rowSpacing={{ xs: 2, md: 3, lg: 8 }}
						className="mt-14 px-5"
						container
						spacing={2}
						sx={{}}
					>
						<Grid size={4}>
							<div>
								<img src="/Service/Hero_1.png" alt="" className="max-h-[254px]" />
							</div>
						</Grid>
						<Grid size={8}>
							<div>
								<img src="/Service/Hero_2.png" alt="" />
							</div>
						</Grid>
						<Grid size={8}>
							<div>
								<img src="/Service/Hero_3.png" alt="" />
							</div>
						</Grid>
						<Grid
							maxHeight={'254px'}
							size={4}
							sx={{
								ml: { lg: 'auto', xs: 0 },
								display: 'flex',
								justifyContent: { lg: 'flex-end', xs: 'center' },
							}}
						>
							<div>
								<img src="/Service/Hero_4.png" alt="" className="max-h-[254px]" />
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>
			{/* Consultant Block */}
			<section className="lg:my-32 my-16 mt-28 pt-5">
				<Container disableGutters>
					<Grid
						rowSpacing={{ xs: 6, md: 10, lg: 11 }}
						container
						spacing={{
							xs: 5,
							md: 10,
							lg: 15,
							xl: 23,
						}}
						sx={{
							display: 'flex',
							textAlign: 'left',
						}}
					>
						<Grid size={6}>
							<div className="flex items-center relative bottom-1 h-full">
								<div className="relative">
									<img src="/Service/Consultant_1.png" alt="About Us" className="" />
								</div>
							</div>
						</Grid>
						<Grid size={6}>
							<div className="flex  flex-col gap-3 lg:pt-6 h-full">
								<Typography variant="subtitle1" color="secondary" className="section__subtitle ">
									Beauty Consultation
								</Typography>
								<Typography variant="h2" color="primary.main" className="section__title">
									We services beauty consultation
								</Typography>
								<p className="w-[95%] tracking-widest">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
									donec amet. Egestas volutpat facilisi eu libero.
								</p>
								<div className="mt-3 flex items-center gap-3">
									<span className="font-semibold tracking-widest">Make an Appointment</span>
									<a href="/" className="">
										<span>
											<img src="/Service/angle-double-right.svg" alt="Arrow" />
										</span>
									</a>
								</div>
							</div>
						</Grid>
						<Grid size={6}>
							<div className="flex flex-col gap-3 lg:pt-7 h-full">
								<Typography variant="subtitle1" color="secondary" className="section__subtitle ">
									Skin Treatements
								</Typography>
								<Typography variant="h2" color="primary.main" className="section__title w-11/12">
									Skin care and treatment by expert
								</Typography>
								<p className="w-[95%] tracking-widest">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
									donec amet. Egestas volutpat facilisi eu libero.
								</p>
								<div className="mt-3 flex items-center gap-3">
									<span className="font-semibold tracking-widest">Make an Appointment</span>
									<a href="/" className="">
										<span>
											<img src="/Service/angle-double-right.svg" alt="Arrow" />
										</span>
									</a>
								</div>
							</div>
						</Grid>
						<Grid size={6}>
							<div className="flex items-center h-full">
								<div className="relative">
									<img
										src="/Service/Consultant_2.png"
										alt="About Us"
										className="lg:relative lg:left-1"
									/>
								</div>
							</div>
						</Grid>
						<Grid size={6}>
							<div className="flex items-center  h-full">
								<div className="relative">
									<img src="/Service/Consultant_3.png" alt="About Us" className="" />
								</div>
							</div>
						</Grid>
						<Grid size={6}>
							<div className="flex flex-col gap-3 lg:pt-8 h-full">
								<Typography variant="subtitle1" color="secondary" className="section__subtitle  ">
									Beauty Product
								</Typography>
								<Typography variant="h2" color="primary.main" className="section__title">
									We present quality beauty products
								</Typography>
								<p className="w-[95%] tracking-widest">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus
									donec amet. Egestas volutpat facilisi eu libero.
								</p>
								<div className="mt-3 flex items-center gap-3">
									<span className="font-semibold tracking-widest">Make an Appointment</span>
									<a href="/" className="">
										<span>
											<img src="/Service/angle-double-right.svg" alt="Arrow" />
										</span>
									</a>
								</div>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>
			{/* Banner Block */}
			<Container className="relative">
				<BannerBox url="/Service/BannerImage.png" pt={23} className="py-48">
					<Grid container className="flex">
						<Grid
							size={{ xs: 12, md: 6 }}
							className="flex text-center lg:text-start flex-col gap-5"
						>
							<Typography
								variant="h2"
								color="primary.main"
								className="section__title lg:relative top-1"
							>
								Best responsibility and service for our customers
							</Typography>
							<Typography
								variant="subtitle2"
								component="div"
								className="section__description leading-6"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
								luctus venenatis
							</Typography>
						</Grid>
					</Grid>
				</BannerBox>
			</Container>
			{/* FAQ Block */}
			<Container className="my-20 lg:mt-28 lg:mb-[118px] pt-1 pb-2">
				<Typography
					variant="h2"
					color="primary.main"
					className="lg:ml-2 section__title text-center"
				>
					Services FAQ’s
				</Typography>
				{/* divider */}
				<div className="w-10 h-1 bg-primary mx-auto my-4"></div>
				<div className="w-[84%] mx-auto py-7">
					<NoDividerAccordion
						sx={{
							boxShadow: 'none',
							'&:before': {
								display: 'none',
							},
							mb: 1,
						}}
						defaultExpanded
					>
						<AccordionSummary
							expandIcon={<img src="/Service/accordion-arrow.svg" alt="Arrow" />}
							aria-controls="panel1-content"
							id="panel1-header"
							className=""
						>
							<Typography
								variant="subtitle2"
								color="primary"
								className="px-3 font-semibold lg:relative top-1 py-2"
							>
								Is beauty consultation handled thoroughly?
							</Typography>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								pt: 5.5,
								pb: 8,
								px: 8.6,
								backgroundColor: 'var(--color-secondary-surface)',
								borderBottom: '1px solid var(--color-secondary-surface)',
								borderRadius: 5,
								letterSpacing: '0.1em',
								lineHeight: '150%',
								fontFamily: 'Poppins, sans-serif',
								fontStyle: 'italic',
							}}
							className="card__description"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus venenatis, lectus magna fringilla urna
							<br />
							<br />
							porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla
							est ullamcorper eget nulla
						</AccordionDetails>
					</NoDividerAccordion>
					<NoDividerAccordion
						sx={{
							boxShadow: 'none',
							borderRadius: 5,
						}}
					>
						<AccordionSummary
							expandIcon={<img src="/Service/accordion-arrow.svg" alt="Arrow" />}
							aria-controls="panel1-content"
							id="panel1-header"
							className="lg:relative bottom-2"
						>
							<span className="btn__text px-3 text-secondary py-2">
								Can I be beautiful in an instant time?
							</span>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								pt: 5.5,
								pb: 8,
								px: 8.6,
								backgroundColor: 'var(--color-secondary-surface)',
								borderBottom: '1px solid var(--color-secondary-surface)',
								borderRadius: 5,
								letterSpacing: '0.1em',
								lineHeight: '150%',
								fontFamily: 'Poppins, sans-serif',
								fontStyle: 'italic',
							}}
							className="card__description text-it"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus venenatis, lectus magna fringilla urna
							<br />
							<br />
							porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla
							est ullamcorper eget nulla
						</AccordionDetails>
					</NoDividerAccordion>
					<NoDividerAccordion
						sx={{
							boxShadow: 'none',
							borderRadius: 5,
						}}
					>
						<AccordionSummary
							expandIcon={<img src="/Service/accordion-arrow.svg" alt="Arrow" />}
							aria-controls="panel1-content"
							id="panel1-header"
							className="lg:relative bottom-2"
						>
							<span className="btn__text px-3 lg:relative text-secondary py-2">
								Are there any side effects to the treatment methods or treatments at this clinic?
							</span>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								pt: 5,
								pb: 8,
								px: 9,
								backgroundColor: 'var(--color-secondary-surface)',
							}}
							className="card__description text-it"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus venenatis, lectus magna fringilla urna
							<br />
							<br />
							porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla
							est ullamcorper eget nulla
						</AccordionDetails>
					</NoDividerAccordion>
					<NoDividerAccordion
						sx={{
							boxShadow: 'none',
							borderRadius: 5,
						}}
					>
						<AccordionSummary
							expandIcon={<img src="/Service/accordion-arrow.svg" alt="Arrow" />}
							aria-controls="panel1-content"
							id="panel1-header"
							className=" lg:relative bottom-[10px] w-full"
						>
							<span className="btn__text px-3 text-secondary py-2">
								Do professionals have accreditation in their respective fields?
							</span>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								pt: 5,
								pb: 8,
								px: 9,
								backgroundColor: 'var(--color-secondary-surface)',
							}}
							className="card__description text-it"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
							luctus venenatis, lectus magna fringilla urna
							<br />
							<br />
							porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla
							est ullamcorper eget nulla
						</AccordionDetails>
					</NoDividerAccordion>
				</div>
			</Container>
		</div>
	);
};

export default Service;
