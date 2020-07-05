import firebaseInstance from './firebase';
import database from 'firebase/database'

export default {
    getUserData,
    writeData,
    insertCourse,
    tableOfItems,
    getThekey
}

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
function getThekey(courses){
    let keyArray = [];
    for (const prop in courses.courses){
        keyArray.push(prop);
    }
    return keyArray;
}

function tableOfItems(courses) {
    const tableArray =[]
    let keyArray = getThekey(courses)
    for (const key of keyArray){
        tableArray.push(courses.courses[key])
    }
    return tableArray;
}






