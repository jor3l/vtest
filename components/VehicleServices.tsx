import { Grid, ListItemText } from '@mui/material';
import { ServiceType } from '../types/ServiceType';
import TimeAgo from 'react-timeago';

interface Props {
	services: ServiceType[];
}

export default function VehicleServices(props: Props) {
	const { services } = props;

	return (
		<Grid container columns={{ xs: 1, sm: 3, md: 3 }} spacing={3}>
			{services.map((service, index) => (
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
	);
}
