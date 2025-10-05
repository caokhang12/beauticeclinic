import { InputBase, TextareaAutosize } from '@mui/material';
import { PinkButton } from './PinkButton';
import { styled } from 'twin.macro';

const TextAreaCustom = styled(TextareaAutosize)(() => [
	{
		resize: 'none',
		outline: 'none',
		border: 'none',
	},
	{
		fontFamily: 'Poppins, sans-serif',
		borderRadius: '0.9375rem',
		backgroundColor: 'white',
		border: '1px solid #D9DDFE',
		width: '100%',
		padding: '1.6rem 1.35rem',
		minHeight: '150px',
		fontSize: '1rem',
		fontWeight: 400,
		letterSpacing: '0.09rem',
		lineHeight: '1.375rem',
	},
	{
		'&::placeholder': {
			opacity: 1,
			color: '#8b8b8b',
		},
	},
]);

const ContactForm = () => {
	return (
		<form className="form  flex flex-col gap-32 lg:gap-[38px] ">
			<div className="flex justify-between md:flex-row flex-col gap-9">
				<div className="form__group w-full">
					<InputBase type="text" className="form__input w-full" placeholder="First name" />
				</div>
				<div className="form__group w-full">
					<InputBase type="text" className="form__input w-full" placeholder="Last name" />
				</div>
			</div>
			<div>
				<InputBase type="email" placeholder="Email address" />
			</div>
			<div>
				<InputBase type="text" placeholder="Subject message" />
			</div>
			<div>
				<TextAreaCustom placeholder="Your inquiry here" />
			</div>
			<PinkButton
				type="submit"
				sx={{
					alignSelf: 'flex-start',
					px: { sm: 5, md: 7 },
					py: { sm: 1.8, md: 2.5 },
					mt: 0.7,
				}}
				variant="contained"
			>
				Send Message
			</PinkButton>
		</form>
	);
};

export default ContactForm;
