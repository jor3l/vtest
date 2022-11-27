import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Drawer, Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import AppNav from '../components/AppNav';
import { Box } from '@mui/system';
import { useState } from 'react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const drawerWidth = 200;

export default function App({ Component, pageProps }: AppProps) {
	const container = typeof window !== 'undefined' ? () => window.document.body : undefined;
	const [mobileOpen, setMobileOpen] = useState(false);
	const [title, setTitle] = useState(null);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<QueryClientProvider client={queryClient}>
			<Box sx={{ display: 'flex' }}>
				<Head>
					<title>{title ? `${title} | Volvo` : 'Volvo'}</title>
				</Head>

				<Box
					component='nav'
					sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
					aria-label='mailbox folders'
				>
					<Drawer
						container={container}
						variant='temporary'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: 'block', sm: 'none' },
							'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
						}}
					>
						<Sidebar />
					</Drawer>

					<Drawer
						variant='permanent'
						sx={{
							display: { xs: 'none', sm: 'block' },
							'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
						}}
						open
					>
						<Sidebar />
					</Drawer>
				</Box>

				<AppNav drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} title={title} />
				<Box component='main' sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }} mt={10}>
					<Component {...pageProps} setTitle={setTitle} />
				</Box>
			</Box>
		</QueryClientProvider>
	);
}
