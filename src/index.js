import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from "reactfire";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: "AIzaSyBontk5WRKQO7y2jKVUAncvob-LQDZ8Nrg",
  authDomain: "jeopardy-buzz.firebaseapp.com",
  projectId: "jeopardy-buzz",
  storageBucket: "jeopardy-buzz.appspot.com",
  messagingSenderId: "228718219000",
  appId: "1:228718219000:web:076ceb4b726303ed11b50d",
  measurementId: "G-QE25LN4T4C"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
