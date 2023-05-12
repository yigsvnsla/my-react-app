import { ReactNode } from "react"

function AboutServices(props: { title: string, subTitle: string, children: ReactNode }) {
  return (
    <div className="flex flex-row items-center">
      <i className=" border-solid border-black border-2 flex items-center justify-center rounded-full h-[64px] w-[64px] p-4">
        {props.children}
      </i>
      <div className="p-4">
        <span className=" text-xl font-Goldman font-bold">{props.title}</span>
        <p className="">{props.subTitle}</p>
      </div>
    </div>
  )
}
export default AboutServices