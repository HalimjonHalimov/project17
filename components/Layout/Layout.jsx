import { Navbar } from "..";


export default function Layout({children, path}) {
  return (
    <div className='w-full h-auto flex justify-start items-start bg-[#15131E]'>
      <Navbar path={path}/>
      <div className='w-full h-auto'>{children}</div>
    </div>
  )
}
