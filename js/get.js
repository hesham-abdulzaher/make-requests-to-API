// ********************** GET ************************//
fetch('https://bala7a-api.herokuapp.com/users/all') // Step #0
  .then(function(response){ // Step #1
    return response.json()
  })
  .then(function(finalData){ // Step #2

    for(var i = 0; i < finalData.length; i++){

      var nameFromData = finalData[i].name
      var emailFromData = finalData[i].email

      function CreatAllElm(){
        // Creat Cards
        var container = document.getElementById('container')
        var card = document.createElement('div');
        card.classList = 'card';
        container.appendChild(card);
        // End Cards

        // Creat Section Number 1 For Name
        var aboutName = document.createElement('section');
        aboutName.classList = 'info aboutName';
        card.appendChild(aboutName);
        // His Children
        // #1 Creat Label
        var labelName = document.createElement('label');
        labelName.innerHTML = 'Name :'
        // #2 Creat Div#setName
        var setName = document.createElement('div');
        setName.innerHTML = nameFromData
        setName.id = 'setName'
        // Append Children in aboutName section
        aboutName.appendChild(labelName);
        aboutName.appendChild(setName);

        // Creat Section Number 2 For Email
        var aboutEmail = document.createElement('section');
        aboutEmail.classList = 'info aboutEmail';
        card.appendChild(aboutEmail);
        // His Children
        // #1 Creat Label
        var labelEmail = document.createElement('label');
        labelEmail.innerHTML = 'Email :'
        // #2 Creat Div#setName
        var setEmail = document.createElement('div');
        setEmail.innerHTML = emailFromData
        setEmail.id = 'setEmail'
        // Append Children in aboutName section
        aboutEmail.appendChild(labelEmail);
        aboutEmail.appendChild(setEmail);

        // Creat Icons Section
        var icons = document.createElement('section');
        icons.classList = 'icons';
        card.appendChild(icons);

        // Creat deleteIcon to delete user
        var deleteIcon = document.createElement('i');
        var usersId = finalData[i]._id
        deleteIcon.classList = 'ion-android-delete deleteIcon';
        icons.appendChild(deleteIcon);
        deleteIcon.setAttribute('data-id', usersId)

        // Creat EditIcon to Edit users Info
        var editIcon = document.createElement('i');
        editIcon.classList = 'ion-edit editIcon';
        icons.appendChild(editIcon);
        editIcon.setAttribute('data-id', usersId)
        editIcon.setAttribute('data-name', nameFromData)
        editIcon.setAttribute('data-email', emailFromData)

      } // End CreatAllElm function
      CreatAllElm();

    } // End For Loop to creat all elment i need

    // Loop on cards and listen click event
    document.querySelectorAll('.deleteIcon').forEach(function(deleteIcon){
      deleteIcon.addEventListener('click', function(clickDetails){
        var id = clickDetails.target.getAttribute('data-id')
        deleteData(id)
        return id;
      })
    })

    // Loop on cards and listen click event
    document.querySelectorAll('.editIcon').forEach(function(editIcon){
      editIcon.addEventListener('click', function(clickDetails){
        var id = clickDetails.target.getAttribute('data-id')
        var target = clickDetails.target
        editData(id, target)
        // saveCahnges(id)
        return id;
      })
    })

  })
  .catch(function(errorMessage){
    alert('something went worng!!!!')
    console.log(errorMessage);
  })
