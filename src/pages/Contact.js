import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink} from '@fortawesome/free-solid-svg-icons'
const formasDeContato = [["/whats-logo.png", "WhatsApp", " https://wa.me/5586998447237"],["/linkedin-log.png","Linkedin","https://www.linkedin.com/in/fernando-italo/"],["/git-logo.png","GitHub","https://github.com/fernandoitalodev"]];
import emailjs from '@emailjs/browser';
const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
 
}).required();


const Contacts = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmitFunction= (data)=>{

    let template={
      from_name: data.name,
      subject:data.subject,
      email:data.email,
      message:data.mensagem
    }
     emailjs.send("service_rkk23b1","template_xfihh8m",template,"Cw3GpVhaOVlrzQQFy")

    
  }
  return (
    <div className="contact">
      <h1 className="h1">Contatos</h1>

      <div className="div-contact">
        <div className="contactContent">
          <div className="formas-de-contato">
            {formasDeContato.map((el) => {
              return (
                <div key={`el${el}`} className="formas-de-contato-item">

<Image
            src={el[0]}
            width={200}
            height={200}
            className="contact-images"
            alt={`${el[1]}image`}
          /> 

                 
   <Link target="_blank" href={el[2]}>
 <h2 className="h2"><FontAwesomeIcon icon={faLink}/> {el[1]} </h2>
</Link>

                 
                </div>
              );
            })}
          </div>
          <div className="send-me-a-email">
            <h2 className="h2">Me envie um Email</h2>

            <form onSubmit={handleSubmit(onSubmitFunction)} className=" flex  gap-4" >
              <div  >
                <div className="flex flex-col">
                   
                <input className={`${errors.name ? "border-solid border-2 border-red-700 focus:outline-none ":""}`}  {...register("name", { required: true })} placeholder=" * nome" />
                
                </div>
                <div className="input-div" >
                  <input className={`${errors.email ? "border-solid border-2 border-red-700 focus:outline-none ":""}`}  {...register("email" ,{ required: true })} placeholder=" * email" />
                {errors.email && <span >Insira um email válido.</span>}
                </div>
                
              </div>

              <input
                {...register("subject")}
                placeholder="assunto"
              />

              <textarea
               {...register("mensagem", { required: true })}
                placeholder="* mensagem  "
                className={`${errors.mensagem ? "border-solid border-2 border-red-700 focus:outline-none ":""}`} 
              ></textarea>
              <button className="btn" type="submit">
                Enviar
              </button>
              
            </form>
          </div>
        </div>
        <div className="img-contact">
          <Image
            src={"/samurai2.png"}
            width={500}
            height={300}
            className="img-contact-samurai"
            alt="samurai image"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
