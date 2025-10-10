import { Box } from '@mui/material';

export type BubbleBackgroundProps = {
	image: string;
	alt?: string;
	top?: string | number;
	bottom?: string | number;
	left?: string | number;
	right?: string | number;
	flipX?: boolean;
	zIndex?: number;
	width?: number | string;
	justifyContent?: 'flex-start' | 'center' | 'flex-end';
};
const BubbleBackground: React.FC<BubbleBackgroundProps> = ({
	image,
	alt = '',
	top,
	bottom,
	left,
	right,
	flipX = false,
	zIndex = -1,
	width,
	justifyContent = 'flex-start',
}) => {
	return (
		<Box
			position="absolute"
			top={top}
			bottom={bottom}
			left={left}
			right={right}
			sx={{ zIndex, pointerEvents: 'none', display: 'flex', justifyContent: justifyContent }}
			className="bubble-bg"
			width={'100%'}
		>
			<Box
				component="img"
				src={image}
				alt={alt}
				sx={{
					transform: flipX ? 'scaleX(-1)' : undefined,
					userSelect: 'none',
					display: 'flex',
					height: 'auto',
					maxWidth: '100%',
					width: width || 'auto',
				}}
			/>
		</Box>
	);
};

export default BubbleBackground;
