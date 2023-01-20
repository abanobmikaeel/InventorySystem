import React from 'react'
import InventoryTable from '../components/InventoryTable'
import { InventoryProvider } from '../contexts/InventoryProvider'

function inventory(props: any) {
	return (
		<InventoryProvider>
			<InventoryTable />
		</InventoryProvider>
	)
}

export default inventory
