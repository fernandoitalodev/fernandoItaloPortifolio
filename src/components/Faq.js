import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

let questions = [
    ["Qual minha área de especialização dentro da programação?", "Minha principal área de especialização é o desenvolvimento web, Tenho experiência e conhecimento sólido na linguagem de programação JavaScript."],
    ["Estou familiarizado com alguma plataforma específica ou framework?","Sim, tenho experiência com diversos frameworks e plataformas. Um deles  é o Next.js. O Next.js é um framework de desenvolvimento web em React que permite a criação de aplicações web modernas e escaláveis."],
    ["Quais os benefícios de ter uma landing page para seu negócio?",`Ter uma landing page oferece benefícios significativos para um negócio, como a ampla divulgação e alcance proporcionados pela presença online 24 horas por dia. Além disso, uma página web bem projetada e profissional transmite confiança aos clientes, estabelecendo a credibilidade do seu negócio. `]]

const Faq = () => {

   
  return (
    <div className="min-h-50  flex flex-col w-full  items-center  ">
        <h1 className="m-8 lg:text-5xl text-2xl font-bold " >Perguntas Frequentes</h1>
    {
        questions.map((el,index)=>{
            return <FaqItem question={el[0]} response={el[1]} key={index} />
        })
    }

    </div>
  )
}

export default Faq

const FaqItem=({question,response,key})=>{
 const [isOpen, setIsOpen]=useState(false)
    return(
        <div key={key} className="flex flex-col border-t border-gray-300 lg:w-8/12 sm:w-96 md:w-10/12 w-full">
        <div onClick={()=>setIsOpen(!isOpen)} className=" p-4 items-center flex justify-between lg:text-2xl " >
            <h1 className="font-medium ">{question}</h1>
            <FontAwesomeIcon icon={ isOpen ? faMinus : faPlus} />
        </div>
        <p className={` indent-6  p-4 ${!isOpen?"hidden":"block"}`} >
           {response}
        </p>
    </div>
    )
}

export {FaqItem}