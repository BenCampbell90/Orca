import { faqs } from "@/components/sections/FAQ/consts"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import "./faqStyles.css"

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const FAQ = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px", amount: 0.2 })
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	/***** RENDER *****/
	return (
		<section 
			id="faq" 
			className="faq" 
			ref={ref}
		>
			{/* /***** TITLE *****/}
			<motion.h2
				className="faq__title"
				initial={{ opacity: 0, y: -20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Frequently Asked Questions
			</motion.h2>

			{/* /***** FAQ ITEMS *****/}
			<motion.div
				className="faq__container"
				initial={{ opacity: 0, y: 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
			>
				{faqs.map((faq, index) => {
					const isOpen = openIndex === index
					
					return (
						<div 
							key={faq.id} 
							className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
						>
							<button
								className="faq__question"
								onClick={() => toggleFAQ(index)}
								aria-expanded={isOpen}
							>
								<span className="faq__questionText">{faq.question}</span>
								<motion.svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="faq__icon"
									animate={{ rotate: isOpen ? 180 : 0 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
								>
									<path 
										d="M6 9L12 15L18 9" 
										stroke="currentColor" 
										strokeWidth="2" 
										strokeLinecap="round" 
										strokeLinejoin="round"
									/>
								</motion.svg>
							</button>
							<motion.div
								className="faq__answerWrapper"
								initial={false}
								animate={{
									height: isOpen ? "auto" : 0,
									opacity: isOpen ? 1 : 0
								}}
								transition={{ duration: 0.3, ease: "easeInOut" }}
							>
								<div className="faq__answer">
									{faq.answer}
								</div>
							</motion.div>
						</div>
					)
				})}
			</motion.div>
		</section>
	)
}

