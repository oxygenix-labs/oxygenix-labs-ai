"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Instance, Instances, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// --- Realistic Leaf Geometry ---
// Creating a curved, tapered leaf shape using ExtrudeGeometry with a custom Shape
const LeafGeometry = () => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.5, 0.5, 0.5, 1.5, 0, 2); // Right side curve
    shape.bezierCurveTo(-0.5, 1.5, -0.5, 0.5, 0, 0); // Left side curve

    // Extrude settings for 3D depth
    const extrudeSettings = {
        steps: 2,
        depth: 0.05,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelSegments: 2,
    };

    return <extrudeGeometry args={[shape, extrudeSettings]} />;
};

export default function PlantDNA() {
    const groupRef = useRef<THREE.Group>(null);
    const leavesRef = useRef<THREE.Group>(null);

    // Generate DNA Curves and Transforms
    const { curve1, curve2, connections, leafTransforms } = useMemo(() => {
        const points1_vec: THREE.Vector3[] = [];
        const points2_vec: THREE.Vector3[] = [];
        const conns: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
        const leafTrans: { pos: THREE.Vector3, rot: THREE.Euler, scale: number }[] = [];

        const count = 60;
        const height = 22;
        const radius = 3.2;
        const twists = 2.8;

        for (let i = 0; i <= count; i++) {
            const t = i / count;
            const angle = t * Math.PI * 2 * twists;
            const y = (t - 0.5) * height;

            const x1 = Math.cos(angle) * radius;
            const z1 = Math.sin(angle) * radius;

            const x2 = Math.cos(angle + Math.PI) * radius;
            const z2 = Math.sin(angle + Math.PI) * radius;

            points1_vec.push(new THREE.Vector3(x1, y, z1));
            points2_vec.push(new THREE.Vector3(x2, y, z2));
        }

        const curve1 = new THREE.CatmullRomCurve3(points1_vec);
        const curve2 = new THREE.CatmullRomCurve3(points2_vec);

        // Generate Leaves & Connections
        for (let i = 0; i < count; i++) {
            const t = i / count;
            const pt1 = curve1.getPoint(t);
            const pt2 = curve2.getPoint(t);

            // Connections every step
            if (i % 2 === 0) conns.push({ start: pt1, end: pt2 });

            // Add leaves more densely but elegantly
            if (i % 2 === 0) {
                const tangent1 = curve1.getTangent(t);
                const tangent2 = curve2.getTangent(t);

                // Leaf on Strand 1
                const dummyObj = new THREE.Object3D();
                dummyObj.position.copy(pt1);
                dummyObj.lookAt(pt1.clone().add(tangent1)); // Align with curve
                dummyObj.rotateX(Math.PI / 2); // Orient outward
                dummyObj.rotateZ(Math.random() * Math.PI); // Random twist
                dummyObj.rotateY(Math.random() * 0.5); // Random tilt

                leafTrans.push({
                    pos: pt1,
                    rot: dummyObj.rotation,
                    scale: 0.3 + Math.random() * 0.3
                });

                // Leaf on Strand 2
                const dummyObj2 = new THREE.Object3D();
                dummyObj2.position.copy(pt2);
                dummyObj2.lookAt(pt2.clone().add(tangent2));
                dummyObj2.rotateX(Math.PI / 2);
                dummyObj2.rotateZ(Math.random() * Math.PI);
                dummyObj2.rotateY(Math.random() * 0.5);

                leafTrans.push({
                    pos: pt2,
                    rot: dummyObj2.rotation,
                    scale: 0.3 + Math.random() * 0.3
                });
            }
        }

        return { curve1, curve2, connections: conns, leafTransforms: leafTrans };
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            // Cinematic, slow, heavy rotation
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
            // Subtle floating breathing
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>

                {/* --- Backbones: Glassy/Metallic Look --- */}
                <mesh>
                    <tubeGeometry args={[curve1, 128, 0.12, 12, false]} />
                    <meshPhysicalMaterial
                        color="#10B981" // Emerald
                        emissive="#065f46"
                        emissiveIntensity={0.5}
                        roughness={0.1}
                        metalness={0.8}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                <mesh>
                    <tubeGeometry args={[curve2, 128, 0.12, 12, false]} />
                    <meshPhysicalMaterial
                        color="#06B6D4" // Cyan
                        emissive="#0e7490"
                        emissiveIntensity={0.5}
                        roughness={0.1}
                        metalness={0.8}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* --- Connections: Energy Beams --- */}
                {connections.map((conn, i) => (
                    <mesh key={i} position={[
                        (conn.start.x + conn.end.x) / 2,
                        (conn.start.y + conn.end.y) / 2,
                        (conn.start.z + conn.end.z) / 2
                    ]} rotation={[0, (i / 100) * Math.PI * 4, Math.PI / 2]}>
                        <cylinderGeometry args={[0.02, 0.02, 6.4, 6]} />
                        <meshBasicMaterial color="#ccfbf1" transparent opacity={0.4} />
                    </mesh>
                ))}

                {/* --- Instanced Leaves for Performance & Look --- */}
                <Instances range={leafTransforms.length}>
                    <LeafGeometry />
                    <meshPhysicalMaterial
                        color="#34D399"
                        emissive="#059669"
                        emissiveIntensity={0.2}
                        roughness={0.3}
                        metalness={0.1}
                        side={THREE.DoubleSide}
                    />

                    {leafTransforms.map((t, i) => (
                        <Instance
                            key={i}
                            position={t.pos}
                            rotation={t.rot}
                            scale={[t.scale, t.scale, t.scale]}
                        />
                    ))}
                </Instances>

                {/* --- Floating "Data Pollen" Particles --- */}
                <Sparkles
                    count={150}
                    scale={12}
                    size={4}
                    speed={0.4}
                    opacity={0.6}
                    color="#6EE7B7" // Light Green
                />
                <Sparkles
                    count={100}
                    scale={15}
                    size={6}
                    speed={0.3}
                    opacity={0.4}
                    color="#22D3EE" // Light Cyan
                />

            </Float>
        </group>
    );
}
