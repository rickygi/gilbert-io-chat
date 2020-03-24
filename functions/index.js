const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { bot, greetings } = require('./data');
const { is, randomIndex } = require('./utils');

admin.initializeApp();

const firestore = admin.firestore();

// setup bot
firestore
  .collection('users')
  .doc(bot.uid)
  .set(bot, { merge: true });

exports.onUserStatusChanged = functions.database
  .ref('status/{userId}')
  .onUpdate((change, context) => {
    const eventStatus = change.after.val();
    const user = firestore.doc(`/users/${context.params.userid}`);

    return change.after.ref
      .once('value')
      .then(snapshot => {
        const status = snapshot.val();

        if (status.lastChanged > eventStatus.lastChanged) return;

        eventStatus.lastChanged = new Date(eventStatus.lastChanged);
        return user.update({ status: eventStatus });
      })
      .catch(error => console.error(error));
  });

exports.onBotMessage = functions.firestore
  .document('channels/general/messages/{messageId}')
  .onCreate((doc, context) => {
    const message = doc.data();

    if (!message.text.startsWith('@hello')) return;

    return sendMessageToBot(message.text.replace(/^@hello /, ''))
      .then(response => {
        return firestore.collection('channels/general/messages').add({
          text: response,
          user: firestore.doc('/users/hellobot'),
          createdAt: new Date()
        });
      })
      .catch(error => console.error(error));
  });

function sendMessageToBot(message) {
  const words =
    message &&
    message.split(' ').reduce((acc, cur) => {
      if (is('String', cur)) acc[cur.toLowerCase()] = true;
      return acc;
    }, {});

  const filterByLanguage =
    words &&
    greetings.filter(greeting => {
      const language = greeting.language.toLowerCase();
      return words[language];
    });

  const formality = () => {
    if (words['formal']) return 'formal';
    if (words['informal']) return 'informal';
    return randomIndex(2) ? 'formal' : 'informal';
  };

  return new Promise((resolve, reject) => {
    const greeting = filterByLanguage.length
      ? filterByLanguage[0]
      : greetings[randomIndex(greetings.length)];
    const hello = greeting[formality()];

    resolve(`${greeting.flag}${hello}`);
  });
}
