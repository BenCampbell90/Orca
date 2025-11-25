import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import "./contactStyles.css"

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const Contact = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px", amount: 0.2 })
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: ""
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		
		// Construct mailto link with form data
		const recipient = "bencampbell90@outlook.com"
		const subject = encodeURIComponent(formData.subject)
		const body = encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
		)
		
		const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`
		
		// Open email client
		window.location.href = mailtoLink
		
		// Clear form after opening email client
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: ""
		})
	}

	/***** RENDER *****/
	return (
		<section 
			id="contact" 
			className="contact" 
			ref={ref}
		>
			{/* /***** TITLE *****/}
			<motion.h2
				className="contact__title"
				initial={{ opacity: 0, y: -20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Contact Us
			</motion.h2>

			{/* /***** DESCRIPTION *****/}
			<motion.p
				className="contact__description"
				initial={{ opacity: 0, y: -20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
			>
				Have a question? Get in touch and we'll get back to you as soon as possible.
			</motion.p>

			{/* /***** FORM *****/}
			<motion.form
				className="contact__form"
				onSubmit={handleSubmit}
				initial={{ opacity: 0, y: 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
			>
				<div className="contact__formRow">
					<div className="contact__formGroup">
						<label htmlFor="name" className="contact__label">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="contact__input"
							required
							placeholder="Your name"
						/>
					</div>
					<div className="contact__formGroup">
						<label htmlFor="email" className="contact__label">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="contact__input"
							required
							placeholder="your.email@example.com"
						/>
					</div>
				</div>

				<div className="contact__formGroup">
					<label htmlFor="subject" className="contact__label">
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						className="contact__input"
						required
						placeholder="What's this about?"
					/>
				</div>

				<div className="contact__formGroup">
					<label htmlFor="message" className="contact__label">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="contact__textarea"
						required
						rows={6}
						placeholder="Tell us more..."
					/>
				</div>

				<button
					type="submit"
					className="contact__submit"
				>
					Send Message
				</button>
			</motion.form>
		</section>
	)
}

