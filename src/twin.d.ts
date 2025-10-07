import 'twin.macro';
import styledImport, { css as cssImport } from 'styled-components/macro';

declare module 'twin.macro' {
	const styled: typeof styledImport;
	const css: typeof cssImport;
	export { styled, css };
}
