import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHPAk4y_AXFzftLG-u06KfWwU5I9AyxRs',
  authDomain: 'cosmere-latam.firebaseapp.com',
  databaseURL: 'https://cosmere-latam.firebaseio.com',
  projectId: 'cosmere-latam',
  storageBucket: 'cosmere-latam.appspot.com',
  messagingSenderId: '448096953500',
  appId: '1:448096953500:web:6b09b61e0640f13d253959',
  measurementId: 'G-YP20KEWYXN',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const dbCon = firebase.firestore();

// Seccion de Login

const mapUserFormat = (user) => {
  const {photoURL, displayName, email} = user;
  return {
    avatar: photoURL,
    username: displayName,
    email: email,
  };
};

export const loginWithGoogle = () =>{
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
      .auth()
      .signInWithPopup(GoogleProvider);
};

export const onAuthStateChanged = (onChange) => {
  return firebase
      .auth()
      .onAuthStateChanged((user) => {
        const normalizedUser =
            user ? mapUserFormat(user) : null;
        onChange(normalizedUser);
      });
};

export const logOut = () => {
  return firebase.auth().signOut();
};


// fetch de Noticias
export const fetchNewsList = (section, page) =>{
  if (section=='all') {
    return dbCon
        .collection('news')
        .limit(page)
        .orderBy('date', 'desc')
        .get()
        .then((snapshot) => {
          return snapshot.docs.map((doc) =>{
            const data = doc.data();
            const id = doc.id;
            const {date} = data;
            const normalizedDate =new Date(date.seconds * 1000).toString();

            const splitDate = normalizedDate.split('(');

            return {
              id,
              ...data,
              date: splitDate[0],
            };
          });
        });
  } else {
    return dbCon
        .collection('news')
        .orderBy('date', 'desc')
        .where('section', '==', section)
        .limit(page)
        .get()
        .then((snapshot) => {
          return snapshot.docs.map((doc) =>{
            const data = doc.data();
            const id = doc.id;
            const {date} = data;
            const normalizedDate = new Date(date.seconds * 1000).toString();

            const splitDate = normalizedDate.split('(');

            return {
              id,
              ...data,
              date: splitDate[0],
            };
          });
        });
  }
};

export const fetchNew = (id) =>{
  return dbCon
      .collection('news')
      .doc(id)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        if (data) {
          const {date} = data;
          const normalizedDate =new Date(date.seconds * 1000).toString();
          return {
            ...data,
            date: normalizedDate,
          };
        } else {
          return {
            error: '404',
          };
        }
      });
};

export const addNews = (userId, titel, subTitle, banner, content, section) =>{
  return dbCon.collection('news').add({
    userId,
    titel,
    subTitle,
    banner,
    content,
    section,
    date: firebase.firestote.Timestaps.fromDate(new Date()),
  });
};
