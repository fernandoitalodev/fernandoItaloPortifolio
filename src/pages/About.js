import Image from "next/image";
import React, { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { motion } from "framer-motion";

import NextPage from "@/components/NextPage";

const trabalhos = [
  [
    "Soldado",
    "@Exército Brasileiro",
    "2021 | 2022 - Teresina,PI",
    "fazia o controle dos itens que entravam e saiam do deposito e realizavatambém o serviço de guarda armada no quartel.",
    "/about-images/exercito-logo1.png",
  ],
  [
    "Atendimento ao Cliente",
    "@Sushirus",
    "2022 - Teresina,PI",
    "realizava a recepção dos clientes, cadastro dos pedidos nas comandas dos clientes, servir pedidos na mesa assim como realizava a limpeza do local;",
    "/about-images/sushirus-logo.png",
  ],
  [
    "Programador Freelancer",
    "@Autonomo",
    "2022 | atualmente",
    "Como um programador front-end freelancer atual, estou trabalhando em uma variedade de projetos desafiadores e emocionantes. Tenho colaborado com diferentes clientes para criar interfaces web atraentes e responsivas.",
    "/about-images/computer-icon.svg",
  ],
];

const cursos = [
  [
    " Programador FullStack Javascript ",
    "@one Bit Code",
    "2022 | 2023 ",
    " treinamento abrangente que ensina a criação de aplicativos web do início ao fim, abrangendo tanto o desenvolvimento do lado do cliente quanto do servidor. ",
    "/about-images/onebit-logo.png",
  ],
  [
    " Programação Javascript Basico",
    "@Curso em video",
    "2022 ",
    "Curso que ensina os  fundamentos da linguagem de programação JavaScript. aprendi os conceitos essenciais, como variáveis, condicionais, loops e funções, e como aplicá-los na criação de interações dinâmicas em sites e aplicativos web.",
    "/about-images/curso-logo.jpg",
  ],
  [
    " CS50",
    "@Harvard University",
    "2023 | cursando",
    "O curso CS50 de Harvard é um renomado programa de ensino de ciência da computação que abrange os fundamentos da programação, algoritmos e estruturas de dados.",
    "/about-images/harvard-logo2.png",
  ],
];

const skills=[
  {
    imgs:["/icones/css-icon.svg","/icones/html-icon.svg"],
    title:" HTML Css3 ",
    description: ["HTML ...","Css3 ..."]
  },{
    imgs:["/icones/bootstrap-icon.svg","/icones/sass-icon.svg","/icones/tailwind-icon.svg"],
    title:" Frameworks de estilização!",
    description: ["HTML ...","Css3 ..."," JavaScript ..."]
  },{
    imgs:["/icones/js-icon.svg","/icones/typescript.svg",],
    title:" Linguagens",
    description: [" JavaScript ...","Typescript"]
  },{
    imgs:["/icones/react.svg","/icones/next-icon.svg"],
    title:" FrameWorks",
    description: ["React ...","Next.Js ...",]
  },
]


const About = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="h1 text-center text-4xl md:text-6xl mt-5">Sobre</h1>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:w-11/12 p-2 md:h-screen">
       
          <div className=" md:order-2 md:w-6/12 ">
            <Image
              className=" border-8 rounded-lg md:h-64 lg:h-72"
              width={200}
              height={200}
              src="/about-images/me.jpg"
            />
          </div>
        
        <div className=" md:order-1  p-2">
          <h3 className="text-xl font-semibold mb-2 lg:text-3xl ">Biografia</h3>
          <p className="indent-5 lg:text-xl ">
            Olá, sou Fernando Ítalo, um programador Front End apaixonado pela
            criação de websites criativos e focados na melhor experiência do
            usuário. 
          </p>
          <p className="indent-5 lg:text-xl">
            Com  experiência nessa área , estou
            constantemente buscando aprendizado e desenvolvendo soluções
            eficientes para problemas cotidianos.
          </p>
        </div>

        
      </div>


      <div className="skills  mt-3 mb-2 flex justify-center items-center flex-col ">
        <h1 className="h1 text-center m-3">Habilidades</h1>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-10/12 sm:gap-8 w-full gap-4 justify-center items-center overflow-hidden">
            {skills.map((el,index) => {
              return (
                
                <motion.div key={index+"-skill-item"}
          initial={{ opacity: 0 , x: index % 2==0 ? -100 : 100 }}
          whileInView={{  opacity: 1, x: 0 }}
          transition={{duration:0.8}}
                 className="shadow-md flex flex-col justify-center  rounded-lg p-4 h-72 w-auto m-2 ">
                  
                  <div className="flex gap-2  m-3 justify-center items-center">
                    {
                    el.imgs.map((img)=>{
                      return<Image
                    className="image-skills-item"
                    width={70}
                    height={100}
                    src={img}
                    alt={el.title+"image"}
                    loading="lazy"
                  />
                    })
                  }
                  </div>
<h2 className="text-3xl mt-2 font-bold text-center">{el.title}</h2>
                 
                </motion.div>
              );
            })}
          </div>
          
       
      </div>

      <div className="experiencia md:h-screen flex-col flex md:gap-16">
        <h1 className="h1 text-center">Experiências </h1>
        <div className="experiencia-div">
          <Information arrayAssuntos={trabalhos} />
          
        </div>
      </div>
      <div className="cursos mt-8  flex-col flex md:gap-16 ">
        <h1 className="h1 text-center m-5">Cursos</h1>
        <div className="cursos-div">
          <Information arrayAssuntos={cursos} />
          
        </div>
      </div>
     

     
    </div>
  );
};

export default About;

const Information = ({ arrayAssuntos }) => {

 
  return (
    <div className=" overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {arrayAssuntos.map((el) => {
        return (
          <motion.div
          initial={{x:-300, opacity: 0   }}
          whileInView={{ x:0 ,opacity: 1 }}
          transition={{duration:0.5}}
          className=" bg-[#151019] bg-opacity-80 border-2 rounded-lg flex flex-col justify-center items-center gap-2 m-3 mb-5 p-2 shadow-md shadow-slate-400">
            <div className="">
              <Image
              loading="lazy"
                className={"m-2"}
                alt={el[1]+"image"}
                width={80}
                height={80}
                src={el[4]}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                {el[0]} <span className="text-sky-400">{el[1]}</span>
              </h3>
              <h4 className="italic font-medium text-slate-200">{el[2]}</h4>
              <p className="indent-3 text-justify p-2"> {el[3]}</p>
              <br />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
export { Information };
