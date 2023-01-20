import { useState, useEffect, PropsWithChildren } from 'react'
import useFetch from '../hooks/useFetch'
import { Generator } from '../interfaces'
import { InventoryContext } from './InventoryContext'

const url = `http://127.0.0.1:8000`

export const InventoryProvider = (props: PropsWithChildren) => {
	const [inventoryData, setInventoryData] = useState<Generator[] | undefined>(
		[]
	)
	const { data, error } = useFetch<Generator[]>(url)

	useEffect(() => {
		setInventoryData(data)
	}, [data])

	if (error) return <p>There is an error.</p>

	return (
		<InventoryContext.Provider value={{ inventoryData }}>
			{props.children}
		</InventoryContext.Provider>
	)
}
