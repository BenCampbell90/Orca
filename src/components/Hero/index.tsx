import { OrcaModel } from "@/components/Hero/components/orcaModel/orcaModel";
import { ChevronDown } from "lucide-react";
import "./heroStyles.css";

export const Hero = () => {
	const handleScrollToFeatures = () => {
		const featuresSection = document.getElementById("features");
		const appContainer = document.getElementById("app");

		if (featuresSection && appContainer) {
			const navbar = document.querySelector(".navbar");
			const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 100;
			const offset = navbarHeight + 20;

			const containerRect = appContainer.getBoundingClientRect();
			const elementRect = featuresSection.getBoundingClientRect();
			const elementPosition =
				elementRect.top - containerRect.top + appContainer.scrollTop;
			const offsetPosition = elementPosition - offset;

			appContainer.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="hero">
			<div className="hero__content">
				<h1 className="hero__title">Your Small Business Best Friend</h1>
				<OrcaModel />
				<p className="hero__description">
					ORCA is an industry-leading management system for Aussie small
					business. Fast, light, and refreshingly straightforward.
				</p>
			</div>
			<button
				type="button"
				className="hero__scrollIndicator"
				aria-label="Scroll to features"
				onClick={handleScrollToFeatures}
			>
				<ChevronDown size={32} />
			</button>
		</section>
	);
};
