import {
	Calendar,
	CalendarDays,
	Car,
	DollarSign,
	FileSpreadsheet,
	FileText,
	Folder,
	Home,
	TrendingUp,
} from "lucide-react";

export const features = [
	{
		title: "Invoices",
		description:
			"Stress less about client invoices. Use ORCA to issue, track, send reminders, and lodge earnings against your invoices",
		icon: FileText,
	},
	{
		title: "Expenses",
		description:
			"Know where your money is going. Our expensing system is powerful and flexible, showing you the most important information first",
		icon: DollarSign,
	},
	{
		title: "BAS",
		description:
			"Tax time is easier than ever with BAS exports available at whatever frequency you need",
		icon: FileSpreadsheet,
	},
	{
		title: "Job Tracking",
		description:
			"Juggling upcoming jobs? Use our jobs system to schedule and get analytics on jobs and clients",
		icon: Calendar,
	},
	{
		title: "Event Management",
		description:
			"Use our events system to track, log, and analyse your markets, pop-ups, and trade shows",
		icon: CalendarDays,
	},
	{
		title: "Sales Tracking",
		description:
			"Know which of your sales channels are the best performing — we'll tell you if an event is worth going to, and which channel is bringing home the bread",
		icon: TrendingUp,
	},
	{
		title: "Document Management",
		description:
			"Stop scrounging through emails from two years ago. We'll give you the fastest access to your most important documents",
		icon: Folder,
	},
	{
		title: "Home Office Hero",
		description:
			"Working from home? We'll keep you accountable to help you get the most back at tax time with our WFH tool",
		icon: Home,
	},
	{
		title: "Vehicle Trips",
		description:
			"Log your odometer readings and claim the most back at tax time with our Vehicle Trip logging",
		icon: Car,
	},
];
