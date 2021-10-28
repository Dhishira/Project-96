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

username = localStorage.getItem("user_name");
roomname = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
   firebase.database().ref(roomname).push({
    name:username,
    message:msg,
    like:0
    });

   document.getElementById("msg").value = ""; 
} 


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();