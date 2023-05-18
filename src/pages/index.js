
import Image from 'next/image';

import ReactTypingEffect from 'react-typing-effect';

import NextPage from '@/components/NextPage';


export default function Home() {

  return (
    <div> 
  
  

  
   <main>
    <div className="main-text">

     <h1 className="h1-main"> Olá, meu nome é<span> Fernando Ítalo</span>.</h1>
    <h1 className="h1-apresentation">Transformando em realidade  <ReactTypingEffect text={["sonhos","metas","ideias"]}/> </h1>
   
    <p>
      Sendo um Programador front end habilidoso, estou me dedicando a transformar ideias em projetos inovadores. Explore meus últimos projetos, mostrando inha experiência em React.js e desenvolvimento web.
      
    </p>
    <buttom className="btn">Currículo</buttom>
    <br /> <br />
    
    <NextPage pagina="/About" nomeDaPagina="Sobre" />
    </div>
    <div className="main-image">
      <Image className='home-image' height={300} width="300" src={"/vangog.png"}/>
    </div>
   </main> 
   
  
   </div> 
  )
}
