import { Box, Container, Stack, Typography } from '@mui/material';
import ContactForm from '../components/ContactForm';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import { TitleBlock } from '../components/TitleBlock';

const ContactInfo = [
	{
		icon: '/Contact/map-marker-alt.svg',
		title: 'Address',
		info: '101 Baker Street, NY',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
	},
	{
		icon: '/Contact/phone-alt.svg',
		title: 'Phone',
		info: '+896 120 5889',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
	},
	{
		icon: '/Contact/mail-bulk.svg',
		title: 'Mail',
		info: 'mail@company.com',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
	},
];

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
const BHSoftLocation = { lat: 21.0301531, lng: 105.7826427 };

const Contact = () => {
	return (
		<div className="mt-48 py-9">
			{/* Form Block */}
			<section>
				<Container>
					<div className="flex w-full justify-between h-full lg:gap-40 gap-5 flex-col lg:flex-row lg:relative">
						<div className="lg:w-3/6">
							<Typography variant="subtitle1" color="secondary">
								Contact Us
							</Typography>
							<Typography variant="h2" color="primary.main" className=" mt-3 flex">
								Contact service for our customers
							</Typography>
						</div>
						<Typography
							variant="subtitle2"
							component="p"
							className="tracking-normal lg:w-2/5 lg:mt-8 lg:pl-2"
						>
							Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit
							amet luctus venenatis
						</Typography>
					</div>
					<div>
						<Stack flexDirection={{ xs: 'column-reverse', md: 'row' }} gap={9.5} my={7.5}>
							<Box>
								<img
									src="/Contact/ContactAnimations.png"
									alt="Contact Image"
									className=" -z-10 relative flex items-center justify-center lg:top-[4.5rem] "
								/>
							</Box>
							<Box className="w-full">
								<ContactForm />
							</Box>
						</Stack>
					</div>
				</Container>
			</section>
			{/* Banner Block */}
			<section className=" mt-28">
				<APIProvider apiKey={API_KEY}>
					<Map
						style={{
							width: '100%',
							maxWidth: '1440px',
							height: '418px',
							margin: '0 auto',
						}}
						mapId="d018943ab18ba9f88b233afe"
						defaultCenter={BHSoftLocation}
						defaultZoom={17}
						gestureHandling="cooperates"
						disableDefaultUI
					>
						<AdvancedMarker position={BHSoftLocation} />
					</Map>
				</APIProvider>
			</section>
			<section className="mt-28 lg:mb-[170px] pb-2 mb-20">
				<Container>
					<TitleBlock
						subTitle="Get in Touch"
						mainTitle="Get direct handling by us"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
					/>
					{/* <div className="flex flex-col items-center justify-center text-center gap-3 py-3 ">
						<Typography variant="subtitle1" color="secondary" className="section__subtitle">
							Get in Touch
						</Typography>
						<Typography variant="h2" color="primary.main" className="section__title">
							Get direct handling by us
						</Typography>
						<Typography
							variant="subtitle2"
							component="p"
							className="section__description leading-6 tracking-widest lg:my-3 lg:pl-1"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
						</Typography>
					</div> */}
					{/* Contact Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto mt-[8.4rem]">
						{ContactInfo.map((item, index) => (
							<div
								key={index}
								className="flex flex-col items-center text-center p-11 rounded-2xl border-2 border-transparent transition-all duration-300 hover:shadow-2xl hover:border-white hover:scale-105"
							>
								<div className="mb-10">
									<img src={item.icon} alt="" />
								</div>
								<Typography variant="subtitle1" color="secondary" className="mb-4">
									{item.title}
								</Typography>
								<Typography
									variant="subtitle1"
									color="primary"
									className="text-2xl tracking-normal"
								>
									{item.info}
								</Typography>
								<Typography
									variant="body1"
									className="text-neutral-650 tracking-widest leading-5 lg:leading-[21px] mt-3"
								>
									{item.description}
								</Typography>
							</div>
						))}
					</div>
				</Container>
			</section>
		</div>
	);
};

export default Contact;
