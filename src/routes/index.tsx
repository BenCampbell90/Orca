import { Navbar } from "@/components/Navbar";
import { SectionDivider } from "@/components/SectionDivider";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { createFileRoute } from "@tanstack/react-router";
import "./appStyles.css";

/**********************************************************************************************************
 *   ROUTE START
 **********************************************************************************************************/
export const Route = createFileRoute("/")({
	component: App,
});

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
function App() {
	/***** RENDER *****/
	return (
		<main className="app-container">
			<Navbar />
			<div className="app-content">
				<Hero />
				<Features />
				<SectionDivider />
				<Pricing />
				<SectionDivider />
				<Testimonials />
				<SectionDivider />
				<FAQ />
				<SectionDivider />
				<CTA />
				<SectionDivider />
				<Contact />
				<Footer />
			</div>
		</main>
	);
}
