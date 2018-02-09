// https://jsonplaceholder.typicode.com/users
//
// fetch('https://jsonplaceholder.typicode.com/users') // Step #0
//   .then(function(response){ // Step #1
//     return response.json()
//   })
//   .then(function(finalData){ // Step #2
//     // Make logic
//     // console.log(finalData.length)
//     for(var i = 0; i < finalData.length; i++){
//       // Creat Cards to display information about users
//       var container = document.getElementById('container') // Get My container
//       var card = document.createElement('div'); // Creat a new Div in container
//       card.classList = 'card'; // Add Class card
//       container.appendChild(card); // Append in Container
//
//       var infoDiv = document.createElement('div'); // Creat a new Div in card
//       infoDiv.classList = 'info'; // Add Class info
//       card.appendChild(infoDiv); // Append in Container
//
//       infoDiv.innerHTML = "Name : " + finalData[i].name + "<br>"
//       infoDiv.innerHTML += "Username : " + finalData[i].username + "<br>"
//       infoDiv.innerHTML += "Email : " + finalData[i].email + "<br>"
//       infoDiv.innerHTML += "Address : " + finalData[i].address.city +", " + finalData[i].address.street + " st"
//
//     }
//   })
//   .catch(function(errorMessage){
//     alert('something went worng!!!!')
//   })
// ********************** GET ************************//




// function validation(){
//   var nameInpVal = document.getElementById('name').value
//   var EmailInpVal = document.getElementById('email').value
//   var passInpVal = document.getElementById('pass').value
//   // Check Name Input
//   if(nameInpVal == ''){
//     alert('Input is Empty');
//   }
  // else if (!isNaN(nameInpVal)) {
  //   alert('Are you called ' + nameInpVal + ' mother fucker <br> Write your name')
  // }// Check Email Input
  // else if(EmailInpVal.length < 10){
  //   alert('No, Your emil is very short, You should Edit it')
  // }
  // else if (!EmailInpVal.match('@') || !EmailInpVal.match('.com')) {
  //   alert('please, put your Email like name@example.com')
  // }// Check Password Input
  // else if(passInpVal.length < 8){
  //   alert('Your Password is very Short')
  // }
  // else{
  //   alert('Done')
  // }
// }


// function validationOfName(){
//   var nameInpVal = document.getElementById('name').value
//   // Check Name Input
//   if(nameInpVal == ''){
//     alert('Input is Empty');
//   }
// }
// validationOfName();

//
// function focusIn(){
// var nameInp = document.getElementById('name')
//   var namePlace = document.getElementById('name-place')
//   namePlace.classList += ' animateFocusIn'
//   console.log('hi');
// }
//
// document.addEventListener('click', function(clickData){
//   var idInput = clickData.target.id
//   var placeholer = document.getElementById(idInput + '-place')
//   placeholer.classList += ' animateFocusIn'
//   return idInput;
// })











//
//
// function focusOutOfName(){
//   console.log('You leaved Name Input')
// }
// function focusOutOfEmail(){
//   console.log('You leaved Email Input')
// }
// function focusOutOfPass(){
//   console.log('You leaved Pass Input')
// }




//
//
// document.addEventListener('keydown', function(keyDetails){
//   var anyInput = document.getElementsByTagName('input')
//   if(keyDetails.which == '9'){
//     for(var i = 0; i < anyInput.length; i++){
//       var inputsVal = anyInput[i].value
//       // console.log(inputsVal);
//       if(inputsVal == ''){
//         var idInput = anyInput[i].id
//         var placeholer = document.getElementById(idInput + '-place')
//         placeholer.classList = " animateFocusIn"
//       }
//     }
//   }
// })









function handleInput(clickData){
  var idInput = clickData.target.id
  var placeholer = document.getElementById(idInput + '-place')
  placeholer.classList += ' animateFocusIn'
  return idInput;
}
document.querySelectorAll('input').forEach(function(input){
<<<<<<< HEAD
	input.addEventListener('click', handleInput); // details about the click will be passed automatically to the "handleInput" function
=======
	input.addEventListener('click', handleInput); // details about the click will be passed automatically to the "handleInput" function 
>>>>>>> d1837563af1baea19df4dd82a5015efabac21112
	input.addEventListener('focusin', handleInput); // same as upove
})
