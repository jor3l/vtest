import VehicleList from '../types/VehicleList';

export default async function getVehicles(): Promise<VehicleList> {
	const response = await fetch(`${process.env.API_HOST}/vehicle/list`);
	if (!response.ok) throw new Error();

	return (await response.json()) as VehicleList;
}
