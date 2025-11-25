import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./ctaStyles.css";

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const CTA = () => {
    /***** STATE *****/
	const ref = useRef(null);

    /***** HOOKS *****/
    const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px", amount: 0.2 });

	/***** RENDER *****/
	return (
		<section id="cta" className="cta" ref={ref}>
			<div className="cta__container">
				<motion.div
					className="cta__content"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<h2 className="cta__title">Sound Good?</h2>
					<p className="cta__description">
						ORCA offers an inexpensive monthly or annual subscription to support
						local business best. If you're ready to stop using that spreadsheet
						and take control of your business, let's get started.
					</p>
				</motion.div>
				<motion.div
					className="cta__buttonWrapper"
					initial={{ opacity: 0, x: 20 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					<a
						href="https://app.orca-management.au"
						target="_blank"
						rel="noopener noreferrer"
						className="cta__button"
					>
						Let's Go
					</a>
				</motion.div>
			</div>
		</section>
	);
};

