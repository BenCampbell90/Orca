import { OrcaModelLoader } from "@/components/Hero/components/orcaModel/loader";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Orca() {
	const { scene } = useGLTF("/orca.glb");

	return (
		<primitive
			object={scene}
			scale={0.8}
			position={[0, 0, 0]}
			rotation={[0, 0, 0]}
		/>
	);
}

export function OrcaModel() {
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

				{/* Environment for better lighting/reflections */}
				<Environment preset="sunset" />

				{/* Controls for rotating the model */}
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					enableRotate={true}
					autoRotate
					autoRotateSpeed={0.5}
				/>

				{/* The orca model with loading fallback */}
				<Suspense fallback={<OrcaModelLoader />}>
					<Orca />
				</Suspense>
			</Canvas>
		</div>
	);
}

useGLTF.preload("/orca.glb");
