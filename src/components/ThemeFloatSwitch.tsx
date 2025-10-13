import { Box, Fab, Paper, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import { useContext, useState } from 'react';
import tw, { styled } from 'twin.macro';
import CloseIcon from '@mui/icons-material/Close';
import ColorLensColor from '@mui/icons-material/ColorLens';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';
import { ThemeContext } from '../contexts/themeContext';
import { COLORS } from '../themes/theme';

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
	const { mode, setMode, systemMode } = useColorScheme();
	const resolvedMode = mode === 'system' ? systemMode : mode;
	const [open, setOpen] = useState(false);
	const { setColorScheme } = useContext(ThemeContext);

	const handleColorChange = (index: number) => {
		setColorScheme(index);
		localStorage.setItem('theme-color-index', index.toString());
	};

	const handleReset = () => {
		setColorScheme(0);
		setMode('system');
	};

	return (
		<FixedWrap>
			<TriggerFab size="small" color="primary" onClick={() => setOpen(!open)}>
				{open ? <CloseIcon /> : <ColorLensColor />}
			</TriggerFab>
			{open && (
				<Panel elevation={8}>
					<Stack gap={2.5}>
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
