
import firebase from '../components/firebase';
import React from 'react'
import Layout from '../components/Layout';
export default function Home() {
  // const database = firebase.database();
  // const database2 = firebase.firestore().collection('negocios');

  /* function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
  }

  const cosa = async () => {
    const casa = database.ref('/negocios').once('value').then((snapshot) => {
      snapshot.val().forEach( async (negocio) => {
          console.log(negocio);
          const id = randomString(32, '#aA');
          const data = {
            ...negocio
          }
          const res = await database2.doc(id).set(data);
      });
    });
    
  }

  cosa(); */
  return (
    <Layout>
      <h3>Hola</h3>
    </Layout>
  )
}
