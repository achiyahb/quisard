const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.madeRootOfCourses = functions.database.ref('/users/{uId}/courses/{cid}')
    .onCreate((snapshot, context) => {
            let cid = context.params.cid
            let uid = context.params.uId
            return snapshot.ref.root.child(`/quizzes/${cid}/authorId`).set(uid);
    });

exports.addAuthorToClient = functions.database.ref('/clients/{cluid}/quizzes/{quid}')
    .onCreate((snapshot, context) => {
        let quid = context.params.quid
        let authorid = snapshot.ref.root.child(`/quizzes/${quid}/authorId`).once('value')
            .then(dataSnapshot => {
                authorid = dataSnapshot.val();
                console.log(authorid)
                return snapshot.ref.child(`/authorId`).set(authorid)
            })

        console.log(quid)
    });


exports.addCourseNameToClient = functions.database.ref('/clients/{cluid}/quizzes/{quid}/authorId')
    .onCreate((snapshot, context) => {
        let quid = context.params.quid
        let authorId = snapshot.val()
        let courseName = snapshot.ref.root.child(`/users/${authorId}/courses/${quid}/courseName`).once('value')
            .then(dataSnapshot => {
                courseName = dataSnapshot.val();
                return snapshot.ref.parent.child(`/courseName`).set(courseName)
            })
        console.log(authorid)
    });



exports.deleteFromRootOfCourses = functions.database.ref('/users/{uId}/courses/{cid}')
    .onDelete((snapshot, context) => {
        let quizId = context.params.cid
        return snapshot.ref.root.child(`/quizzes/${quizId}`).set(null);
    });

// exports.madeRootOfCourses1 = functions.database.ref('/users/{uId}/courses/{cid}')
//     .onUpdate((snapshot, context) => {
//
//         let cid = context.params.cid
//         let uid = context.params.uId
//         console.log(cid);
//         console.log(uid);
//
//         return snapshot.ref.parent.parent.parent.parent.child(`courses/${cid}/authorId`).set(uid);
//     });

// exports.madeRootOfCourses1 = functions.database.ref('/users/{uId}/courses/{cid}/chapters/{chaid}/questions/{qid}')
//     .onCreate((snapshot, context) => {
//         let quizId = context.params.cid
//         let uid = context.params.uId
//         return snapshot.ref.parent.parent.parent.parent.parent.parent.parent.parent.child(`quizzes/${quizId}/authorId`).set(uid);
//     });


// exports.madeRootOfCourses1 = functions.database.ref('/courses/{cid}')
//     .onCreate((snapshot, context) => {
//
//         let child = 'check'
//         console.log('hi 1');
//         console.log(child);
//         return snapshot.ref.child('childName').push(child);
//     });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// exports.makeUppercase = functions.database.ref('/users/{uId}/courses/{cId}')
//     .onCreate((snapshot, context) => {
//      const original = snapshot.child('goal').val();
//         const uppercase = original.toUpperCase();
//         console.log('hi there');
//         console.log(original);
//
//         return snapshot.ref.child('founderName').set(uppercase);
//     });



// exports.ifChanged = functions.database.ref('/users/{uId}/courses/{cId}')
//     .onWrite((snapshot, context) => {
//         console.log('change made!!!');
//     });
