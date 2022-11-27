import { Alert, Grid, Skeleton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import VehicleInfo from '../components/VehicleInfo';
import getVehicles from '../queries/getVehicles';
interface Props {
	setTitle: (title: string) => void;
}

export default function Home(props: Props) {
	const { setTitle } = props;
	useEffect(() => {
		setTitle('Vehicles');
	}, []);

	const { data, isLoading, error } = useQuery({ queryKey: ['listVehicles'], queryFn: getVehicles });

	return (
		<Grid container spacing={2} columns={{ xs: 2, sm: 4, md: 6 }}>
			{isLoading && (
				<>
					<VehicleInfo skeleton />
					<VehicleInfo skeleton />
					<VehicleInfo skeleton />
				</>
			)}
			{data && data.vehicles.map((vehicle) => <VehicleInfo key={vehicle.id} vehicle={vehicle} />)}
			{error && (
				<Grid item>
					<Alert severity='error'>An error ocurred while getting your vehicles.</Alert>
				</Grid>
			)}
		</Grid>
	);
}
