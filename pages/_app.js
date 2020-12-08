import '../styles/globals.css';
import BusquedaState from '../context/busqueda/BusquedaState';
import BackEndState from '../context/backend/BackEndState';
function MyApp({ Component, pageProps }) {
  return(
    <BusquedaState>
      <BackEndState>   
          <Component {...pageProps} />
      </BackEndState>
    </BusquedaState>
  ) 
}

export default MyApp;
