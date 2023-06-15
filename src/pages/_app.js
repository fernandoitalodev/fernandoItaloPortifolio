import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
  <div className="App  bg-[#151019] text-white box-border">
    
  <Component {...pageProps} />
   
  </div>)
}
