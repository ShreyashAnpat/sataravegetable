 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyBVOKNtqcRRmyyITsYYzeMCoRInJZjHjzY",
     authDomain: "sataravegetable-6bfbd.firebaseapp.com",
     databaseURL: "https://sataravegetable-6bfbd.firebaseio.com",
     projectId: "sataravegetable-6bfbd",
     storageBucket: "sataravegetable-6bfbd.appspot.com",
     messagingSenderId: "760280597331",
     appId: "1:760280597331:web:855552e2d1ea83034497a6",
     measurementId: "G-RXVGK6NSC8"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();


 //  const auths = firebase.auth();

 function sighup() {
     var email = document.getElementById("email");
     var pass = document.getElementById("password");

     var database = firebase.database();

 }