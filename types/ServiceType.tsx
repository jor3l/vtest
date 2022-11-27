enum ServiceStatuses {
    "ACTIVE",
    "DEACTIVATED"
}

export interface ServiceType {
    serviceName: string
    status: keyof typeof ServiceStatuses
    lastUpdate: Date
}