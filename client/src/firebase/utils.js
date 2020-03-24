import { useState, useEffect } from 'react';
import { auth, firestore, setupPresense } from '../firebase';

function useAuth() {
  const [authAttempted, setAuthAttempted] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    return auth().onAuthStateChanged(member => {
      if (member) {
        const user = {
          displayName: member.displayName,
          photoUrl: member.photoURL,
          uid: member.uid
        };
        setUser(user);

        firestore
          .collection('users')
          .doc(user.uid)
          .set(user, { merge: true });

        setupPresense(user);
      } else {
        setUser(null);
      }
      setAuthAttempted(true);
    });
  }, []);

  return { authAttempted, user };
}

function useCollection(path, orderBy, where) {
  const [docs, setDocs] = useState([]);

  const [queryField, queryOperator, queryValue] = where || [];

  useEffect(() => {
    let collection = firestore.collection(path);

    if (orderBy) {
      collection = collection.orderBy(orderBy);
    }

    if (queryField) {
      collection = collection.where(queryField, queryOperator, queryValue);
    }

    return collection.onSnapshot(snapshot => {
      const docs = [];
      snapshot.forEach(doc => {
        docs.push({
          ...doc.data(),
          id: doc.id
        });
      });
      setDocs(docs);
    });
  }, [path, orderBy, queryField, queryOperator, queryValue]);

  return docs;
}

function useDoc(path) {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    return firestore.doc(path).onSnapshot(doc => {
      setDoc({
        ...doc.data(),
        id: doc.id
      });
    });
  }, [path]);

  return doc;
}

const cache = {};
const pendingCache = {};

function useDocWithCache(path) {
  const [doc, setDoc] = useState(cache[path]);

  useEffect(() => {
    if (doc) {
      return;
    }

    let current = true;
    const pending = pendingCache[path];
    const promise = pending || (pendingCache[path] = firestore.doc(path).get());

    promise
      .then(doc => {
        if (current) {
          const obj = {
            ...doc.data(),
            id: doc.id
          };
          setDoc(obj);
          cache[path] = obj;
        }
      })
      .catch(error => console.error(error));

    return () => {
      current = false;
    };
  }, [doc, path]);

  return doc;
}

export { useAuth, useCollection, useDoc, useDocWithCache };
