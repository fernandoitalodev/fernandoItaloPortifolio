import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
const ProjectsItem = ({ item, selectedId, setSelectedId }) => {
  return (
    <>
      <motion.div
        layoutId={item}
        onClick={() => setSelectedId(item)}
        className={` m-2 flex flex-col items-center  relative `}
      >
        <Image
          className="rounded-lg shadow-md  "
          src={item.img}
          width={450}
          height={500}
        />
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} className=" p-2 bg-slate-800 m-2 rounded-lg align-center fixed top-[5%] h-auto border shadow-md md:w-8/12   md:left-[18%] flex-col flex justify-center   ">
             <button className="self-end m-2 font-bold " onClick={()=> setSelectedId(null)}>X</button>
            
            <Image
            loading="lazy"
              className="rounded-lg shadow-md self-center "
              src={selectedId.img ? selectedId.img : ""}
              width={450}
              height={500}
            />
           <h4 className="text-2xl font-bold text-center m-2 md:text-3xl"> {selectedId.title} </h4>

           <p className="md:text-xl md:p-2" > {selectedId.description} </p>

                <h2 className="m-2">{selectedId.skills}</h2>

                
                <div className="  bottom-0 flex justify-between w-full m-2 p-2  items-center">
                  <Link target="_blank" href={selectedId.git}>
                  <Image
                  className="git-icon"
                  src={"/git-icon.png"}
                  width={30}
                  height={30}
                />
                  </Link>
                  <Link href={selectedId.site} target="_blank">
                    <button className="border-2 p-2 rounded-lg hover:bg-black">Visitar site </button>
                  </Link>
                </div> 
          </motion.div>
        )}
      </AnimatePresence>
      {/*                 
                */}
    </>
  );
};

export default ProjectsItem;
