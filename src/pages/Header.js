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
    <header className={`top-header ${menu ? "show ":"hide"}`}>
  <h1 onClick={()=> setMenu(!menu)} className={'h1Header' }><FontAwesomeIcon icon={menu ? faXmark:faBars}/></h1>
  <nav>
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

  {/* <p className="p-header"> E eu sou  <ReactTypingEffect text={["Programador","Freelancer","Criativo"]}/></p> */}
    </header>
  )
}

export default Header