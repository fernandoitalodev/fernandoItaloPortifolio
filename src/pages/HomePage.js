import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";
import Link from "next/link";
import IconsLinks from "@/components/IconsLinks";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const iconsHome=[["/whats-logo.png", "WhatsApp", " https://wa.me/5586998447237"],["/linkedin-log.png","Linkedin","https://www.linkedin.com/in/fernando-italo/"],["/git-logo.png","GitHub","https://github.com/fernandoitalodev"]]

const HomePage = () => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
    <main className="relative w-full h-[90%] p-2 flex flex-col md:w-10/12 justify-center items-center" >
      <div className="relative z-10">
        <h1 className="h1 md:text-5xl">
Olá, meu nome é 
          <span className="text-blue-500 italic"> Fernando </span>
        </h1>
        <h1 className="md:text-2xl indent-5 w-full text-xl font-bold mt-3 ">
          Programador <ReactTypingEffect text={["  FrontEnd"]} />
        </h1>
       <p className=" md:text-xl text-left text-sm p-2 indent-5 md:w-10/12">
       Me dedico a transformar ideias em projetos inovadores. Explore meus últimos projetos, mostrando minha experiência em React.js e desenvolvimento web.
       </p>
   
      </div>
      <div className="absolute -top-16 z-0">
        <Image
        loading="lazy"
          className={`opacity-20  lg:h-[500px] lg:w-auto`}
          height={300}
          width={300}
          src={"/bg/vangog.png"}
          alt="Vangog image"
        />
      </div>
    </main>
    <div>

<FontAwesomeIcon className="h-8 animate-bounce w-8" icon={faAnglesDown} />
    </div>
    
  </div>
  )
}

export default HomePage