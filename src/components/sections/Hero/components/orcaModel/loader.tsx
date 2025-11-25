import { Html } from "@react-three/drei";

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/
export const OrcaModelLoader = () => {
	/***** RENDER *****/
	return (
		<Html center>
			<div className="loader">
				<div className="loader-spinner"></div>
				<p>Loading orca...</p>
			</div>
		</Html>
	);
};
