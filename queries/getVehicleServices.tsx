import { VehicleServicesType } from '../types/VehicleServicesType';

export default async function getVehicleServices(id: string): Promise<VehicleServicesType | null> {
	try {
		const response = await fetch(`${process.env.API_HOST}/vehicle/services?id=${id}`);
		return (await response.json()) as VehicleServicesType;
	} catch (error) {
		console.error(error);
		return null;
	}
}
