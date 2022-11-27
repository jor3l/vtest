import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

interface Props {
	drawerWidth: number;
	handleDrawerToggle: () => void;
	title: string | null;
}

const AppNav = (props: Props) => {
	const { drawerWidth, handleDrawerToggle, title } = props;

	return (
		<AppBar
			position='fixed'
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
			}}
			style={{
				background: '#2E3B55',
			}}
		>
			<Toolbar>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					edge='start'
					onClick={handleDrawerToggle}
					sx={{ mr: 2, display: { sm: 'none' } }}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6' noWrap component='div'>
					{title || 'Volvo'}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default AppNav;
