import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import "./heroStyles.css";
import { OrcaCanvas } from "@/components/sections/Hero/components/orcaModel/orcaCanvas";

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Hero = () => {
	/***** RENDER *****/
	return (
		<section className="hero">
			<div className="hero__content">
				<h1 className="hero__title">Your Small Business Best Friend</h1>
				<OrcaCanvas />
				<p className="hero__description">
					ORCA is an industry-leading management system for Aussie small
					business. Fast, light, and refreshingly straightforward.
				</p>
			</div>
			<Link
			to='.'
				hash="features"
				className="hero__scrollIndicator"
				aria-label="Scroll to features"
			>
				<ChevronDown size={32} />
			</Link>
		</section>
	);
};
