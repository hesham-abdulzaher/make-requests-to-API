function deleteData(id) {
  var popup = document.getElementById('popup')
  var confirmDelete = document.getElementById('confirmDelete')
  var formEdit = document.getElementById('formEdit');

  popup.style.display = 'block'
  formEdit.style.display = 'none'
  confirmDelete.style.display = 'inline-block'
  confirmDelete.style.animation = 'fadeInContentMsg .4s ease-in-out forwards'
  console.log(confirmDelete);

  document.querySelectorAll('button').forEach(function(button){
    button.addEventListener('click', function(clickEvent){
      var IDbutton = clickEvent.target.id
      getIdButton(IDbutton)
      return IDbutton
    })
  })

  function getIdButton(idOfButtun){
    confirmDelete.style.display = 'none'
    if(idOfButtun == 'cancel'){
      popup.style.display = 'none'
      return;
    }else{
      popup.style.display = 'none'
      var loading = document.getElementById('load-layer')
      console.log(loading);
      loading.style.display = 'block'
      fetch('https://bala7a-api.herokuapp.com/users/delete' + '/' + id, {
        method: 'delete'
      })
      .then(response =>
        response.json().then(json => {
          console.log(response); // Why this log show twice
          return json;
        })
      )
      .catch(function(errorMessage){
        console.log(errorMessage);
      })
    }
  }

}
