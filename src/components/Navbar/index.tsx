import "./navbarStyles.css";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<img src="/logo.webp" alt="Orca" className="navbar__logo" />
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
		</nav>
	);
};
