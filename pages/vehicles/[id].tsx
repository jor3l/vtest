import {
	Breadcrumbs,
	Chip,
	CircularProgress,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemText,
	Skeleton,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getVehicleInfo from '../../queries/getVehicleInfo';
import getVehicles from '../../queries/getVehicles';
import getVehicleServices from '../../queries/getVehicleServices';
import { VehicleType } from '../../types/VehicleType';
import TimeAgo from 'react-timeago';

import SensorsIcon from '@mui/icons-material/Sensors';
import SensorsOffIcon from '@mui/icons-material/SensorsOff';

interface Props {
	setTitle: (title: string) => void;
}

const loading = <Skeleton variant='rectangular' animation='wave' width='80%' />;
const on = <SensorsIcon color='success' size='small' />;
const off = <SensorsOffIcon color='disabled' size='small' />;

export default function VehicleView(props: Props) {
	const router = useRouter();
	const { id } = router.query;
	const { setTitle } = props;
	const [vehicle, setVehicle] = useState<VehicleType | null>(null);
	const { data: vehiclesList, isLoading, error } = useQuery({ queryKey: ['listVehicles'], queryFn: getVehicles });

	const {
		data: vehicleInfo,
		isLoading: vehicleInfoLoading,
		error: vehicleInfoError,
	} = useQuery({ queryKey: ['vehicleInfo', id], queryFn: () => getVehicleInfo(id as string) });

	const {
		data: vehicleServices,
		isLoading: vehicleServicesLoading,
		error: vehicleServicesError,
	} = useQuery({ queryKey: ['vehicleServices', id], queryFn: () => getVehicleServices(id as string) });

	useEffect(() => {
		const vehicle = vehiclesList?.vehicles.find((vehicle: VehicleType) => vehicle.id === id);
		if (vehicle) {
			setVehicle(vehicle);
			setTitle(`${vehicle.name || 'Unnamed Vehicle'}'s detail view`);
		}
	}, [vehiclesList]);

	return (
		<Box>
			<Breadcrumbs aria-label='breadcrumb' mb={3}>
				<Link color='inherit' href='/'>
					Vehicles
				</Link>
				<Typography color='text.primary'>{vehicle ? vehicle.name : loading}</Typography>
			</Breadcrumbs>
			<h3>Vehicle Details</h3>
			<Divider />
			<List style={{ paddingBottom: 0 }}>
				<ListItem>
					<ListItemText primary={vehicleInfo ? vehicleInfo.brand : loading} secondary='Brand' />
					<ListItemText
						primary={vehicleInfo ? vehicleInfo.cassisSeries : loading}
						secondary='Chassis Series'
					/>
					<ListItemText
						primary={vehicleInfo ? vehicleInfo.chassisNumber : loading}
						secondary='Chassis Number'
					/>
					<ListItemText
						primary={vehicleInfo ? vehicleInfo.countryOfOperation : loading}
						secondary='Country'
					/>
				</ListItem>
			</List>
			<List style={{ padding: 0 }}>
				<ListItem>
					<ListItemText
						primary={vehicleInfo ? vehicleInfo.engineStatus : loading}
						secondary='Engine Status'
					/>
					<ListItemText primary={vehicleInfo ? vehicleInfo.fleet : loading} secondary='Fleet' />
					<ListItemText primary={vehicleInfo ? vehicleInfo.msidn : loading} secondary='Contact Number' />
				</ListItem>
			</List>
			<h3>Services {vehicleServices && vehicleServices.communicationStatus === 'ACTIVE' ? on : off}</h3>
			<Divider />
			{vehicleServicesLoading && (
				<Box pt={5}>
					<CircularProgress />
				</Box>
			)}
			{vehicleServices && (
				<Grid container columns={3} spacing={3} mt={1}>
					{vehicleServices.services.map((service, index) => (
						<Grid item key={index} xs={1}>
							<ListItemText
								primary={service.serviceName}
								secondary={
									<>
										<b>Last Update:</b> <TimeAgo date={service.lastUpdate} />
									</>
								}
							/>
							<ListItemText
								secondary={
									<>
										<b>Status:</b> {service.status}
									</>
								}
							/>
						</Grid>
					))}
				</Grid>
			)}
		</Box>
	);
}
