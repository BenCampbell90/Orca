export interface FAQItem {
	id: number
	question: string
	answer: string
}

export const faqs: FAQItem[] = [
	{
		id: 1,
		question: "What is ORCA?",
		answer: "ORCA is a comprehensive bookkeeping and invoicing platform designed specifically for Australian small businesses. It provides simple bookkeeping, invoicing, mileage tracking, and BAS-ready reports all in one place."
	},
	{
		id: 2,
		question: "How does the free trial work?",
		answer: "ORCA offers a three-day free trial so you can see if it's right for your business. No credit card required. Simply sign up and start using all features immediately."
	},
	{
		id: 3,
		question: "Can I get help setting it up?",
		answer: "Yes! We offer setup assistance to help you get started. Our support team is available to guide you through the initial setup process and answer any questions you may have."
	},
	{
		id: 4,
		question: "Is ORCA suitable for my business?",
		answer: "ORCA is built specifically for Australian small businesses. Whether you're a sole trader, freelancer, or small business owner, ORCA provides the tools you need without the complexity of larger accounting software."
	},
	{
		id: 5,
		question: "What payment methods do you accept?",
		answer: "We accept all major credit cards and direct debit. You can choose between monthly or yearly billing, with discounts available for annual subscriptions."
	},
	{
		id: 6,
		question: "Can I export my data?",
		answer: "Yes, you can export your data at any time. ORCA provides BAS-ready reports and allows you to export your financial data in various formats for your accountant or records."
	}
]

