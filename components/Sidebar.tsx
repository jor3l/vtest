import { Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import GarageIcon from '@mui/icons-material/Garage';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import SettingsIcon from '@mui/icons-material/Settings';
import Image from 'next/image';
import volvoLogo from '../public/logo.png';
import Link from 'next/link';

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
							<ListItem>
								<ListItemIcon>
									<GarageIcon />
								</ListItemIcon>
								<ListItemText>Vehicles</ListItemText>
							</ListItem>
						</Link>
						<Link href='/services'>
							<ListItem>
								<ListItemIcon>
									<CarRepairIcon />
								</ListItemIcon>
								<ListItemText>Services</ListItemText>
							</ListItem>
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
