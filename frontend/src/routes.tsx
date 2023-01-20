import React from 'react'

import Login from './pages/login'
import Inventory from './pages/inventory'
import Home from './pages/home'

// This is a React Router v6 app
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function routes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/inventory" element={<Inventory />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}

export default routes
