import { features } from "./consts";

import "./featuresStyles.css";

export const Features = () => {
	return (
		<section className="features">
			<h2 className="features__title">Powerful Tools - All in One Place</h2>
			<div className="features__cardContainer">
				{features.map((feature) => {
					const IconComponent = feature.icon;
					return (
						<div className="feature__card" key={feature.title}>
							<h3 className="feature__title">{feature.title}</h3>
							<div className="feature__icon">
								<IconComponent size={30} color="grey" />
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
