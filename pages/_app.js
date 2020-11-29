import '../styles/globals.css';
import BusquedaState from '../context/busqueda/BusquedaState';
function MyApp({ Component, pageProps }) {
  return(
    <BusquedaState>   
      <Component {...pageProps} />
    </BusquedaState>
  ) 
}

export default MyApp;
