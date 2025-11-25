import { useEffect, useState } from "react"

export type ViewportSize = "xl" | "lg" | "md" | "sm"

type Breakpoints = {
	xl: number
	lg: number
	md: number
	sm: number
}

const defaultBreakpoints: Breakpoints = {
	xl: 1280,
	lg: 1024,
	md: 769,
	sm: 480,
}

const getViewportSize = (breakpoints: Breakpoints): ViewportSize => {
	const width = window.innerWidth

	if (width >= breakpoints.xl) return "xl"
	if (width >= breakpoints.lg) return "lg"
	if (width >= breakpoints.md) return "md"
	return "sm"
}

export const useAppViewport = (
	sizes: ViewportSize[],
	breakpoints?: Breakpoints
): boolean => {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const checkViewport = () => {
			const mergedBreakpoints: Breakpoints = {
				...defaultBreakpoints,
				...breakpoints,
			}
			const currentSize = getViewportSize(mergedBreakpoints)
			setMatches(sizes.includes(currentSize))
		}

		checkViewport()
		window.addEventListener("resize", checkViewport)

		return () => window.removeEventListener("resize", checkViewport)
	}, [sizes, breakpoints])

	return matches
}

