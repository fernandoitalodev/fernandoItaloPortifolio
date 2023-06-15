import NextPage from "@/components/NextPage";
import ProjectsItem from "@/components/ProjectsItem";
import { useState } from "react";




const projectsArray = [
  {
    img:"/projects-images/site-falcon-img.png",
    title:"Space X clone site",
    skills:"Bootstrap,Sass,html",
    description:"Projeto inspirado no site da Space X",
    git:"https://github.com/fernandoitalodev/spacex-clone",
    site:"https://fernandoitalodev.github.io/spacex-clone/",
  },{
    img:"/projects-images/petshop.jpg",
    title:"Site Mundo Pet",
    skills:"HTML,CSS,JS",
    description:"Landing page apresentando os serviços de uma clinica veterinária. ",
    git:"https://github.com/fernandoitalodev/PetShop-site",
    site:"https://fernandoitalodev.github.io/PetShop-site/",
  },
  {
    img:"/projects-images/rick-and-morty.jpg",
    title:"Enciclopédia Rick & Morty",
    skills:"React, Bootstrap, api",
    description:"Site contendo informações a respeito da série de tv rick and Morty",
    git:"https://github.com/fernandoitalodev/rick-and-morty-wiki",
    site:"https://rick-and-morty-wiki-cyan.vercel.app/",
  },
  {
    img:"/projects-images/bankscreenshot.jpg",
    title:"EaseBank Landing page",
    skills:"HTML,Sass, js",
    description:"Landing page de um Banco",
    git:"https://github.com/fernandoitalodev/easebank-landing-page",
    site:"https://fernandoitalodev.github.io/easebank-landing-page/",
  },{
    img:"/projects-images/english-site.png",
    title:"Smart Study",
    skills:"React.js, Tailwindcss",
    description:"Site para aprender inglês usando textos e musicas.",
    git:"https://github.com/fernandoitalodev/estude-ingles-por-textos-e-musicas",
    site:"https://estude-ingles-por-textos-e-musicas.vercel.app/",
  },
 
];
const Projects = () => {

  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className="mt-8">
      <h1 className="h1 md:text-6xl"> Portifólio</h1>
      <h2 className="h2 md:text-2xl indent-8">Meus últimos projetos:</h2>
      <div className="div-flex">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {projectsArray.map((el) => {
            return (
              <ProjectsItem item={el} selectedId={selectedId} setSelectedId={setSelectedId}/>
            );
          })}
        </div>
        
      </div>
      
      
    </div>
  );
};

export default Projects;
