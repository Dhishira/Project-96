var firebaseConfig = {
    apiKey: "AIzaSyCVjYrqG3l-eazyrgKPdooo8Sy8SuAKFvs",
    authDomain: "lets-chat-web-app-1e2ff.firebaseapp.com",
    projectId: "lets-chat-web-app-1e2ff",
    storageBucket: "lets-chat-web-app-1e2ff.appspot.com",
    messagingSenderId: "332870229787",
    appId: "1:332870229787:web:7458bcdbe209e9c626bdbe",
  };
//ADD YOUR FIREBASE LINKS HERE

firebase.initializeApp(firebaseConfig);

function login()
{
  user_name = document.getElementById("UserName").value;
  firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
  });

  localStorage.setItem("Username",user_name);
}