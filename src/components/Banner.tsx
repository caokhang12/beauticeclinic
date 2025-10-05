// PaddedBox.tsx
import { Box, type BoxProps, type SxProps, type Theme } from '@mui/material';
import type { ResponsiveStyleValue } from '@mui/system';

interface PaddedBoxProps extends BoxProps {
	pt?: ResponsiveStyleValue<number | string>;
	pb?: ResponsiveStyleValue<number | string>;
	url: string;
}

const BannerBox = ({ pt, pb, children, url, sx, ...rest }: PaddedBoxProps) => {
	const baseSx: SxProps<Theme> = {
		pt,
		pb,
		'&::before': {
			backgroundImage: `url(${url})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			position: 'absolute',
			inset: 0,
			content: '""',
			zIndex: 0,
		},
		'&::after': {
			backgroundColor: 'rgba(9, 17, 86, 0.6)',
			position: 'absolute',
			inset: 0,
			content: '""',
			pointerEvents: 'none',
			zIndex: 1,
		},
		'& > *': {
			position: 'relative',
			zIndex: 2,
		},
	};

	const mergedSx = Array.isArray(sx) ? [baseSx, ...sx] : sx ? [baseSx, sx] : [baseSx];

	return (
		<Box sx={mergedSx} {...rest}>
			{children}
		</Box>
	);
};

export default BannerBox;
