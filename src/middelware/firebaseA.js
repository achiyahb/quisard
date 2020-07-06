import firebaseInstance from './firebase';
import database from 'firebase/database'

const db = firebaseInstance.firebase.database();

export default {
    getUserData,
    writeData,
    insertCourse,
    deleteData,
    updateCourse
}
function getUserData(pathArr) {
    const path = createPath(pathArr)
    return db.ref(path).once('value')
        .then(res => {
            return res.val();
        })
}

function updateData(data, path){
    db.ref(path).set(data);
}

function writeData(data, path) {
    db.ref(path).push(data);
}

function removeData(path) {
    db.ref(path).set(null);
}

function insertCourse(data, pathArr) {
    const path = createPath(pathArr)
    writeData(data, path);
}

function deleteData(pathArr) {
    const path = createPath(pathArr)
    removeData(path);
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

function updateCourse(data, pathArr) {
    const path = createPath(pathArr)
    updateData(data, path);
}






