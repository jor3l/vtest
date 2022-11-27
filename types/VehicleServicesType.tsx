import { ServiceType } from "./ServiceType"

export interface VehicleServicesType {
    communicationStatus: string
    services: ServiceType[]
}