const firebaseConfig = {
    apiKey: "AIzaSyClQULo_tzWW7oVsbEahMU-OVALFjTpBO4",
    authDomain: "ex-trak-app-439f7.firebaseapp.com",
    databaseURL: "https://ex-trak-app-439f7-default-rtdb.firebaseio.com",
    projectId: "ex-trak-app-439f7",
    storageBucket: "ex-trak-app-439f7.appspot.com",
    messagingSenderId: "609371006580",
    appId: "1:609371006580:web:fb39c3cf66fb9335279321",
    measurementId: "G-N5JFCJX6Q5"
  };

  //inntialize firebase
firebase.initializeApp(firebaseConfig);

//create reference form
var userFormDB= firebase.database().ref("userForm");

document.getElementById("userForm").addEventListener("submit", submitForm )

function submitForm(e){
    e.preventDefault();

    var fname= document.getElementById("firstname").value;
    var lname= document.getElementById("lastname").value;
    var email= document.getElementById("useremail").value;
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    saveInfo(fname,lname,email,username,password);
    
}

const saveInfo=(fname,lname,email,username,password)=>{
    var newUser=  userFormDB.push();
    newUser.set({
        fname: fname,
        lname: lname,
        email:email,
        username: username,
        password: password,});

};

/*
var userFormDB= firebase.database().ref("validationform");
function submitForm(e){
    e.preventDefault();
alert("Form data is successfully submitted");
    var username= document.getElementById("user_name").value;
    var password= document.getElementById("pwd").value;
    getInfo(username,password);
    
}
 const getInfo=(username<password)=>{
    for i in userFormDB:
        var userInfo=

 }
*/









