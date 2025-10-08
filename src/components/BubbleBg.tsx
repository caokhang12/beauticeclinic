import React from 'react';

export type BubbleBackgroundProps = {
	image: string;
	alt?: string;
	top?: string | number;
	bottom?: string | number;
	left?: string | number;
	right?: string | number;
	width?: string | number;
	height?: string | number;
	flipX?: boolean;
	zIndex?: number;

	justify?: 'flex-start' | 'center' | 'flex-end';
	position?: React.CSSProperties['position'];
	imageProps?: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'className'>;
	// Deprecated props safely ignored
	darkImage?: string;
};

const BubbleBackground: React.FC<BubbleBackgroundProps> = ({
	image,
	alt = '',
	top,
	bottom,
	left,
	right,
	width,
	height,
	flipX,
	zIndex = -1,
}) => {
	const style: React.CSSProperties = {
		position: 'absolute',
		top,
		bottom,
		left,
		right,
		width,
		height,
		pointerEvents: 'none',
		userSelect: 'none',
		zIndex,
		transform: flipX ? 'scaleX(-1)' : undefined,
	};

	return (
		<img
			src={image}
			alt={alt}
			aria-hidden={alt === '' ? true : undefined}
			draggable={false}
			style={style}
			className="bubble-bg"
		/>
	);
};

export default BubbleBackground;
