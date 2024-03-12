// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBOxraSqVd4WsxQmIbsqaVGvROEhCXYnuc",
  authDomain: "gazicyber2021-f34c0.firebaseapp.com",
  databaseURL: "https://gazicyber2021-f34c0-default-rtdb.firebaseio.com",
  projectId: "gazicyber2021-f34c0",
  storageBucket: "gazicyber2021-f34c0.appspot.com",
  messagingSenderId: "1036543855691",
  appId: "1:1036543855691:web:5369a4485279abb17991ce",
  measurementId: "G-ZJZQ5BBX4D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();






// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*  var firebaseConfig = {
    apiKey: "AIzaSyCZtbHhq9SnxGoLUrpbARr6XiL6yTOtA0E",
    authDomain: "gazicyber2021.firebaseapp.com",
    projectId: "gazicyber2021",
    storageBucket: "gazicyber2021.appspot.com",
    messagingSenderId: "855212698246",
    appId: "1:855212698246:web:4e50a5c044f864938f3f07",
    measurementId: "G-MS9DD5B09V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
*/



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*var firebaseConfig = {
  apiKey: "AIzaSyA7x4nCU9o-C043gCIEKBkH1mrOrGufJuk",
  authDomain: "gazicyberactivity.firebaseapp.com",
  projectId: "gazicyberactivity",
  storageBucket: "gazicyberactivity.appspot.com",
  messagingSenderId: "188255128805",
  appId: "1:188255128805:web:fa72ca348ab339435bd80c",
  measurementId: "G-THF2V8YXSW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

*/



// Reference messages collection
var messagesRef = firebase.database().ref('regs');

// Listen for form submit
document.getElementById('regForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  // var phone = getInputVal('phone');
  var email = getInputVal('email');
  var cyberSecurity = getChecked('cyberSecurity');
  var AI = getChecked('AI');
  var AIinMed = getChecked('AIinMed');
  var BCworkshop = getChecked('BCworkshop');
  var SVworkshop = getChecked('SVworkshop');
  var all = getChecked('all');

  console.log(AI);
  console.log(typeof all);

  if (cyberSecurity == false && AI == false && AIinMed == false && BCworkshop == false && SVworkshop == false && all == false) {
    alert("Bir etkinlik seçmelisiniz.");
    return;
  } else {
    // Save message
    saveMessage(name, lastname, email, cyberSecurity, AI, AIinMed, BCworkshop, SVworkshop, all);

    // Show alert
    document.querySelector('.bilgilendirme').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
      document.querySelector('.bilgilendirme').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('regForm').reset();
  }


}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

function getChecked(id) {
  return document.getElementById(id).checked;
}

// Save message to firebase
function saveMessage(name, lastname, email, cyberSecurity, AI, AIinMed, BCworkshop, SVworkshop, all) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    lastname: lastname,
    email: email,
    cyberSecurity: cyberSecurity,
    AI: AI,
    AIinMed: AIinMed,
    BCworkshop: BCworkshop,
    SVworkshop: SVworkshop,
    all: all
  });
}









/*document.getElementById('workshop').addEventListener('click', changer);

var checkboxes = [document.getElementById('cyberSecurity'), document.getElementById('AI'), document.getElementById('AIinMed'), document.getElementById('workshop'), document.getElementById('all')];

function changer(e) {
  if (document.getElementById('all').checked == true) {

  }
}*/