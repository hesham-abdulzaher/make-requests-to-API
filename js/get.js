// ********************** GET ************************//
fetch('https://bala7a-api.herokuapp.com/users/all') // Step #0
  .then(function(response){ // Step #1
    return response.json()
  })
  .then(function(finalData){ // Step #2

    for(var i = 0; i < finalData.length; i++){
      // Creat Cards to display information about users
      var container = document.getElementById('container')
      var card = document.createElement('div');
      card.classList = 'card';
      container.appendChild(card);

      // Creat div.info in card to show users data
      var infoDiv = document.createElement('div');
      infoDiv.classList = 'info';
      card.appendChild(infoDiv);
      // Put this information inside div.info
      infoDiv.innerHTML = "Name : " + finalData[i].name + "<br>"
      infoDiv.innerHTML += "Email : " + finalData[i].email + "<br>"

      // Creat deleteIcon to delete user
      var deleteIcon = document.createElement('i');
      deleteIcon.classList = 'ion-android-delete deleteIcon';
      card.appendChild(deleteIcon);
      var usersId = finalData[i]._id
      deleteIcon.setAttribute('data-id', usersId)
    }
    // Loop on cards and listen click event
    document.querySelectorAll('.deleteIcon').forEach(function(deleteIcon){
      deleteIcon.addEventListener('click', function(clickDetails){
        var id = clickDetails.target.getAttribute('data-id')
        deleteData(id)
        return id;
      })
    })

  })
  .catch(function(errorMessage){
    alert('something went worng!!!!')
    console.log(errorMessage);
  })
