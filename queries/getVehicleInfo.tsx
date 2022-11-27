import { VehicleInfoType } from '../types/VehicleInfoType';

export default async function getVehicleInfo(id: string): Promise<VehicleInfoType | null> {
	try {
		const response = await fetch(`${process.env.API_HOST}/vehicle/info?id=${id}`);
		return (await response.json()) as VehicleInfoType;
	} catch (error) {
		console.error(error);
		return null;
	}
}
