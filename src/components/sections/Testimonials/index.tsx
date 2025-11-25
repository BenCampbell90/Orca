import { testimonials } from "@/components/sections/Testimonials/consts"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import "./testimonialsStyles.css"

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Testimonials = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px", amount: 0.2 })
	const [currentIndex, setCurrentIndex] = useState(0)
	const [direction, setDirection] = useState(0)

	const currentTestimonial = testimonials[currentIndex]

	const handlePrevious = () => {
		setDirection(-1)
		setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setDirection(1)
		setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
	}

	const slideVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 300 : -300,
			opacity: 0
		}),
		center: {
			x: 0,
			opacity: 1
		},
		exit: (direction: number) => ({
			x: direction > 0 ? -300 : 300,
			opacity: 0
		})
	}

	/***** RENDER *****/
	return (
		<section 
			id="testimonials" 
			className="testimonials" 
			ref={ref}
		>
			{/* /***** TITLE *****/}
			<motion.h2
				className="testimonials__title"
				initial={{ opacity: 0, y: -20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Trusted by The Best
			</motion.h2>

			{/* /***** TESTIMONIAL CARD CONTAINER *****/}
			<motion.div
				className="testimonials__container"
				initial={{ opacity: 0, y: 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
			>
				{/* /***** PREVIOUS BUTTON *****/}
				<button 
					className="testimonials__navButton testimonials__navButton--prev"
					onClick={handlePrevious}
					aria-label="Previous testimonial"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>

				{/* /***** TESTIMONIAL CARD *****/}
				<div className="testimonials__cardWrapper">
					<AnimatePresence mode="wait" custom={direction}>
						<motion.div
							key={currentIndex}
							custom={direction}
							variants={slideVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								x: { type: "spring", stiffness: 500, damping: 25 },
								opacity: { duration: 0.15 }
							}}
							className="testimonials__card"
						>
							<div className="testimonials__quoteIcon">"</div>
							<p className="testimonials__text">{currentTestimonial.text}</p>
							<div className="testimonials__author">
								<span className="testimonials__authorName">{currentTestimonial.author}</span>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* /***** NEXT BUTTON *****/}
				<button 
					className="testimonials__navButton testimonials__navButton--next"
					onClick={handleNext}
					aria-label="Next testimonial"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>
			</motion.div>
		</section>
	)
}

