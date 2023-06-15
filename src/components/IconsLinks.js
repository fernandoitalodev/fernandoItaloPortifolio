import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";


const IconsLinks = ({formasDeContato, width,height}) => {
  return (
    <div className="flex items-center justify-center gap-3 m-2" >
        {formasDeContato.map((el) => {
              return (
                <div key={`el${el}`} className="formas-de-contato-item">

<Image
loading="lazy"
            src={el[0]}
            width={width}
            height={height}
            
            alt={`${el[1]}image`}
          /> 

                 
   <Link target="_blank" href={el[2]}>
 
</Link>

                 
                </div>
              );
            })}
    </div>
  )
}

export default IconsLinks