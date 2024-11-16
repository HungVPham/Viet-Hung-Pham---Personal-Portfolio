import { useState, useTransition } from 'react';
import { useGLTF } from '@react-three/drei';

import { models } from '../../constants';

// A simple LoadingIndicator component
function LoadingIndicator() {
  return <div>Loading...</div>;
}

function Pagoda() {
  const [isPending, startTransition] = useTransition();
  const { scene, error } = useGLTF(models.car);  // Use useGLTF outside of startTransition

  // Handle loading or error states
  if (error) {
    return <div>Error loading model!</div>;
  }

  if (!scene) {
    return <LoadingIndicator />; // Show a loading indicator while loading
  }

  return <primitive object={scene} scale={[1, 1, 1]} />;
}

export default Pagoda;
