import NextPage from "@/components/NextPage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projectsArray = [
  [
    "/site-falcon-img.png",
    "Space X clone site",
    "Bootstrap,Sass,html",
    "Projeto inspirado no site da Space X",
    "https://github.com/fernandoitalodev/spacex-clone",
    "https://fernandoitalodev.github.io/spacex-clone/",
  ],
  [
    "/petshop.jpg",
    "Site Mundo Pet",
    "HTML,CSS,JS",
    "Landing page apresentando os serviços de uma clinica veterinária. ",
    "https://github.com/fernandoitalodev/PetShop-site",
    "https://fernandoitalodev.github.io/PetShop-site/",
  ],
  [
    "/rick-and-morty.jpg",
    "Enciclopédia Rick & Morty",
    "React, Bootstrap, api",
    "Site contendo informações a respeito da série de tv rick and Morty",
    "https://github.com/fernandoitalodev/rick-and-morty-wiki",
    "https://rick-and-morty-wiki-cyan.vercel.app/",
  ],
  [
    "/bankscreenshot.jpg",
    "EaseBank Landing page",
    "HTML,Sass, js",
    "Landing page de um Banco",
    "https://github.com/fernandoitalodev/easebank-landing-page",
    "https://fernandoitalodev.github.io/easebank-landing-page/",
  ],
];
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="h1"> Portifólio</h1>
      <h2 className="h2">Meus últimos projetos:</h2>
      <div className="div-flex">
        <div className="div-projects">
          {projectsArray.map((el) => {
            return (
              <div className="project-item-div">
                <Image
                  className="img-project"
                  src={el[0]}
                  width={300}
                  height={300}
                />
                <h4 className="subtitle"> {el[2]} </h4>
                <h2 className="title">{el[1]}</h2>

                <p> {el[3]} </p>
                <div className="links">
                  <Link target="_blank" href={el[4]}>
                  <Image
                  className="git-icon"
                  src={"/git-icon.png"}
                  width={30}
                  height={30}
                />
                  </Link>
                  <Link href={el[5]} target="_blank">
                    <button className="btn">Visitar site </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="img-projects"></div>
      </div>
      <NextPage pagina="/Services" nomeDaPagina="Serviços" />
      <br/> <br/>
    </div>
  );
};

export default Projects;
