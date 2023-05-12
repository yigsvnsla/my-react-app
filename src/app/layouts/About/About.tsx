import AboutItem from "../../components/AboutItem/AboutItem"
function About() {
  return (

    <div className="p-4 ">
      <div className="flex flex-col items-center ">
        <h3 className="font-bold text-[10vw] text-center font-Goldman sm:text-6xl">Quienes Somos</h3>
        <p className="font-Goldman text-center max-w-5xl">Nuestro objetivo es crear una relación cercana y de confianza con cada uno de nuestros clientes, para entender sus necesidades y brindarles soluciones que superen sus expectativas.</p>
      </div>
      <div >
        
        <img className="object-cover h-full w-full" src="../../../../public/undraw_innovative_re_rr5i (1).svg" alt="" />
      </div>
    </div>
    // <div className="px-20 flex flex-col items-center drop-shadow-lg">
    //   <div className="p-4 flex flex-col items-center w-3/4">
    //     <h3 className="font-bold text-6xl text-center font-Goldman ">Quienes Somos</h3>
    //   </div>
    //   <div className="grid grid-cols-2 p-4">
    //     <div>
    //       <p className="font-Goldman text-center p-4 py-2">Nuestro objetivo es crear una relación cercana y de confianza con cada uno de nuestros clientes, para entender sus necesidades y brindarles soluciones que superen sus expectativas.</p>
    //       <AboutItem title="Desarrollo Web" subTitle="Creamos aplicaciones web personalizadas para empresas y particulares.">
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
    //           <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    //         </svg>
    //       </AboutItem>
    //       <AboutItem title="Desarrollo Movil" subTitle="Desarrollo de aplicaciones móviles nativas e híbridas">
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //           <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    //         </svg>
    //       </AboutItem>
    //       <AboutItem title="Desarrollo Custom" subTitle="Soluciones tecnológicas a medida para empresas y particulares.">
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //           <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
    //         </svg>
    //       </AboutItem>
    //     </div>
    //     <div>
    //       <img className="object-cover h-full " src="../../../../public/undraw_innovative_re_rr5i (1).svg" alt="" />
    //     </div>
    //   </div>
    // </div>
  )
}

export default About
