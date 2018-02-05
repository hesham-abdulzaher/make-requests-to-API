// https://jsonplaceholder.typicode.com/users

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users')
request.onload = function(){
  // responseText => To show info inside data (String)
  //JSON.parse() => To convert That (String) to (Array)
  var data = JSON.parse(request.responseText) // Because browser didn't see data is array

  for(var i = 0; i < data.length; i++){
    // Creat Cards to display information about users
    var container = document.getElementById('container') // Get My container
    var card = document.createElement('div'); // Creat a new Div in container
    card.classList = 'card'; // Add Class card
    container.appendChild(card); // Append in Container

    var infoDiv = document.createElement('div'); // Creat a new Div in card
    infoDiv.classList = 'info'; // Add Class info
    card.appendChild(infoDiv); // Append in Container

    infoDiv.innerHTML = "Name : " + data[i].name + "<br>"
    infoDiv.innerHTML += "Username : " + data[i].username + "<br>"
    infoDiv.innerHTML += "Email : " + data[i].email + "<br>"
    infoDiv.innerHTML += "Address : " + data[i].address.city +", " + data[i].address.street + " st"

  }

}
request.send()












// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }
//
//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });
