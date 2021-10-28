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

user_name = localStorage.getItem("Username",user_name);
document.getElementById("welcome").innerHTML = "Welcome " + user_name +"!";

function enter_room()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("RoomName - "+Room_names);
    row = "<div class='room_name' id='"+Room_names+" onclick='redirectToRoomName(this.id)'>£" +Room_names+"</div><hr>"
    document.getElementById("output").innerHTML += row;  
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}

function logout()
{
   localStorage.removeItem("user_room");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}