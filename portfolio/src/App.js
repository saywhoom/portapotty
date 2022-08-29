import Scene from "./Components/Scene/Scene";
import Footer from "./Components/Footer/Footer";
import ParticleBackground from "./Particle/ParticleBackground";
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

function App() {
  const { progress } = useProgress();

  useEffect(() => {}, [progress]);
  return (
    <div className='App'>
      {progress >= 100 ? (
        <>
          <ParticleBackground />
          <Scene />
          <Footer />
        </>
      ) : (
        <>
          <Scene noDisplay={true} />
        </>
      )}
    </div>
  );
}

export default App;
