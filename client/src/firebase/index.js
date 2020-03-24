import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
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

const auth = firebase.auth;
const database = firebase.database();
const firestore = firebase.firestore();

const setupPresense = user => {
  const isOfflineForDatabase = {
    state: 'offline',
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  };

  const isOnlineForDatabase = {
    state: 'online',
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  };

  const isOfflineForFirestore = {
    state: 'offline',
    lastChanged: firebase.firestore.FieldValue.serverTimestamp()
  };

  const isOnlineForFirestore = {
    state: 'online',
    lastChanged: firebase.firestore.FieldValue.serverTimestamp()
  };

  const databaseRef = database.ref(`/status/${user.uid}`);
  const userDoc = firestore.doc(`users/${user.uid}`);

  database.ref('.info/connected').on('value', async snapshot => {
    if (snapshot.val() === true) {
      userDoc.update({
        status: isOfflineForFirestore
      });
      return;
    }

    await databaseRef.onDisconnect().set(isOfflineForDatabase);
    databaseRef.set(isOnlineForDatabase);
    userDoc.update({
      status: isOnlineForFirestore
    });
  });
};

export { auth, firestore, setupPresense };
