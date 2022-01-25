import { gsap } from "gsap"
import { FC, useEffect, useRef } from "react"

import { Outlet, useLocation } from "react-router-dom"

import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Header } from "~/components"

export const WelcomeLayout: FC = () => {
	const location = useLocation()
	const headerRef = useRef(null)
	const contentRef = useRef(null)

	useEffect(() => {
		gsap.to([headerRef.current, contentRef.current], { opacity: 1 })
	})

	return (
		<>
			<div style={{ opacity: 0 }} ref={headerRef}>
				<Header />
			</div>
			<div style={{ opacity: 0 }} ref={contentRef}>
				<TransitionGroup component={null}>
					<CSSTransition key={location.key} classNames="fade" timeout={300}>
						<Outlet />
					</CSSTransition>
				</TransitionGroup>
			</div>
		</>
	)
}
