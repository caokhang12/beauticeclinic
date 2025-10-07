import React from 'react';
import tw, { styled } from 'twin.macro';

type PositionValue = string | number;

type WrapperProps = {
	top?: PositionValue;
	bottom?: PositionValue;
	left?: PositionValue;
	right?: PositionValue;
	width?: string | number;
	height?: string | number;
	justify?: 'flex-start' | 'center' | 'flex-end';
	position?: React.CSSProperties['position'];
	zIndex?: number;
};

type BubbleBackgroundProps = WrapperProps & {
	image: string;
	alt?: string;
	flipX?: boolean;
	className?: string;
	imageClassName?: string;
	imageProps?: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'className'>;
};

const BubbleWrapper = styled.div<WrapperProps>(
	({
		top,
		bottom,
		left,
		right,
		width,
		height,
		justify = 'flex-start',
		position = 'absolute',
		zIndex = -1,
	}: WrapperProps) => [
		tw`w-full pointer-events-none flex`,
		position === 'absolute' && tw`absolute`,
		position === 'fixed' && tw`fixed`,
		position === 'relative' && tw`relative`,
		position === 'sticky' && tw`sticky`,
		justify === 'flex-start' && tw`justify-start`,
		justify === 'center' && tw`justify-center`,
		justify === 'flex-end' && tw`justify-end`,
		{
			top,
			bottom,
			left,
			right,
			width: width ?? '100%',
			height: height ?? 'fit-content',
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			zIndex,
		},
	]
);

const BubbleImage = styled.img<{ flipX?: boolean }>(({ flipX }: { flipX?: boolean }) => [
	tw`h-auto`,
	flipX && { transform: 'scaleX(-1)' },
]);

export const BubbleBackground: React.FC<BubbleBackgroundProps> = ({
	image,
	alt = '',
	flipX,
	className,
	imageClassName,
	imageProps,
	...wrapperProps
}) => {
	return (
		<BubbleWrapper {...wrapperProps} className={className}>
			<BubbleImage src={image} alt={alt} flipX={flipX} className={imageClassName} {...imageProps} />
		</BubbleWrapper>
	);
};

export default BubbleBackground;
