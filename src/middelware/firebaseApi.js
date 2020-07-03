import firebaseInstance from './firebase';
import database from 'firebase/database'

function getUserData() {
    const user = firebaseInstance.firebase.auth().currentUser;
    return firebaseInstance.firebase.database().ref(`users/${user.uid}`).once('value')
        .then(res => {
            return res.val();
    })
}

function writeData(data, path) {
    const user = firebaseInstance.firebase.auth().currentUser;
    firebaseInstance.firebase.database().ref(path).push(data);
}

function insertCourse(data) {
   const path = `users/${user.uid}/courses`;
    writeData(data, path);
}


















export default {
    getUserData,
    writeData,
    insertCourse
}