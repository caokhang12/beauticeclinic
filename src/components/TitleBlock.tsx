import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { BoxProps } from '@mui/material/Box';
import tw from 'twin.macro';

export const SubTitleText = styled(Box)<BoxProps>`
	${tw` text-[var(--color-primary)] font-semibold text-base leading-5`}
`;

export const MainTitleText = styled(Box)<BoxProps>`
	${tw` text-[var(--color-secondary)] text-4xl font-bold   `}
`;

export const DescriptionText = styled(Box)<BoxProps>`
	${tw` text-[var(--color-text-body)] text-base font-normal leading-6 tracking-widest  `}
`;

export const HeroText = styled(Box)<BoxProps>`
	${tw` text-[var(--color-text-body)] text-5xl font-semibold leading-[3.75rem]  `}
`;
export const TitleBlock = ({
	subTitle,
	mainTitle,
	description,
}: {
	subTitle: string;
	mainTitle: string;
	description: string;
}) => {
	return (
		<Stack spacing={1.4} alignItems="center">
			<Typography variant="subtitle1" color="secondary">
				{subTitle}
			</Typography>
			<Typography variant="h2" color="primary.main" tw="w-full md:w-3/4 lg:w-[39%]">
				{mainTitle}
			</Typography>
			<Typography variant="subtitle2" color="text.primary" tw=" w-3/4 pt-2">
				{description}
			</Typography>
		</Stack>
	);
};
