
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
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom() { 
room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ 
purpose : "adding room name"
// key value
 });
 localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
 }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       


console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' > #"+ Room_names +"</div> <hr>";


document.getElementById("output").innerHTML += row;





 
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
      }
      
      
      
      
      
      