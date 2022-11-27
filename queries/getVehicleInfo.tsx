import { VehicleInfoType } from '../types/VehicleInfoType';

export default async function getVehicleInfo(id: string): Promise<VehicleInfoType> {
	const response = await fetch(`${process.env.API_HOST}/vehicle/info?id=${id}`);
	if (!response.ok) throw new Error();

	return (await response.json()) as VehicleInfoType;
}
