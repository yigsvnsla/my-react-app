
function ServiceCard(props: Partial<{ title: string, subTitle: string, img: string, }>) {

  return (
    <>
      <div className="bg-black text-white p-4">
        <div className="">
          <div className="grid grid-cols-2">
            <div className="py-10 gap-6">
              <img className="rounded-xl" src="../../../../public/vsCode-typing.gif" alt="" />
            </div>
            <div className="p-4 text-center">
              <span className="font-Goldman text-6xl">Desarrollo Web</span>
              <p className="font-Gruppo text-xl">Aplicaciones web personalizadas, enfocadas en brindar una experiencia de usuario excepcional. Con un diseño atractivo y características únicas, hacemos que tu aplicación web destaque en el mercado y llegue a tus clientes dondequiera que estén.</p>
              <div className="p-6">
                <p className="font-Goldman">Tecnologias que mas usamos</p>
                <div className="grid grid-cols-4 gap-6 py-4">
                  <img className="m-2 object-cover" src="../../../../public/capacitor-seeklogo.com.svg" alt="" />
                  <img className="m-2 object-cover" src="../../../../public/kotlin-seeklogo.com.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceCard

