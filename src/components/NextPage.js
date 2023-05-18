import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const NextPage = ({pagina,nomeDaPagina}) => {
  return (
    <>
    <Link className='next-page-link' href={pagina}>{nomeDaPagina} <FontAwesomeIcon icon={faArrowRight} /> </Link>
    </>
  )
}

export default NextPage