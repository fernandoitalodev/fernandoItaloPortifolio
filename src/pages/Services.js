// import Faq from "@/components/Faq";
import NextPage from "@/components/NextPage";
import Image from "next/image";


const servicesInfos = [
  [ "/services-images/page-browser-analysis.svg","Landing Pages", " São páginas web projetadas para converter visitantes em leads ou clientes, por meio de um formulário ou chamada para ação específica."],
  ["/services-images/page-browser.svg", "Sites Estatucionais", "São páginas web que representam organizações, fornecendo informações sobre sua missão, valores, serviços e equipe, com o objetivo de estabelecer credibilidade e promover a marca."],
  ["/services-images/grafico.svg","sites para empresas" , " São sites projetados para promover suas atividades e serviços de forma acessível, fornecendo informações relevantes aos clientes em potencial e facilitando o contato direto."],
  ["/services-images/smartphone.svg","sites dinamicos",  "São aqueles que possuem conteúdo interativo e atualizado constantemente, permitindo personalização e interações com os usuários, proporcionando uma experiência mais envolvente e personalizada."],
];
const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-32 ">
      <h1 className="h1">  Serviços</h1>

      <div className=" grid sm:grid-cols-1  2xl:grid-cols-4 lg:grid-cols-2 w-100 gap-16 justify-center items-center text-center   ">
        {
          servicesInfos.map((el, index)=>{
            return(
            <div key={index} className=" flex flex-col justify-center items-center 2xl:w-auto 2xl:h-96  lg:w-96 h-72 lg:border border-cyan-400 lg:shadow-sm  shadow-cyan-200 p-5 rounded-xl  ">
              <Image width={100} height={100} src={el[0]}/>
              
              <h2 className=" py-3 text-2xl   2xl:text-xl font-semibold">{el[1]}</h2>
              <p className="indent-5 text-center text-base  text-gray-100 2xl:text-lg font-normal " >{el[2]}</p>

            </div>
            )
          })
        }
      </div>
    {/* <Faq/> */}
    
    </div>
  );
};

export default Services;
