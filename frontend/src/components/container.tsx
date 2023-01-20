import React, { PropsWithChildren } from 'react'
import NavBar from './NavBar'

function Container(props: PropsWithChildren) {
	return (
		<>
			<NavBar />
			{props.children}
		</>
	)
}

export default Container
