import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTypingEffect from 'react-typing-effect'
import { faHouse,faPerson ,faFile,faWrench,faPhone,faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

const allPages= [["/","Home",faHouse],["/About","Sobre",faPerson],["/Projects","Projetos",faFile],["/Services","Serviços",faWrench],["/Contact","Contato",faPhone]]

const Header = () => {
  const router= useRouter()
  
  const [menu,setMenu]=useState(false)
  
  useEffect(()=>{
    if(menu){
      setMenu(false)
    }
    
  },[router])

  return (
    <header className={`flex-col ${menu ? "bg-zinc-800 h-full ":"h-auto bg-transparent  z-0"}
    flex w-[50%] absolute  right-0 items-center justify-between text-white z-30`}>

  <h1 onClick={()=> setMenu(!menu)} className="self-end p-3 text-2xl"><FontAwesomeIcon icon={menu ? faXmark:faBars}/></h1>

  <nav className={`flex flex-col gap-3 ${menu ? "block ":"hidden"}`}>
{
  allPages.map((el)=>{
    if(router.pathname == el[0]){
     ()=>  document.title = el[1]
    }
    return(
      <Link key={el[1]} className={` ${router.pathname === el[0] ? "header-links":""} `} href={el[0]}>
<FontAwesomeIcon icon={el[2]} /> {el[1]}
</Link>

    )
  })
}




  </nav>
<div className={`  ${menu ? "block ":"hidden"}`}>
  social medias
</div>
  {/* <p className="p-header"> E eu sou  <ReactTypingEffect text={["Programador","Freelancer","Criativo"]}/></p> */}
    </header>
  )
}

export default Header