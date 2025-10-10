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
import ThemeFloatSwitch from './ThemeFloatSwitch';
import MenuIcon from '@mui/icons-material/Menu';

const GlassAppBar = styled(AppBar)(() => [
	tw`flex justify-center backdrop-blur-lg bg-white bg-opacity-70`,
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
	tw`flex mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-[9.3rem] lg:px-20 py-2 sm:py-4 lg:py-6 xl:py-9 justify-between items-center shadow-none`,
]);

const LogoContainer = styled(Box)(() => [
	tw`cursor-pointer flex items-center justify-center w-fit`,
]);

const DesktopLinks = styled(Box)(() => [
	tw`hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8 2xl:gap-11`,
]);

const DrawerToggleButton = styled(IconButton)(() => [
	tw`flex sm:hidden w-10 h-10 rounded-xl justify-center items-center text-[18px] font-semibold`,
	tw`bg-[var(--overlay-secondary-soft)] hover:bg-[var(--overlay-secondary-strong)] text-[var(--color-neutral-900)]`,
	{
		transition: 'background-color .2s ease, color .2s ease',
		'.dark &, [data-mui-color-scheme="dark"] &': {
			color: 'var(--color-neutral-50)',
			background: 'rgba(255,255,255,0.08)',
			'&:hover': { background: 'rgba(255,255,255,0.14)' },
		},
	},
]);

const MobileDrawer = styled(Drawer)(() => [
	css`
		& .MuiDrawer-paper {
			${tw`w-[min(90vw,320px)] rounded-[24px_0_0_24px] p-6 shadow-[var(--shadow-drawer)] flex flex-col gap-6`};
			background: var(--color-surface-card, rgba(255, 255, 255, 0.75));
			backdrop-filter: blur(18px) saturate(150%);
			-webkit-backdrop-filter: blur(18px) saturate(150%);
			transition: background-color 0.25s ease, backdrop-filter 0.25s ease;
		}
		.dark & .MuiDrawer-paper,
		[data-mui-color-scheme='dark'] & .MuiDrawer-paper {
			background: rgba(25, 28, 40, 0.72);
			border: 1px solid rgba(255, 255, 255, 0.08);
		}
	`,
]);

const DrawerContent = styled('div')(() => tw`flex h-full flex-col gap-6`);

const DrawerHeader = styled('div')(() => [tw`flex items-center justify-between`]);

const DrawerLogo = styled('img')(() => [tw`w-[112px] h-auto`]);

const DrawerCloseButton = styled(IconButton)(() => [
	tw`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-semibold`,
	tw`bg-[var(--overlay-secondary-soft)] text-[var(--color-neutral-900)] hover:bg-[var(--overlay-secondary-strong)]`,
	{
		transition: 'background-color .2s ease, color .2s ease',
		'.dark &, [data-mui-color-scheme="dark"] &': {
			color: 'var(--color-neutral-50)',
			background: 'rgba(255,255,255,0.08)',
			'&:hover': { background: 'rgba(255,255,255,0.14)' },
		},
	},
]);

const DrawerMenuLabel = styled(Typography)(() => [tw`text-[var(--color-text-muted)] font-medium`]);

const DrawerMenu = styled(List)(() => [tw`flex flex-col gap-2`]);

const DrawerMenuItem = styled(ListItemButton)(() => [
	tw`rounded-2xl px-4 py-3 text-[var(--color-text-strong)] hover:bg-[var(--overlay-secondary-soft)] [&.active]:bg-[var(--color-primary)] [&.active]:text-[var(--color-text-inverse)]`,
]);

const DrawerFooter = styled('div')(() => [tw`mt-auto`]);

const NavBar = () => {
	const { mode, systemMode } = useColorScheme();

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
						<NavLink to={'/'} className="h-16 flex items-center">
							<img
								src={isDarkMode ? './Main Logo.png' : './MainLogoBlue.png'}
								alt="Header "
								className="w-full h-auto"
							/>
						</NavLink>
					</LogoContainer>
					<DesktopLinks>
						{links.map((link) => {
							return (
								<NavLink
									className={
										'no-underline h-full flex py-5 hover:border-secondary  transition-all hover:-translate-y-1 hover:scale-110'
									}
									to={link.to}
									key={link.label}
								>
									<Typography variant="subtitle2" color="textPrimary">
										{link.label}
									</Typography>
								</NavLink>
							);
						})}

						<PinkButton
							variant="outlined"
							css={[tw`py-3 px-4 lg:py-3.5  md:px-10 ml-2`]}
							onClick={() => navigate('/contact')}
						>
							Contact
						</PinkButton>
						<ThemeFloatSwitch />
					</DesktopLinks>
					<DrawerToggleButton aria-label="open menu" onClick={() => setOpen(true)}>
						<MenuIcon />
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
									<span aria-hidden="true">×</span>
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
				</NavToolbar>
			</GlassAppBar>
		</section>
	);
};

export default NavBar;
