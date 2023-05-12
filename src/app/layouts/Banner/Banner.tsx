import { useCallback, useEffect, useRef, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Container, ISourceOptions, Engine, RecursivePartial, IOptions, Background } from "tsparticles-engine";

import './Banner.css'
function Banner() {
  const x = '../../../../public/circuit-board.svg'
  const bannerImage = useRef<HTMLImageElement>(null)
  const bannerContainer = useRef<HTMLDivElement>(null)
  const particleContainer = useRef<HTMLDivElement>(null)

  const tsParticleOpts: RecursivePartial<IOptions> = {
    style: {

    },
    fullScreen: {
      enable: false,
      zIndex: -1
    },
    background: {
      color: {
        value: 'transparent'
      },
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
  } as const


  useEffect(() => {
    if (bannerImage.current) {
      // Set Initial Height
      updateHeight()

      // Update Height
      const resizeObserver = new ResizeObserver(() => {
        updateHeight()
      })

      resizeObserver.observe(bannerImage.current)

      // Clean Observer
      return () => resizeObserver.disconnect();
    }
  }, [])

  const updateHeight = () => {
    if (bannerImage.current && particleContainer.current) {
      console.log();

      particleContainer.current.style.height = bannerContainer.current?.offsetHeight + 'px'
    }

  }

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
  }, []);


  return (
    <>
      <section ref={bannerContainer} className="relative bg-black h-[90vh]">
        <div ref={particleContainer} className="absolute opacity-20 w-screen bg-[url(../../../../public/circuit-board.svg)]">
          {/* El contenedor es el que se adapta las particulas siempre llevan 100% de altura asi te evitas manejar canvas */}
          <Particles className="w-full h-full" id="tsparticles" options={tsParticleOpts} init={particlesInit} loaded={particlesLoaded} />
        </div>
        <div className="absolute h-full flex flex-col   sm:grid sm:grid-cols-2 sm:text-left sm:items-center">
          <div className="p-6 text-center sm:text-left">
            <h1 className="font-Goldman text-white font-extrabold text-[16vw] leading-tight sm:text-6xl">NutriaSoft</h1>
            <h2 className=" p-2 text-gray-200 font-Gruppo sm:text-3xl font-bold">¡ Desarrollando soluciones innovadoras !</h2>
          </div>
          <div>
            <img ref={bannerImage} className="" src="../../../../public/undraw_web_devices_re_m8sc.svg" alt="" />
            {/* <img ref={bannerImage} className="h-full banner-img" alt="logo nutriasoft" src="/../../public/vsCode-Typing.gif" /> */}
          </div>
        </div>

      </section>
    </>

  );

}

export default Banner