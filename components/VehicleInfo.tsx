import { Grid, ListItemText } from '@mui/material';

export default function VehicleInfo({ vehicleInfo, loading }) {
	return (
		<Grid container columns={{ xs: 2, sm: 3, md: 3 }} spacing={3} mb={5}>
			<Grid item xs={1}>
				<ListItemText primary={vehicleInfo ? vehicleInfo.brand : loading} secondary='Brand' />
			</Grid>
			<Grid item xs={1}>
				<ListItemText primary={vehicleInfo ? vehicleInfo.cassisSeries : loading} secondary='Chassis Series' />
			</Grid>
			<Grid item xs={1}>
				<ListItemText primary={vehicleInfo ? vehicleInfo.chassisNumber : loading} secondary='Chassis Number' />
			</Grid>
			<Grid item xs={1}>
				<ListItemText primary={vehicleInfo ? vehicleInfo.countryOfOperation : loading} secondary='Country' />
			</Grid>
			<Grid item xs={1}>
				<ListItemText primary={vehicleInfo ? vehicleInfo.engineStatus : loading} secondary='Engine Status' />
			</Grid>
			<Grid item xs={1}>
				<ListItemText primary={vehicleInfo ? vehicleInfo.fleet : loading} secondary='Fleet' />
			</Grid>
			<Grid item xs={1}>
				<ListItemText primary={vehicleInfo ? vehicleInfo.msidn : loading} secondary='Contact Number' />
			</Grid>
		</Grid>
	);
}
