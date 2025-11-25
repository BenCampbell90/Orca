import { OrcaModelLoader } from "@/components/sections/Hero/components/orcaModel/loader";
import { OrcaModel } from "@/components/sections/Hero/components/orcaModel/orcaModel";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

/**********************************************************************************************************
 *   COMPONENT START
 **********************************************************************************************************/	
export function OrcaCanvas() {
	/***** RENDER *****/
	return (
		<div className="orca__model__container">
			<Canvas
				camera={{ position: [0, 0, 5], fov: 50 }}
				gl={{ antialias: true }}
			>
				{/* Lighting */}
				<ambientLight intensity={0.5} />
				<directionalLight position={[10, 10, 5]} intensity={1} />
				<pointLight position={[-10, -10, -5]} intensity={0.5} />

				{/* Environment */}
				<Environment preset="sunset" />

				{/* Controls  */}
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					enableRotate={true}
					autoRotate
					autoRotateSpeed={0.5}
				/>

				{/* The orca model */}
				<Suspense fallback={<OrcaModelLoader />}>
					<OrcaModel />
				</Suspense>
			</Canvas>
		</div>
	);
}

useGLTF.preload("/orca.glb");
