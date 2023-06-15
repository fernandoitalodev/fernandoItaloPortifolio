import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const formasDeContato = [
  ["/icones/whats-logo.png", "WhatsApp", " https://wa.me/5586998447237"],
  [
    "/icones/linkedin-log.png",
    "Linkedin",
    "https://www.linkedin.com/in/fernando-italo/",
  ],
  ["/icones/git-logo.png", "GitHub", "https://github.com/fernandoitalodev"],
];
import emailjs from "@emailjs/browser";
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const Contacts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    let template = {
      from_name: data.name,
      subject: data.subject,
      email: data.email,
      message: data.mensagem,
    };
    emailjs.send(
      "service_rkk23b1",
      "template_xfihh8m",
      template,
      "Cw3GpVhaOVlrzQQFy"
    );
  };
  return (
    <div className=" p-3 mt-4">
      <h1 className="h1 text-center">Contatos</h1>

      <div className="m-2 flex-col flex  items-center">
        <div className="gap-4 flex justify-between m-2 p-2 md:w-6/12">
          {formasDeContato.map((el) => {
            return (
              
               <Link target="_blank" href={el[2]}>
<div key={`el${el}`} className="flex flex-col items-center justify-center">

                <Image
                  src={el[0]}
                  width={50}
                  height={50}
                  className="block"
                  alt={`${el[1]}image`}
                />

                
                  <h2 className="h2">
                    {el[1]}{" "}
                  </h2>
                  </div>
                </Link>
              
            );
          })}
        </div>
        <div className="flex flex-col gap-2  justify-center items-center">
          <h2 className="text-3xl mt-2 mb-4 font-bold whitespace-nowrap">Me envie um Email</h2>

          <form
            onSubmit={handleSubmit(onSubmitFunction)}
            className="p-2 flex flex-col gap-6 items-center justify-center"
          >
            <div className="w-full  flex items-center gap-2 justify-between relative ">
              <h3 className="absolute -top-6 " >Nome:</h3>
              <input
                className={` input-style ${
                  errors.name
                    ? "border-solid border-2 border-red-700 focus:outline-none "
                    : ""
                }`}
                {...register("name", { required: true })}
                placeholder=" * nome"
              />
            </div>
            <div className="relative w-full justify-between flex items-center gap-2">
              <h3 className="-top-5 absolute" >Email: </h3>
              <input
                className={` input-style ${
                  errors.email
                    ? "border-solid border-2 border-red-700 focus:outline-none "
                    : ""
                }`}
                {...register("email", { required: true })}
                placeholder=" * email"
              />
              {errors.email && (
                <span className="text-sm text-red-400 absolute -bottom-5 left-1/3">Insira um email válido.</span>
              )}
            </div>
            <div className="flex items-center gap-2 relative " >
              <h3 className="absolute -top-5" >Assunto:</h3>
              <input
                className="input-style"
                {...register("subject")}
                placeholder="assunto"
              />
            </div>

            <textarea
              {...register("mensagem", { required: true })}
              placeholder="* mensagem  "
              className={`input-style w-full h-28`}
            ></textarea>
            <button className="border-2 rounded-lg p-2 text-xl" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
