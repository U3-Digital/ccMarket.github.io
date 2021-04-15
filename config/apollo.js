import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import fetch from 'node-fetch';
import {setContext} from 'apollo-link-context'

const HttpLink = createHttpLink({
    uri: 'https://midirectorio-u3-server.herokuapp.com/',
    fetch
});

const authLink = setContext((_,{headers}) =>{
    //Leer el storage almacenado con el token
    const token = localStorage.getItem('token');
    return{
        headers:{
            ...headers,
            authorization: token ? `Bearer ${token} ` : ''
        }
    }
});

const client = new ApolloClient({
    cache: new InMemoryCache(), 
    link: authLink.concat(HttpLink)
});

export default client;