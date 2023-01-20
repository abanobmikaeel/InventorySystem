import { createContext } from 'react'

let initialValue: any = undefined
export const InventoryContext = createContext({ inventoryData: initialValue })
