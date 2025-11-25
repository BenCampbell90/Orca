import type { Dispatch, SetStateAction } from "react"
import "./mobileNavMenuStyles.css"

/**********************************************************************************************************
 *   TYPE DEFINITIONS
 **********************************************************************************************************/
type MobileNavMenu = React.FC<{
	isMenuOpen: boolean
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}>

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const MobileNavMenu: MobileNavMenu = ({isMenuOpen, setIsMenuOpen}) => {
	/***** RENDER *****/
	return (
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
			<div className="mobileNavMenu__social">
				<a
					href="https://www.facebook.com/profile.php?id=81825417747"
					target="_blank"
					rel="noopener noreferrer"
					className="mobileNavMenu__socialIcon"
					title="Facebook"
					aria-label="Facebook"
					onClick={() => setIsMenuOpen(false)}
				>
					<svg
						width="26"
						height="26"
						viewBox="0 0 256 256"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z" />
					</svg>
				</a>
				<a
					href="https://www.instagram.com/orca ms"
					target="_blank"
					rel="noopener noreferrer"
					className="mobileNavMenu__socialIcon"
					title="Instagram"
					aria-label="Instagram"
					onClick={() => setIsMenuOpen(false)}
				>
					<svg
						width="26"
						height="26"
						viewBox="0 0 256 256"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
					</svg>
				</a>
			</div>
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