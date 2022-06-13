import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyB_QhpkZV8wGATJjGjTCFdvRtzIAnDwWik',
  authDomain: 'shopapp-47ca8.firebaseapp.com',
  databaseURL: 'https://shopapp-47ca8-default-rtdb.firebaseio.com',
  projectId: 'shopapp-47ca8',
  storageBucket: 'shopapp-47ca8.appspot.com',
  messagingSenderId: '590675817474',
  appId: '1:590675817474:web:c750ee4195dd605262a31b',
}

const firebaseApp = initializeApp(firebaseConfig)
const messaging = getMessaging(firebaseApp)

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      'BEOzPsqB_nqBy6PclpqRCOjcBfLEJ2CyI7FyMM71YMbCJeNLdecFtVBGoFmfUZgMwi4E36TW4Y2JJriGIy_iPGk',
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken)
        setTokenFound(true)
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        )
        setTokenFound(false)
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err)
      // catch error while creating client token
    })
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload)
    })
  })
