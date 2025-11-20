import type { Dispatch, SetStateAction } from "react"
import { useEffect, useRef } from "react"
import "./mobileNavMenuStyles.css"

export const MobileNavMenu = ({isMenuOpen, setIsMenuOpen}: {isMenuOpen: boolean, setIsMenuOpen: Dispatch<SetStateAction<boolean>>}) => {
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickAway = (event: MouseEvent | TouchEvent) => {
			const target = event.target as Node
			const menuButton = document.querySelector(".navbar__menuButton")
			
			// Don't close if clicking the menu button or inside the menu
			if (
				menuButton?.contains(target) ||
				menuRef.current?.contains(target)
			) {
				return
			}
			
			setIsMenuOpen(false)
		}

		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickAway)
			document.addEventListener("touchstart", handleClickAway)
		}

		return () => {
			document.removeEventListener("mousedown", handleClickAway)
			document.removeEventListener("touchstart", handleClickAway)
		}
	}, [isMenuOpen, setIsMenuOpen])

	return (
		<div ref={menuRef} className={`mobileNavMenu ${isMenuOpen ? "mobileNavMenu--open" : ""}`}>
			<ul className="mobileNavMenu__links">
				<li className="mobileNavMenu__link">
					<a href="#features" onClick={() => setIsMenuOpen(false)}>
						Features
					</a>
				</li>
				<li className="mobileNavMenu__link">
					<a href="#pricing" onClick={() => setIsMenuOpen(false)}>
						Pricing
					</a>
				</li>
				<li className="mobileNavMenu__link">
					<a href="#contact" onClick={() => setIsMenuOpen(false)}>
						Contact
					</a>
				</li>
			</ul>
			<a
				href="/#signup"
				target="_blank"
				rel="noopener"
				className="mobileNavMenu__signupButton"
				onClick={() => setIsMenuOpen(false)}
			>
				Sign Up
			</a>
		</div>
	)
}