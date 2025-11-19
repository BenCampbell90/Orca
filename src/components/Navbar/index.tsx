import { MobileNavMenu } from "@/components/Navbar/components/mobileNavMenu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./navbarStyles.css";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navbar">
			<img src="/logo.webp" alt="Orca" className="navbar__logo" />
			<button
				type="button"
				className="navbar__menuButton"
				onClick={toggleMenu}
				aria-label="Toggle menu"
				aria-expanded={isMenuOpen}
			>
				{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
			</button>
			<div className="navbar__linksContainer">
				<ul className="navbar__links">
					<li className="navbar__link">
						<a href="#features">Features</a>
					</li>
					<li className="navbar__link">
						<a href="#pricing">Pricing</a>
					</li>
					<li className="navbar__link">
						<a href="#contact">Contact</a>
					</li>
				</ul>
				<a
					href="/#signup"
					target="_blank"
					rel="noopener"
					className="navbar__signupButton"
				>
					Sign Up
				</a>
			</div>
			{isMenuOpen && 
				<MobileNavMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			}
		</nav>
	);
};
