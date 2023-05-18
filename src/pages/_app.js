import '@/styles/globals.css'
import "../styles/main.scss"
import "../styles/Header.scss"
import "../styles/app.scss"
import "../styles/about.scss"
import "../styles/projects.scss"
import "../styles/contact.scss"
import "../styles/Services.scss"
import "../styles/globalComponents.scss"
import Header from './Header'

export default function App({ Component, pageProps }) {
  return (
  <div className="App">
    <Header/>
  <Component {...pageProps} />
   
  </div>)
}
