import Button from '@mui/material/Button';
import tw, { styled } from 'twin.macro';

export const PinkButton = styled(Button)([
	tw`bg-[var(--color-primary)] text-white`,
	tw`hover:bg-[var(--color-primary-dark)]`,
]);
