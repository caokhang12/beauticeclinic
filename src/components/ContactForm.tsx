import { InputBase, TextareaAutosize } from '@mui/material';
import { PinkButton } from './PinkButton';
import { styled } from 'twin.macro';
import tw from 'twin.macro';

const TextAreaCustom = styled(TextareaAutosize)(() => [
	{
		color: 'var(--color-text-input)',
		fontFamily: 'Poppins, sans-serif',
		borderRadius: '0.9375rem',
		backgroundColor: 'none',
		border: '1px solid #D9DDFE',
		width: '100%',
		padding: '1.6rem 1.35rem',
		minHeight: '190px',
		fontSize: '1rem',
		fontWeight: 400,
		letterSpacing: '0.09rem',
		lineHeight: '1.375rem',
	},
]);
export const InputBaseCustom = styled(InputBase)(() => [tw`bg-card`]);

const ContactForm = () => {
	return (
		<form className="form w-full  flex flex-col gap-32 lg:gap-[38px] ">
			<div className="flex justify-between md:flex-row flex-col gap-9">
				<div className="w-full">
					<InputBaseCustom type="text" placeholder="First name" />
				</div>
				<div className="w-full">
					<InputBaseCustom type="text" placeholder="Last name" />
				</div>
			</div>
			<div>
				<InputBaseCustom type="email" className=" w-full" placeholder="Email address" />
			</div>
			<div>
				<InputBaseCustom type="text" className=" w-full" placeholder="Subject message" />
			</div>
			<div>
				<TextAreaCustom placeholder="Your inquiry here" />
			</div>
			<PinkButton
				type="submit"
				sx={{
					alignSelf: 'flex-start',
					px: { sm: 5, md: 7 },
					py: { sm: 1.8, md: 2 },
					mt: 1.5,
				}}
				variant="contained"
			>
				Send Message
			</PinkButton>
		</form>
	);
};

export default ContactForm;
