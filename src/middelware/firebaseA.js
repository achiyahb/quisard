import firebaseInstance from './firebase';
import database from 'firebase/database'

export default {
    getUserData,
    writeData,
    insertCourse,
    deleteData,
}

async function getUserData(pathArr) {
    const path = createPath(pathArr)

    return await firebaseInstance.firebase.database().ref(path).once('value')
        .then(res => {
            return res.val();
        })
}

function writeData(data, path) {
    firebaseInstance.firebase.database().ref(path).push(data);
}

function deleteData(data, course_id) {
    const user = firebaseInstance.firebase.auth().currentUser;
    firebaseInstance.firebase.database().ref(`users/${user.uid}/courses/${course_id}`).set(data);
}

function insertCourse(data, pathArr) {
    const path = createPath(pathArr)
    writeData(data, path);
}

// async function selectCourses(pathArr) {
//
//     let items = await getUserData(path);
//     return items
//
// }

function createPath(pathArr) {
    const user = firebaseInstance.firebase.auth().currentUser;
    let path = "users/" + user.uid;
    for (let part of pathArr){
        path = path + `/` + part;
    }
    return path;
}






