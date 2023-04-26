import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, ISourceOptions, Engine } from "tsparticles-engine";

import './Banner.css'
function Banner() {

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log(container);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  return (
    <div style={{
      backgroundImage: 'url("../../../../circuit-board.svg"), radial-gradient(circle, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 1) 100%)',
      backgroundBlendMode: 'multiply',
      backgroundColor: 'inherit',
    }} className="">
      <section 
        className="
          bg-black 
          bg-opacity-75
          z-10
          relative
          p-4
          flex
          flex-col
          text-center
          sm:grid
          sm:grid-cols-2
          sm:text-left
          sm:items-center"
          
          style={{ height: 'inherit' }}>
        <div >
          <h1 
            className="
              font-Goldman 
              text-white 
              font-extrabold 
              text-[16vw] 
              leading-tight 
              sm:text-lg">NutriaSoft</h1>
          <h2 
            className="
            text-white 
              font-Gruppo 
              font-bold ">¡ Somos un equipo independiente de desarrollo de software enfocados en soluciones innovadoras !</h2>
        </div>
        <div 
          className="
            bg-none
            max-w-[600px] 
            m-10">
              <img className="
                bg-blend-multiply"
                alt="logo nutriasoft" 
                src="/../../public/vsCode-Typing.gif"/>
        </div>
      </section>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          style:{
            zIndex:'-1'
          },
          background: {

            color: {
              value: "transparent",
            },
            opacity: 1,
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>

  );

}

export default Banner