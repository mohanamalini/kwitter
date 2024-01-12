
const firebaseConfig = {
    apiKey: "AIzaSyC0qZtElZwyFdZnz8u8UIyXgJUMxC8h6zQ",
    authDomain: "kwitter-71265.firebaseapp.com",
    databaseURL: "https://kwitter-71265-default-rtdb.firebaseio.com",
    projectId: "kwitter-71265",
    storageBucket: "kwitter-71265.appspot.com",
    messagingSenderId: "832260603804",
    appId: "1:832260603804:web:c77c673b920d8c6e151259",
    measurementId: "G-GHV2G6QVW3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");


function send()
{
  msg = document.getElementById("msg").value;
 
  firebase.database().ref(room_name).push({
    name:user_name,
   // key : value
    message:msg,
    like:0
   });


  document.getElementById("msg").value = "";
}

function getData() // gets the data from db and displays on screen in proper format
 {
        firebase.database().ref("/"+room_name).on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
    childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         Name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
name_with_tag = "<h4> "+ Name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like +"</span></button> <hr>";


row = name_with_tag + message_with_tag +like_button + span_with_tag;      
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function updateLike(message_id)
{
  //console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);


  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes  
   });


}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }
    
    
    
    
    
    





