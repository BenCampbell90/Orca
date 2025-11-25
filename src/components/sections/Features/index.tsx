import { useAppViewport } from "@/hooks/useAppViewport"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { features } from "./consts"
import "./featuresStyles.css"
import { cardVariants, containerVariants } from "./motions"

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Features = () => {
	/***** STATE *****/
	const ref = useRef(null)
	const [selectedCard, setSelectedCard] = useState<string | null>(null)

	/***** HOOKS *****/
	const isMobile = useAppViewport(["sm"])
	const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px", amount: 0.2 })

	/***** RENDER *****/
	return (
		<section 
			id="features" 
			className="features" 
			ref={ref}
			onClick={() => setSelectedCard(null)}
		>
			<motion.h2
				className="features__title"
				initial={{ opacity: 0, y: -20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Powerful Tools - All in One Place
			</motion.h2>
			<motion.div
				className="features__cardContainer"
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
			>
				{features.map((feature) => {
					const IconComponent = feature.icon
					const isSelected = selectedCard === feature.title
					const isShrunken = selectedCard !== null && !isSelected
					
					return (
						<motion.div
							className={`feature__card ${isSelected ? "feature__card--expanded" : ""} ${isShrunken ? "feature__card--shrunken" : ""}`}
							key={feature.title}
							variants={cardVariants}
							animate={{
								scale: isSelected ? (isMobile ? 1 : 1.5) : isShrunken ? 0.7 : 1,
								opacity: !selectedCard || isSelected ? 1 : isShrunken ? 0.3 : 0.5,
							}}
							transition={{
								duration: 0.3,
								ease: "easeOut",
							}}
							onClick={(e) => {
								e.stopPropagation()
								setSelectedCard(isSelected ? null : feature.title)
							}}
						>
							<h3 className="feature__title">{feature.title}</h3>
							<div className="feature__icon">
								<IconComponent size={30} color="grey" />
							</div>
							{isSelected && (
								<p className="feature__description">
									{feature.description}
								</p>
							)}
						</motion.div>
					)
				})}
			</motion.div>
		</section>
	)
}
