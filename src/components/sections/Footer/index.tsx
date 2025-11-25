import "./footerStyles.css";

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Footer = () => {
	/***** RENDER *****/
	return (
		<footer className="footer">
			<div className="footer__content">
				<div className="footer__copyright">
					ORCA Management System © 2025. All rights reserved
				</div>
				<div className="footer__social">
					<a
						href="https://www.facebook.com/profile.php?id=81825417747"
						target="_blank"
						rel="noopener noreferrer"
						className="footer__socialIcon"
						title="Facebook"
						aria-label="Facebook"
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
						className="footer__socialIcon"
						title="Instagram"
						aria-label="Instagram"
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
			</div>

		</footer>
	);
};