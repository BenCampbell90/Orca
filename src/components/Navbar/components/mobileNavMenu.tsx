import { ClickAwayListener } from "@mui/material"
import type { Dispatch, SetStateAction } from "react"
import "./mobileNavMenuStyles.css"

export const MobileNavMenu = ({isMenuOpen, setIsMenuOpen}: {isMenuOpen: boolean, setIsMenuOpen: Dispatch<SetStateAction<boolean>>}) => {
	return (
		<ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
			<div className={`mobileNavMenu ${isMenuOpen ? "mobileNavMenu--open" : ""}`}>
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
		</ClickAwayListener>
	)
}