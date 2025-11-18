import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { createFileRoute } from "@tanstack/react-router";
import "./appStyles.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<main className="app-container">
			<Navbar />
			<div className="app-content">
				<Hero />
				<Features />
			</div>
		</main>
	);
}
