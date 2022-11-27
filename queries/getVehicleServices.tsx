import { VehicleServicesType } from '../types/VehicleServicesType';

export default async function getVehicleServices(id: string): Promise<VehicleServicesType> {
	const response = await fetch(`${process.env.API_HOST}/vehicle/services?id=${id}`);
	if (!response.ok) throw new Error();

	return (await response.json()) as VehicleServicesType;
}
