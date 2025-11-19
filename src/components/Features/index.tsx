import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { features } from "./consts"
import { cardVariants, containerVariants } from "./motions"

import "./featuresStyles.css"

export const Features = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" })
	const [selectedCard, setSelectedCard] = useState<string | null>(null)

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
				{features.map((feature, index) => {
					const IconComponent = feature.icon
					const isSelected = selectedCard === feature.title
					const isShrunken = selectedCard !== null && !isSelected
					
					return (
						<motion.div
							className={`feature__card ${isSelected ? "feature__card--expanded" : ""} ${isShrunken ? "feature__card--shrunken" : ""}`}
							key={feature.title}
							variants={cardVariants}
							animate={{
								scale: isSelected ? 1.5 : isShrunken ? 0.7 : 1,
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
