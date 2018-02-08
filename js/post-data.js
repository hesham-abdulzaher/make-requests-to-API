// Animate when user click || focusIn || focusOut On any input
function handleInput(eventDetails){
  var idInput = eventDetails.target.id
  var placeholer = document.getElementById(idInput + '-place')
  placeholer.classList.add('animateFocusIn')
  if(eventDetails.type == 'focusout' && eventDetails.target.value == ''){
    placeholer.classList.remove('animateFocusIn')
  }
}
document.querySelectorAll('input').forEach(function(input){
	input.addEventListener('click', handleInput); // details about the click will be passed automatically to the "handleInput" function
	input.addEventListener('focusin', handleInput); // same as upove
	input.addEventListener('focusout', handleInput); // same as upove
})



// Validate Email
function validateEmail(email){
  var syntax = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var testEmail = syntax.test(email)
  if(testEmail == false){
    return false;
  }else{
    return true;
  }
}
// Validate Username && Password
function validateUserAndPass(name, pass){
  if(name.length < 6 || pass.length < 6){
    return false;
  }else{
    return true;
  }
}



// ************************* POST ****************************** //
var form = document.getElementById('form')
var warning = document.getElementById('warning')
var doneSubmit = document.getElementById('doneSubmit')
var hisName = document.getElementById('hisName')

function getInputValue(){
  var nameVal = document.getElementById('name').value
  var emailVal = document.getElementById('email').value
  var passVal = document.getElementById('pass').value
  // console.log(form);

  // Why this function not working
  // form.reset();

  // if any input has syntax isn't good please stop this function and fade warning section
  if(validateUserAndPass(nameVal, passVal) == false || validateEmail(emailVal) == false){
    warning.style.animation = 'fadeInWarning .5s ease forwards .8s'
    setTimeout(function(){
      warning.style.animation = 'fadeOutWarning .6s ease forwards'
    }, 5000)
    return;
  }else{ // if all of syntax is good fade Done section
    form.style.animation = 'fadeOutForm .3s ease forwards .4s'
    doneSubmit.style.animation = 'doneSubmit .6s ease forwards 1s'
    hisName.innerHTML = nameVal
  }



  var newUserInfo = {
  	name: nameVal, // this should come from html input
    email: emailVal,// and this
  	password: passVal // this as well
  }

  fetch("https://bala7a-api.herokuapp.com/users/new", {
      method: "POST", // We will do a POST request to the API
      body: JSON.stringify(newUserInfo), // We need to convert the data to JSON before sending it
      // this is thing must be here, please ignore it
      headers: {
        "Content-Type": "application/json"
      }
  })
  .then(function(res){
    return res.json(); // Proccessing the incoming response
  })
  .then(function(finalResponse){
    console.log( finalResponse );
  })
}
