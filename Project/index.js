import firebase from "firebase/app";
    import "firebase/auth";

    // TODO: Replace the following with your app's Firebase project configuration
    // See: https://firebase.google.com/docs/web/learn-more#config-object
    const firebaseConfig = {
      // ...
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    // Initialize Firebase Authentication and get a reference to the service
    const auth = firebase.auth();
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    }
    else{
      location.replace("hcplp.html");
    } 
  });