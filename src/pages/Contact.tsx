import { Box, Container, Stack, Typography } from '@mui/material';
import ContactForm from '../components/ContactForm';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import { TitleBlock } from '../components/TitleBlock';
import tw, { styled } from 'twin.macro';

const ContactInfo = [
	{
		icon: './Contact/map-marker-alt.svg',
		title: 'Address',
		info: '101 Baker Street, NY',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
	},
	{
		icon: './Contact/phone-alt.svg',
		title: 'Phone',
		info: '+896 120 5889',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
	},
	{
		icon: './Contact/mail-bulk.svg',
		title: 'Mail',
		info: 'mail@company.com',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
	},
];

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
const BHSoftLocation = { lat: 21.0301531, lng: 105.7826427 };

const PageWrapper = styled(Box)(() => tw`mt-48 py-9`);

const FormLayout = styled(Box)(
	() => tw`flex w-full justify-between h-full gap-5 flex-col lg:flex-row lg:gap-40 lg:relative`
);

const FormColumn = styled(Box)(() => tw`lg:w-3/6`);

const FormTitle = styled(Typography)(() => tw`mt-3 flex`);

const FormDescription = styled(Typography)(() => tw`tracking-normal lg:w-2/5 lg:mt-8 lg:pl-2`);

const ContactImageWrapper = styled(Box)(
	() => tw`-z-10 relative flex items-center justify-center lg:top-[4.5rem]`
);

const FormContent = styled(Box)(() => tw`w-full`);

const MapSection = styled('section')(() => tw`mt-28`);

const MapContainer = styled(Box)(() => tw`w-full max-w-[1440px] h-[418px] mx-auto`);

const CardsSection = styled('section')(() => tw`mt-28 mb-20 pb-2 lg:mb-[170px]`);

const ContactCardsGrid = styled(Box)(
	() => tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto mt-[8.4rem]`
);

const ContactCard = styled(Box)(
	() =>
		tw`flex flex-col items-center text-center p-11 rounded-2xl border-2 border-transparent transition-all duration-300 hover:shadow-2xl hover:border-white hover:scale-105`
);

const CardIconWrapper = styled(Box)(() => tw`mb-10`);

const CardTitle = styled(Typography)(() => tw`mb-4`);

const CardInfo = styled(Typography)(() => tw`text-2xl tracking-normal`);

const CardDescription = styled(Typography)(
	() => tw`tracking-widest leading-5 lg:leading-[21px] mt-3 text-[var(--color-text-muted)]`
);

const Contact = () => {
	return (
		<PageWrapper>
			{/* Form Block */}
			<section>
				<Container>
					<FormLayout>
						<FormColumn>
							<Typography variant="subtitle1" color="secondary">
								Contact Us
							</Typography>
							<FormTitle variant="h2" color="primary.main">
								Contact service for our customers
							</FormTitle>
						</FormColumn>
						<FormDescription variant="subtitle2" component="p">
							Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit
							amet luctus venenatis
						</FormDescription>
					</FormLayout>
					<Stack flexDirection={{ xs: 'column-reverse', md: 'row' }} gap={9.5} my={7.5}>
						<ContactImageWrapper>
							<img src="./Contact/ContactAnimations.png" alt="Contact Image" />
						</ContactImageWrapper>
						<FormContent>
							<ContactForm />
						</FormContent>
					</Stack>
				</Container>
			</section>
			{/* Map Block */}
			<MapSection>
				<APIProvider apiKey={API_KEY}>
					<MapContainer>
						<Map
							style={{ width: '100%', height: '100%' }}
							mapId="d018943ab18ba9f88b233afe"
							defaultCenter={BHSoftLocation}
							defaultZoom={17}
							gestureHandling="cooperates"
							disableDefaultUI
						>
							<AdvancedMarker position={BHSoftLocation} />
						</Map>
					</MapContainer>
				</APIProvider>
			</MapSection>
			<CardsSection>
				<Container>
					<TitleBlock
						subTitle="Get in Touch"
						mainTitle="Get direct handling by us"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
					/>
					<ContactCardsGrid>
						{ContactInfo.map((item) => (
							<ContactCard key={item.title}>
								<CardIconWrapper>
									<img src={item.icon} alt="" />
								</CardIconWrapper>
								<CardTitle variant="subtitle1" color="secondary">
									{item.title}
								</CardTitle>
								<CardInfo variant="subtitle1" color="primary">
									{item.info}
								</CardInfo>
								<CardDescription variant="body1">{item.description}</CardDescription>
							</ContactCard>
						))}
					</ContactCardsGrid>
				</Container>
			</CardsSection>
		</PageWrapper>
	);
};

export default Contact;
