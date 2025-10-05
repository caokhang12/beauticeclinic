/// <reference types="vite/client" />

declare module 'twin.macro' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const styled: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const css: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const theme: any;
	export { styled, css, theme };
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const tw: any;
	export default tw;
}
