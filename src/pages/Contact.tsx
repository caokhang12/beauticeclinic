import { Box, Container, Stack, Typography } from '@mui/material';
import ContactForm from '../components/ContactForm';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

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
					<div className="flex w-full  mitems-start justify-between h-full lg:gap-40 gap-5 flex-col lg:flex-row lg:relative">
						<div className="lg:w-3/6">
							<Typography variant="subtitle1" className="section__subtitle">
								Contact Us
							</Typography>
							<Typography variant="h2" className="section__title mt-3 flex">
								Contact service for our customers
							</Typography>
						</div>
						<Typography
							variant="subtitle2"
							component="p"
							className="section__description leading-6 tracking-normal lg:w-2/5 lg:mt-8 lg:pl-2"
						>
							Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit
							amet luctus venenatis
						</Typography>
					</div>
					<div>
						<Stack
							flexDirection={{ xs: 'column-reverse', md: 'row' }}
							spacing={2}
							my={5.5}
							justifyContent={'space-between'}
						>
							<Box>
								<img
									src="/Contact/ContactAnimations.png"
									alt="Contact Image"
									className=" -z-10 relative flex items-center justify-center lg:top-[5.6rem] lg:left-1"
								/>
							</Box>
							<Box
								sx={{
									pl: { md: 0, lg: 10 },
								}}
							>
								<ContactForm />
							</Box>
						</Stack>
					</div>
				</Container>
			</section>
			{/* Banner Block */}
			<section className=" mt-28">
				{/* <BannerBox url="/Contact/map.png" pt={21} pb={32} /> */}
				<APIProvider apiKey={API_KEY}>
					<Map
						style={{
							width: '100%',
							maxWidth: '1440px',
							height: '500px',
							margin: '0 auto',
						}}
						defaultCenter={BHSoftLocation}
						defaultZoom={17}
						gestureHandling="cooperates"
						disableDefaultUI
					>
						<Marker position={BHSoftLocation} />
					</Map>
				</APIProvider>
			</section>
			{/* Contact Card Block */}
			<section className="mt-24 lg:mb-[170px] pb-2 mb-20">
				<Container>
					<div className="flex flex-col items-center justify-center text-center gap-3 py-3 ">
						<Typography variant="subtitle1" className="section__subtitle">
							Get in Touch
						</Typography>
						<Typography variant="h2" className="section__title">
							Get direct handling by us
						</Typography>
						<Typography
							variant="subtitle2"
							component="p"
							className="section__description leading-6 tracking-widest lg:my-3 lg:pl-1"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
						</Typography>
					</div>
					{/* Contact Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto mt-[6.7rem]">
						{ContactInfo.map((item, index) => (
							<div
								key={index}
								className="flex flex-col items-center text-center p-11 rounded-2xl border-2 border-transparent transition-all duration-300 hover:shadow-2xl hover:border-white hover:scale-105"
							>
								<div className="mb-11">
									<img src={item.icon} alt="" />
								</div>
								<h3 className="mb-3">{item.title}</h3>
								<p className="font-bold text-2xl tracking-[-0.005em] text-secondary">{item.info}</p>
								<p className="text-neutral-650 tracking-widest leading-5 lg:leading-[21px] mt-3 text-sm">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</Container>
			</section>
		</div>
	);
};

export default Contact;
