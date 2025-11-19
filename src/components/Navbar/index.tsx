import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./navbarStyles.css";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleLinkClick = () => {
		setIsMenuOpen(false);
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
			<div
				className={`navbar__linksContainer ${isMenuOpen ? "navbar__linksContainer--open" : ""}`}
			>
				<ul className="navbar__links">
					<li className="navbar__link">
						<a href="#features" onClick={handleLinkClick}>
							Features
						</a>
					</li>
					<li className="navbar__link">
						<a href="#pricing" onClick={handleLinkClick}>
							Pricing
						</a>
					</li>
					<li className="navbar__link">
						<a href="#contact" onClick={handleLinkClick}>
							Contact
						</a>
					</li>
				</ul>
				<a
					href="/#signup"
					target="_blank"
					rel="noopener"
					className="navbar__signupButton"
					onClick={handleLinkClick}
				>
					Sign Up
				</a>
			</div>
		</nav>
	);
};
