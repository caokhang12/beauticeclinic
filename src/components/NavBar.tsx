import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Drawer,
	List,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material';
import { PinkButton } from './PinkButton';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import { useColorScheme } from '@mui/material/styles';

const GlassAppBar = styled(AppBar)(() => [
	tw`flex backdrop-blur-lg bg-[var(--glass-background)] bg-opacity-20 justify-center `,
]);

const NavToolbar = styled(Toolbar)(() => [
	tw`flex mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[150px] py-0 sm:py-4 lg:py-6 xl:py-9 justify-between items-center shadow-none`,
]);

const LogoContainer = styled(Box)(() => [
	tw`cursor-pointer flex items-center justify-center w-fit`,
]);

const DesktopLinks = styled(Box)(() => [
	tw`hidden sm:flex items-center gap-4 md:gap-6 lg:gap-[45px]`,
]);

const DrawerToggleButton = styled(IconButton)(() => [tw`flex sm:hidden`]);

const MobileDrawer = styled(Drawer)(() => [
	css`
		& .MuiDrawer-paper {
			${tw`w-[min(90vw,320px)] rounded-[24px_0_0_24px] p-6 shadow-[var(--shadow-drawer)] bg-[var(--color-surface-card)] flex flex-col gap-6`}
		}
	`,
]);

const DrawerContent = styled('div')(() => tw`flex h-full flex-col gap-6`);

const DrawerHeader = styled('div')(() => [tw`flex items-center justify-between`]);

const DrawerLogo = styled('img')(() => [tw`w-[112px] h-auto`]);

const DrawerCloseButton = styled(IconButton)(() => [
	tw`bg-[var(--overlay-secondary-soft)] text-[var(--color-neutral-950)] hover:bg-[var(--overlay-secondary-strong)]`,
]);

const DrawerMenuLabel = styled(Typography)(() => [tw`text-[var(--color-text-muted)] font-medium`]);

const DrawerMenu = styled(List)(() => [tw`flex flex-col gap-2`]);

const DrawerMenuItem = styled(ListItemButton)(() => [
	tw`rounded-2xl px-4 py-3 text-[var(--color-text-strong)] hover:bg-[var(--overlay-secondary-soft)] [&.active]:bg-[var(--color-primary)] [&.active]:text-[var(--color-text-inverse)]`,
]);

const DrawerFooter = styled('div')(() => [tw`mt-auto`]);

const NavBar = () => {
	const { mode, setMode, systemMode } = useColorScheme();

	// resolvedMode: nếu mode = 'system' thì dùng systemMode
	const resolvedMode = mode === 'system' ? systemMode : mode;
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const links = [
		{ label: 'Home+', to: '/home2' },
		{ label: 'About', to: '/about' },
		{ label: 'Service', to: '/service' },
		{ label: 'Gallery', to: '/gallery' },
		{ label: 'Blog', to: '/blog' },
	];

	return (
		<section>
			<GlassAppBar elevation={0} color="default" position="fixed">
				<NavToolbar disableGutters>
					<LogoContainer>
						<NavLink to={'/'}>
							<img src="/MainLogoBlue.png" alt="Header " className="" />
						</NavLink>
					</LogoContainer>
					<DesktopLinks>
						{links.map((link) => {
							return (
								<NavLink className={'no-underline'} to={link.to} key={link.label}>
									<Typography variant="subtitle2" color="textPrimary" className="">
										{link.label}
									</Typography>
								</NavLink>
							);
						})}

						<PinkButton variant="outlined" css={[tw`py-2 px-4 md:py-[14px] md:px-10 ml-2`]}>
							Contact
						</PinkButton>
					</DesktopLinks>

					<DrawerToggleButton aria-label="open menu" onClick={() => setOpen(true)}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
							<path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
							<path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
						</svg>
					</DrawerToggleButton>

					<MobileDrawer
						anchor="right"
						open={open}
						onClose={() => setOpen(false)}
						ModalProps={{ keepMounted: true }}
					>
						<DrawerContent>
							<DrawerHeader>
								<DrawerLogo src="/MainLogoBlue.png" alt="Beautice" />
								<DrawerCloseButton onClick={() => setOpen(false)} aria-label="close menu">
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M13.5 4.5L4.5 13.5"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M4.5 4.5L13.5 13.5"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
									</svg>
								</DrawerCloseButton>
							</DrawerHeader>

							<DrawerMenuLabel variant="subtitle2">Menu</DrawerMenuLabel>

							<DrawerMenu disablePadding>
								{links.map((l) => (
									<DrawerMenuItem
										key={l.to}
										component={NavLink}
										to={l.to}
										onClick={() => setOpen(false)}
									>
										<ListItemText
											primary={l.label}
											primaryTypographyProps={{ className: 'font-semibold' }}
										/>
									</DrawerMenuItem>
								))}
							</DrawerMenu>

							<DrawerFooter>
								<PinkButton
									fullWidth
									onClick={() => {
										navigate('/contact');
										setOpen(false);
									}}
									css={[tw`py-3`]}
								>
									Contact
								</PinkButton>
							</DrawerFooter>
						</DrawerContent>
					</MobileDrawer>
					<button
						className="absolute right-4 top-4 border rounded"
						onClick={() => {
							setMode(resolvedMode === 'dark' ? 'light' : 'dark');
						}}
					>
						Toggle {resolvedMode === 'dark' ? 'Light' : 'Dark'}
					</button>
				</NavToolbar>
			</GlassAppBar>
		</section>
	);
};

export default NavBar;
