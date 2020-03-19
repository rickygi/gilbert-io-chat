import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD8de2TLvHYPhllw2aJiYjPBG3TzCFe7e8',
  authDomain: 'gilbert-io-chat.firebaseapp.com',
  databaseURL: 'https://gilbert-io-chat.firebaseio.com',
  projectId: 'gilbert-io-chat',
  storageBucket: 'gilbert-io-chat.appspot.com',
  messagingSenderId: '913875901646',
  appId: '1:913875901646:web:61c03507d2e1cb45ab449f'
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db };
