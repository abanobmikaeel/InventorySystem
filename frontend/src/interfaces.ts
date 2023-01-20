export interface Generator {
	name: number
	yearBuilt: string
	unitsGenerated: string
	unit: string
	owner: User
	body: string
}

export interface User {
	name: string
	uuid: string
}
