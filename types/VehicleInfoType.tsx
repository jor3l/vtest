export enum EngineStatuses {
	OK = 'OK',
	FAILURE = 'FAILURE',
}

export enum Countries {
	Japan = 'Japan',
	Colombia = 'Colombia',
}

export interface VehicleInfoType {
	msidn: string;
	engineStatus: keyof typeof EngineStatuses;
	fleet: string;
	brand: string;
	countryOfOperation: keyof typeof Countries;
	chassisNumber: string;
	cassisSeries: string;
}
