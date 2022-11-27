import { Button, Card, CardActions, CardContent, Grid, Skeleton } from '@mui/material';
import Link from 'next/link';
import { VehicleType } from '../types/VehicleType';

interface Props {
	vehicle?: VehicleType;
	skeleton?: boolean;
}

export default function Vehicle(props: Props) {
	const { vehicle, skeleton } = props;
	return (
		<Grid item xs={2} sm={2} md={2} style={{ height: '100%' }}>
			{skeleton && (
				<Card elevation={4}>
					<CardContent>
						<Skeleton variant='rectangular' animation='wave' />
					</CardContent>
					<CardActions>
						<Skeleton variant='rectangular' animation='wave' />
					</CardActions>
				</Card>
			)}
			{vehicle && (
				<Card elevation={4}>
					<CardContent>{vehicle.name || 'Unnamed vehicle'}</CardContent>
					<CardActions>
						<Link href={`/vehicles/${vehicle.id}`}>
							<Button size='small'>View Details</Button>
						</Link>
					</CardActions>
				</Card>
			)}
		</Grid>
	);
}
