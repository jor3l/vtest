import {
	Alert,
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

import SensorsIcon from '@mui/icons-material/Sensors';
import SensorsOffIcon from '@mui/icons-material/SensorsOff';
import VehicleInfo from '../../components/VehicleInfo';
import VehicleServices from '../../components/VehicleServices';

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
	}, [vehiclesList]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Box>
			<Box mb={3}>
				<Breadcrumbs aria-label='breadcrumb'>
					<Link color='inherit' href='/'>
						Vehicles
					</Link>
					<Typography color='text.primary'>{vehicle ? vehicle.name : loading}</Typography>
				</Breadcrumbs>
			</Box>
			<Divider />
			<h2>Vehicle Details</h2>
			{vehicleInfoError && <Alert severity='error'>Failed to fetch vehicle information.</Alert>}
			{!vehicleInfoError && <VehicleInfo vehicleInfo={vehicleInfo} loading={loading} />}
			<Divider />
			<h2>Services {vehicleServices && vehicleServices.communicationStatus === 'ACTIVE' ? on : off}</h2>
			{vehicleServicesLoading && (
				<Box pt={5}>
					<CircularProgress />
				</Box>
			)}
			{vehicleServices && vehicleServices.communicationStatus !== 'ACTIVE' && (
				<Alert severity='error'>The vehicle&apos;s communication system is not active.</Alert>
			)}
			{vehicleServices && vehicleServices.services && <VehicleServices services={vehicleServices.services} />}
			{vehicleServicesError && <Alert severity='error'>Failed to fetch vehicle services.</Alert>}
		</Box>
	);
}
