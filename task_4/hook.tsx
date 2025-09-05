// решение с помощью хуков

import { useState, useCallback } from "react"

function useSharedLogic(callback) {
	const [isActive, setActive] = useState(false)
	const mouseEnterHandler = useCallback(() => {
		setActive(true)
		callback()
	}, [callback])

	return { isActive, mouseEnterHandler }
}

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
	const { isActive, mouseEnterHandler } = useSharedLogic(mouseEnterCallbak)

	return (
		<div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
			<img src={imgSrc} alt={imgAlt} />
		</div>
	)
}

export const Block2 = ({ mouseEnterCallbak, content }) => {
	const { isActive, mouseEnterHandler } = useSharedLogic(mouseEnterCallbak)

	return (
		<div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
			<p>{content}</p>
		</div>
	)
}

export const Block3 = ({ mouseEnterCallbak, userData }) => {
	const { isActive, mouseEnterHandler } = useSharedLogic(mouseEnterCallbak)

	return (
		<div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
			<address>
				country: {userData.country}, street: {userData.street}
			</address>
		</div>
	)
}
