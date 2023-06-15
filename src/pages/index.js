import HomePage from "./HomePage";
import About from "./About";
import ScrollToTop from "./ScrollToTop";
import Projects from "./Projects";
import Contacts from "./Contact";
import Head from "next/head";



export default function Home() {
  
  return (<div>
     <Head>
        <title>Portifólio dev</title>
        <meta name="description" content="Portifĺoio de um programador frontEnd Freelancer que atende no Brasil, em Teresina, Piauí" />
      </Head>
    <HomePage/>
    <About/>
     <Projects/>
     <Contacts/>
    
    <ScrollToTop />
  </div>);
}
