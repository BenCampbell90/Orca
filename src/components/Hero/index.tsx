import { OrcaModel } from "@/components/Hero/components/orcaModel/orcaModel";
import { ChevronDown } from "lucide-react";
import "./heroStyles.css";

export const Hero = () => {
	

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
			<a
				className="hero__scrollIndicator"
				aria-label="Scroll to features"
				href="#features"
			>
				<ChevronDown size={32} />
			</a>
		</section>
	);
};
