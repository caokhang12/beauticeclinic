import { Avatar, Box, Divider, Drawer, Stack, Typography } from '@mui/material';

const ProfileDrawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
	return (
		<Drawer anchor="left" open={open} onClose={onClose}>
			<Box sx={{ width: 250, p: 2 }}>
				<Typography variant="h2" color="primary">
					Profile
				</Typography>
				<Divider sx={{ my: 2 }} />
				<Stack spacing={2}>
					<Avatar
						sx={{
							width: 64,
							height: 64,
						}}
					>
						JD
					</Avatar>
					<Typography variant="body1">Username: johndoe</Typography>
					<Typography variant="body1">Email: johndoe@example.com</Typography>
					{/* Add more profile info as needed */}
				</Stack>
			</Box>
		</Drawer>
	);
};

export default ProfileDrawer;
