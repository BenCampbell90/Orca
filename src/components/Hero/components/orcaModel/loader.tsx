import { Html } from "@react-three/drei";

export const OrcaModelLoader = () => {
	return (
		<Html center>
			<div className="loader">
				<div className="loader-spinner"></div>
				<p>Loading orca...</p>
			</div>
		</Html>
	);
};
