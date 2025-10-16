import {
	Box,
	Fab,
	Paper,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
	IconButton,
} from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import { useContext, useState } from 'react';
import tw, { styled } from 'twin.macro';
import CloseIcon from '@mui/icons-material/Close';
import ColorLensColor from '@mui/icons-material/ColorLens';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { ThemeContext } from '../contexts/themeContext';
import { COLORS } from '../themes/theme';
import { AuthContext } from '../contexts/authContext';
import ProfileDrawer from './ProfileDrawer';

const FixedWrap = styled(Box)(() => [tw`relative flex flex-col gap-3`]);

const TriggerFab = styled(Fab)(() => [
	tw`shadow-lg  transition duration-200 rounded-full transform hover:scale-110`,
]);

const Panel = styled(Paper)(() => [
	tw`p-4 rounded-2xl shadow-xl border absolute top-14 right-0 overflow-hidden`,
]);

const ColorButton = styled(Box)(() => [
	tw`w-8 h-8 rounded-full cursor-pointer border-2 border-transparent
		hover:scale-110 transition-transform duration-200 `,
]);

export const ThemeFloatSwitch = () => {
	const [open, setOpen] = useState(false);
	const [profileOpen, setProfileOpen] = useState(false);
	const { mode, setMode, systemMode } = useColorScheme();
	const { setColorScheme } = useContext(ThemeContext);
	const resolvedMode = mode === 'system' ? systemMode : mode;
	const { user, logout } = useContext(AuthContext);

	const handleColorChange = (index: number) => {
		setColorScheme(index);
		localStorage.setItem('theme-color-index', index.toString());
	};

	const handleReset = () => {
		setColorScheme(0);
		setMode('system');
	};

	const handleProfileOpen = () => {
		setProfileOpen(true);
	};

	return (
		<FixedWrap>
			<TriggerFab size="small" color="primary" onClick={() => setOpen(!open)}>
				{open ? <CloseIcon /> : <ColorLensColor />}
			</TriggerFab>
			{open && (
				<Panel elevation={8}>
					<ProfileDrawer open={profileOpen} onClose={() => setProfileOpen(false)} />
					<Stack gap={2.5}>
						{user && (
							<Stack direction="row" alignItems="center" justifyContent="space-between">
								<Typography variant="subtitle1" fontWeight={600}>
									Xin chào, {user?.userName}
								</Typography>
								<IconButton size="large" color="info" onClick={() => handleProfileOpen()}>
									<PermIdentityOutlinedIcon />
								</IconButton>
								<IconButton size="small" color="error" onClick={logout}>
									<LogoutIcon fontSize="small" />
								</IconButton>
							</Stack>
						)}
						<Box>
							<Typography variant="subtitle1" fontWeight={600} mb={1}>
								Theme
							</Typography>
							<ToggleButtonGroup
								size="small"
								exclusive
								color="primary"
								value={mode}
								onChange={(_, val) => val && setMode(val)}
							>
								<ToggleButton value="light">
									<LightModeIcon fontSize="small" /> Light
								</ToggleButton>
								<ToggleButton value="dark">
									<DarkModeIcon fontSize="small" /> Dark
								</ToggleButton>
								<ToggleButton value="system">
									<SettingsIcon fontSize="small" /> Auto
								</ToggleButton>
								<ToggleButton value="" onClick={handleReset}>
									<RestartAltIcon /> Reset
								</ToggleButton>
							</ToggleButtonGroup>
						</Box>

						<Box>
							<Typography variant="subtitle1" fontWeight={600} mb={1}>
								Colors
							</Typography>
							<Stack direction="row" gap={1.5} flexWrap="wrap">
								{COLORS.map((color, i) => {
									const isDark = resolvedMode === 'dark';
									const palette = isDark ? color.dark : color.light;
									return (
										<ColorButton
											key={i}
											onClick={() => handleColorChange(i)}
											title={color.name}
											sx={{
												background: `radial-gradient(circle, ${palette.secondary} 20%, ${palette.primary} 31%)`,
											}}
										/>
									);
								})}
							</Stack>
						</Box>
					</Stack>
				</Panel>
			)}
		</FixedWrap>
	);
};

export default ThemeFloatSwitch;
