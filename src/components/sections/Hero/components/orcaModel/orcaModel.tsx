import { useGLTF } from "@react-three/drei";

/**********************************************************************************************************
 *   MODAL START
 **********************************************************************************************************/
export function OrcaModel() {
	/***** HOOKS *****/
	const { scene } = useGLTF("/orca.glb");

	/***** RENDER *****/
	return (
		<primitive
			object={scene}
			scale={0.8}
			position={[0, 0, 0]}
			rotation={[0, 0, 0]}
		/>
	);
}
