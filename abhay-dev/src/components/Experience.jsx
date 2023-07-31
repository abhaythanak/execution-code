import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";

export const Experience = (props) => {
  const { section, menuOpened } = props;
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

 

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  //const characterContainerAboutRef = useRef()

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z])

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldPosition(quaternion)
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ")

    // console.log([euler.x, euler.y, euler.z])

  });

  return (
    <>
      <group position={[1.9072935059634513, 0.14400000000000002, 2.681801948466054]}
      rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
      >
      <Avatar animation={section === 0 ? "Typing" : "Standing"} />
      </group>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section} />
        <group name="CharacterSpot" 
        ref={characterContainerAboutRef}
        position={[0.07, 0.16, -0.57]} 
        rotation={[-Math.PI, 0.42, -Math.PI]} >
        
        </group>
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
        
      </motion.group>
    </>
  );
};
