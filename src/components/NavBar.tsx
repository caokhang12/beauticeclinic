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
	Switch,
} from '@mui/material';
import { PinkButton } from './PinkButton';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, type ChangeEvent } from 'react';
import tw, { styled, css } from 'twin.macro';
import { useColorScheme } from '@mui/material/styles';

const GlassAppBar = styled(AppBar)(() => [
	tw`flex justify-center backdrop-blur-lg bg-amber-50	 bg-opacity-90`,
	{
		transition: 'background-color 200ms ease, backdrop-filter 200ms ease',
		'.dark &, [data-mui-color-scheme="dark"] &': {
			backgroundColor: 'rgba(15,18,32,0.32)',
			backdropFilter: 'blur(14px) saturate(140%)',
			WebkitBackdropFilter: 'blur(14px) saturate(140%)',
			borderBottom: '1px solid rgba(255,255,255,0.08)',
		},
	},
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

const ModeSwitch = styled(Switch)(() => [tw`absolute right-10 top-1/2 -translate-y-1/2`]);

const NavBar = () => {
	const { mode, setMode, systemMode } = useColorScheme();

	const resolvedMode = mode === 'system' ? systemMode : mode;
	const isDarkMode = resolvedMode === 'dark';
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
			<GlassAppBar elevation={0} color={isDarkMode ? 'default' : 'transparent'} position="fixed">
				<NavToolbar disableGutters>
					<LogoContainer>
						<NavLink to={'/beauticeclinic'}>
							<img
								src={isDarkMode ? './Main Logo.png' : './MainLogoBlue.png'}
								alt="Header "
								className=""
							/>
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
								<DrawerLogo
									src={isDarkMode ? './Main Logo.png' : './MainLogoBlue.png'}
									alt="Beautice"
								/>
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
										<ListItemText primary={l.label} />
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
					<ModeSwitch
						color="secondary"
						checked={Boolean(isDarkMode)}
						onChange={(_event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
							setMode(checked ? 'dark' : 'light');
						}}
						inputProps={{ 'aria-label': 'toggle color scheme' }}
						title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
					/>
				</NavToolbar>
			</GlassAppBar>
		</section>
	);
};

export default NavBar;
