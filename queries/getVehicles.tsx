import VehicleList from '../types/VehicleList';

export default async function getVehicles(): Promise<VehicleList> {
	try {
		const response = await fetch(`${process.env.API_HOST}/vehicle/list`);
		return (await response.json()) as VehicleList;
	} catch (error) {
		console.log(error);
		throw new Error();
	}
}