import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyBmCI6su-q9TieTqRppYIxF1v5qGNP13Qw",
    authDomain: "mobi-disp.firebaseapp.com",
    databaseURL: "https://mobi-disp.firebaseio.com",
    projectId: "mobi-disp",
    storageBucket: "mobi-disp.appspot.com",
    messagingSenderId: "1079971325369"
})

export const auth = firebaseApp.auth()
export const database = firebaseApp.database()
export const storage = firebaseApp.storage()
export default firebaseApp