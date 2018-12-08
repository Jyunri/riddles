import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCEHGCtucJR-fs5YZNdni6dpqeOF1rGEew',
  authDomain: 'riddles-3813b.firebaseapp.com',
  databaseURL: 'https://riddles-3813b.firebaseio.com',
  projectId: 'riddles-3813b',
  storageBucket: 'riddles-3813b.appspot.com',
  messagingSenderId: '643049252508'
};

firebase.initializeApp(config);

export default firebase;
