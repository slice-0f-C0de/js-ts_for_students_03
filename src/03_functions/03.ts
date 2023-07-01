export type GovernmentBuildingType = {
    type: string,
    budget: number,
    staffCount: number,
    address: AddressType
}

export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number,
    street: StreetType
}

export type HouseType = {
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: GovernmentBuildingType[],
    citizensNumber: number
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (houses: HouseType) => {
    houses.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, stuffCountToFire: number) => {
    building.staffCount -= stuffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingType, stuffCountToFire: number) => {
    building.staffCount += stuffCountToFire
}