import '../styles/globals.css';
import {ApolloProvider} from '@apollo/client';
import client from '../config/apollo';
import BusquedaState from '../context/busqueda/BusquedaState';
import BackEndState from '../context/backend/BackEndState';
function MyApp({ Component, pageProps }) {
  return(
    <ApolloProvider client = {client}>
      <BusquedaState>
        <BackEndState>   
            <Component {...pageProps} />
        </BackEndState>
      </BusquedaState>
    </ApolloProvider>
  ) 
}

export default MyApp;
