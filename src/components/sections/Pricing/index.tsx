import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import "./pricingStyles.css"


/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Pricing = () => {
	const ref = useRef(null)
	// Use once: false so animations can trigger even when navigating directly
	const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px", amount: 0.2 })

	/***** RENDER *****/
	return (
		<section 
			id="pricing" 
			className="pricing" 
			ref={ref}
		>
			{/* /***** TITLE *****/}
			<motion.h2
				className="pricing__title"
				initial={{ opacity: 0, y: -20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Pricing
			</motion.h2>
			{/* /***** DESCRIPTION *****/}
			<motion.p
				className="pricing__description"
				initial={{ opacity: 0, y: -20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
			>
				ORCA has a three-day free trial to see if it's right for you.
				Simple bookkeeping, invoicing, mileage, and BAS-ready reports. Built for Aussie small businesses. No tiers, no jargon, no BS.
			</motion.p>
			{/* /***** CARDS *****/}
			<motion.div
				className="pricing__cards"
				initial={{ opacity: 0, y: 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
			>
				<div className="pricing__card">
					<div className="pricing__cardHeader">
						<h3 className="pricing__cardTitle">Monthly</h3>
						<div className="pricing__cardPrice">
							<span className="pricing__cardAmount">$19</span>
							<span className="pricing__cardPeriod">/month</span>
						</div>
					</div>
				</div>
				<div className="pricing__card">
					<div className="pricing__cardHeader">
						<h3 className="pricing__cardTitle">Yearly</h3>
						<div className="pricing__cardPrice">
							<span className="pricing__cardAmount">$190</span>
							<span className="pricing__cardPeriod">/year</span>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

