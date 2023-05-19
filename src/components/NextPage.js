import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const NextPage = ({pagina,nomeDaPagina}) => {
  return (
    <>
    <Link className=' text-base' href={pagina}>{nomeDaPagina} <FontAwesomeIcon icon={faArrowRight} className="text-base" /> </Link>
    </>
  )
}

export default NextPage