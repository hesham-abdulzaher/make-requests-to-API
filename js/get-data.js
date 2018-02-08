// Important Notes && Question
// When I meet eslam We have talk about *validation*
// make any svg pen together
// How many values number that accept return .... done


// https://jsonplaceholder.typicode.com/users

fetch('https://bala7a-api.herokuapp.com/users/all') // Step #0
  .then(function(response){ // Step #1
    return response.json()
  })
  .then(function(finalData){ // Step #2
    // Make logic
    // console.log(finalData.length)
    for(var i = 0; i < finalData.length; i++){
      // Creat Cards to display information about users
      var container = document.getElementById('container') // Get My container
      var card = document.createElement('div'); // Creat a new Div in container
      card.classList = 'card'; // Add Class card
      container.appendChild(card); // Append in Container

      var infoDiv = document.createElement('div'); // Creat a new Div in card
      infoDiv.classList = 'info'; // Add Class info
      card.appendChild(infoDiv); // Append in Container

      infoDiv.innerHTML = "Name : " + finalData[i].name + "<br>"
      infoDiv.innerHTML += "Email : " + finalData[i].email + "<br>"
      // infoDiv.innerHTML += "Password : " + finalData[i].password + "<br>"

    }
  })
  .catch(function(errorMessage){
    alert('something went worng!!!!')
    console.log(errorMessage);
  })
// ********************** GET ************************//
