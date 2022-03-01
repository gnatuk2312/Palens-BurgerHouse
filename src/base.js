import Rebase from 're-base';
import firebase from 'firebase/app';
require('firebase/database')

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAKY4BKMCo6ZN21vLG-F4L4dFwWIQWvEiM",
	authDomain: "palens-burgerhouse.firebaseapp.com",
	projectId: "palens-burgerhouse",
	storageBucket: "palens-burgerhouse.appspot.com",
	messagingSenderId: "735798567423",
	appId: "1:735798567423:web:b79feef2a5623f5dc947ca"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;