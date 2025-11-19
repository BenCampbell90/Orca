import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import "./appStyles.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const router = useRouter();

	useEffect(() => {
		const scrollToHash = (hash: string) => {
			const element = document.querySelector(hash);
			const appContainer = document.getElementById("app");

			if (element && appContainer) {
				const navbar = document.querySelector(".navbar");
				const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 100;
				const offset = navbarHeight + 20;

				const containerRect = appContainer.getBoundingClientRect();
				const elementRect = element.getBoundingClientRect();
				const elementPosition =
					elementRect.top - containerRect.top + appContainer.scrollTop;
				const offsetPosition = elementPosition - offset;

				appContainer.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
				return true;
			}
			return false;
		};

		// Handle hash-based scrolling on page load
		const hash = window.location.hash;
		if (hash) {
			// Try multiple times to ensure content is rendered
			let attempts = 0;
			const maxAttempts = 20; // Try for up to 2 seconds (20 * 100ms)

			const tryScroll = () => {
				if (scrollToHash(hash) || attempts >= maxAttempts) {
					return;
				}
				attempts++;
				setTimeout(tryScroll, 100);
			};

			// Start after a brief delay to let initial render complete
			requestAnimationFrame(() => {
				setTimeout(tryScroll, 100);
			});
		}

		// Listen for hash changes
		const handleHashChange = () => {
			const newHash = window.location.hash;
			if (newHash) {
				requestAnimationFrame(() => {
					setTimeout(() => scrollToHash(newHash), 100);
				});
			}
		};

		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, [router]);

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
