// решение с помощью HOC

import { useState } from "react"

export const Block1 = withSharedLogic(({ imgSrc, imgAlt }) => <img src={imgSrc} alt={imgAlt} />)

export const Block2 = withSharedLogic(({ content }) => <p>{content}</p>)

export const Block3 = withSharedLogic(({ userData }) => (
	<address>
		country: {userData.country}, street: {userData.street}
	</address>
))

export function withSharedLogic(Component) {
	return function WrappedComponent({ mouseEnterCallbak, ...props }) {
		const [isActive, setActive] = useState(false)
		const mouseEnterHandler = useCallback(() => {
			setActive(true)
			mouseEnterCallbak()
		}, [mouseEnterCallbak])

		return (
			<div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
				<Component {...props} />
			</div>
		)
	}
}

// использование

// <Block1
//      mouseEnterCallbak={() => console.log("hi from Block1")}
//      imgSrc="image.jpg"
//      imgAlt="an image"
// />

// <Block2
//      mouseEnterCallbak={() => console.log("hi from Block2")}
//      content="Some text content"
// />

// <Block3
//      mouseEnterCallbak={() => console.log("hi from Block3")}
//      userData={{ country: "USA", street: "5th Avenue" }}
// />
