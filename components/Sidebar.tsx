import { Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import GarageIcon from '@mui/icons-material/Garage';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import SettingsIcon from '@mui/icons-material/Settings';
import Image from 'next/image';
import volvoLogo from '../public/logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

function isSelected(paths: string[]) {
	const router = useRouter();
	return !!paths.includes(router.pathname);
}

export default function Sidebar() {
	return (
		<div style={{ height: '100%' }}>
			<Toolbar style={{ justifyContent: 'center' }}>
				<Image src={volvoLogo} alt='Volvo' height={60} />
			</Toolbar>
			<Grid
				style={{
					height: 'calc(100% - 64px)',
				}}
				container
				spacing={0}
				direction='column'
				justifyContent={'space-between'}
			>
				<Grid
					item
					style={{
						width: '100%',
					}}
				>
					<List>
						<Link href='/'>
							<ListItemButton selected={isSelected(['/', '/vehicles/[id]'])}>
								<ListItemIcon>
									<GarageIcon />
								</ListItemIcon>
								<ListItemText>Vehicles</ListItemText>
							</ListItemButton>
						</Link>
						<Link href='/services'>
							<ListItemButton selected={isSelected(['/services'])}>
								<ListItemIcon>
									<CarRepairIcon />
								</ListItemIcon>
								<ListItemText>Services</ListItemText>
							</ListItemButton>
						</Link>
					</List>
				</Grid>
				<Grid
					item
					style={{
						width: '100%',
					}}
				>
					<List
						style={{
							width: '100%',
						}}
					>
						<Divider />
						<ListItem>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText>Settings</ListItemText>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</div>
	);
}
