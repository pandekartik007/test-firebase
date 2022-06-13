importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
)

// Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
  apiKey: 'AIzaSyB_QhpkZV8wGATJjGjTCFdvRtzIAnDwWik',
  authDomain: 'shopapp-47ca8.firebaseapp.com',
  projectId: 'shopapp-47ca8',
  storageBucket: 'shopapp-47ca8.appspot.com',
  messagingSenderId: '590675817474',
  appId: '1:590675817474:web:c750ee4195dd605262a31b',
}

firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload)

  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
