import Image from "next/image";
import React, { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { motion } from "framer-motion"

import NextPage from "@/components/NextPage";


const trabalhos = [
  [
    "Soldado",
    "@Exército Brasileiro",
    "2021 | 2022 - Teresina,PI",
    "fazia o controle dos itens que entravam e saiam do deposito e realizavatambém o serviço de guarda armada no quartel.",
    "/exercito-logo1.png"
  ],
  [
    "Atendimento ao Cliente",
    "@Sushirus",
    "2022 - Teresina,PI",
    "realizava a recepção dos clientes, cadastro dos pedidos nas comandas dos clientes, servir pedidos na mesa assim como realizava a limpeza do local;",
    "/sushirus-logo.png"
  ],[
    "Programador Freelancer",
    "@Autonomo",
    "2022 | atualmente",
    "Como um programador front-end freelancer atual, estou trabalhando em uma variedade de projetos desafiadores e emocionantes. Tenho colaborado com diferentes clientes para criar interfaces web atraentes e responsivas.",
    "/computer-icon.svg"
  ]
];

const cursos = [
  [
    " Programador FullStack Javascript ",
    "@one Bit Code",
    "2022 | 2023 ",
    " treinamento abrangente que ensina a criação de aplicativos web do início ao fim, abrangendo tanto o desenvolvimento do lado do cliente quanto do servidor. ",
    "/onebit-logo.png"
  ],
  [
    " Programação Javascript Basico",
    "@Curso em video",
    "2022 ",
    "Curso que ensina os  fundamentos da linguagem de programação JavaScript. aprendi os conceitos essenciais, como variáveis, condicionais, loops e funções, e como aplicá-los na criação de interações dinâmicas em sites e aplicativos web.",
    "/curso-logo.jpg"
  ],[
    " CS50",
    "@Harvard University",
    "2023 | cursando",
    "O curso CS50 de Harvard é um renomado programa de ensino de ciência da computação que abrange os fundamentos da programação, algoritmos e estruturas de dados.",
    "/harvard-logo2.png"
  ]
];

const estatisticas=[[10,"Projetos"],[9,"meses de experiência"],[9,"Tecnologias usadas"]]
const skills = [
  ["/icones/js-icon.svg", "Javascript"],
  ["/icones/css-icon.svg","CSS 3"],
  ["/icones/html-icon.svg","HTML 5"],
  ["/icones/bootstrap-icon.svg","Bootstrap"],
  ["/icones/react.svg","React Js"],
  ["/icones/sass-icon.svg","SASS"],
  ["/icones/typescript.svg","TypeScript"],
["/icones/next-icon.svg","Next"]];

const About = () => {
  
  return (
    <div className="about-div">
      <h1 className="pt-10 lg:text-5xl text-4xl font-bold ">
        Sobre
      </h1>

      <div className="about-home">
          <div className="photo lg:order-2 ">
          <div className="photo-div">
            <Image className="photo-me"  width={300} height={300} src="/me.jpg"/>
          </div>
           </div>
        <div className="biografia lg:order-1 ">
          <h3 className="text-lg border-b-4 border-cyan-600 " >Biografia</h3>
          <p>
          
            Olá, sou Fernando Ítalo, um programador Front End apaixonado pela criação de websites criativos e focados na melhor experiência do usuário. Com quase um ano de experiência nessa área dinâmica, estou constantemente buscando aprendizado e desenvolvendo soluções eficientes para problemas cotidianos.
          </p>

         
        </div>
      

        <div className="stats lg:order-3 ">
          {
            estatisticas.map((el)=>{
              return(
<div className="stats-item">
  <h1 className="h1">{el[0]}+</h1>
  <h2>{el[1]}</h2>
</div>
              )
            })
          }
        </div>
      </div>
      <div className="skills">
       
        <h1 className="h1">Habilidades e tecnologias</h1>

       <main>
        <div className="skills-div" >
        {skills.map((el) => {
          return (
            <div className="habilidade">
               <Image className="image-skills-item" width={70} height={70} src={el[0]}/>
              
              <h3>{el[1]}</h3>
            </div>
          );
        })}
        </div>
        <div className="div-main-image-skills" >
           <Image className="image-skills" width={500} height={500} src="/jobs4.jpg"/>
        </div>
        </main>
      </div>

      <div className="experiencia">

        <h1 className="h1">Experiências </h1>
        <div className="experiencia-div">
          <Information arrayAssuntos={trabalhos}/>
        <Image className="yoda-baby"  width={500} height={500} src="/yoda.jpg"/> 
        </div>
       
      </div>
      <div className="cursos">
        <h1 className="h1">Cursos</h1>
        <div className="cursos-div">
        <Information arrayAssuntos={cursos}/>
        <Image className="robot-img"  width={500} height={500} src="/robot1.jpg"/> 

        </div>
        
      </div>
     <ScrollToTop/>
   
     <NextPage pagina="/Projects" nomeDaPagina="Projetos" />
    </div>
  );
};

export default About;

const Information = ({arrayAssuntos})=>{
  return(
    <div className="Information">
    {arrayAssuntos.map((el) => {
      return (
        <div className="WorkOrCourseDiv">
          <div >
          <Image className="img-information"  width={250} height={200} src={el[4]}/> 
          </div>
          <div>
            
            <h3 className="professionOrCourse">
              {el[0]} <span className="placeOf">{el[1]}</span>
            </h3>
            <h4 className="dateOf">{el[2]}</h4>
            <p className="textOf"> {el[3]}</p>
            <br/>
          </div>
        </div>
      );
    })}
  </div>
  )
}
export {Information}