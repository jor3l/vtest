import { Alert, Grid, Skeleton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Vehicle from '../components/Vehicle';
import getVehicles from '../queries/getVehicles';
interface Props {
	setTitle: (title: string) => void;
}

export default function Home(props: Props) {
	const { setTitle } = props;
	useEffect(() => {
		setTitle('Vehicles');
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const { data, isLoading, error } = useQuery({ queryKey: ['listVehicles'], queryFn: getVehicles });

	return (
		<Grid container spacing={3} columns={{ xs: 2, sm: 4, md: 6 }}>
			{isLoading && (
				<>
					<Vehicle skeleton />
					<Vehicle skeleton />
					<Vehicle skeleton />
				</>
			)}
			{data && data.vehicles.map((vehicle) => <Vehicle key={vehicle.id} vehicle={vehicle} />)}
			{error && (
				<Grid item>
					<Alert severity='error'>An error ocurred while getting your vehicles.</Alert>
				</Grid>
			)}
		</Grid>
	);
}
