import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
  <div className="App bg-[url('/cool-background.png')] lg:bg-[url('/fake-img.jpg')]  bg-[#151019] text-white box-border">
    
  <Component {...pageProps} />
   
  </div>)
}
