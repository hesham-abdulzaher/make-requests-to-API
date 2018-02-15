///////////////////////////////// Put ///////////////
function editData(id, target) {
  var popup = document.getElementById('popup')
  var confirmDelete = document.getElementById('confirmDelete')
  var formEdit = document.getElementById('formEdit');
  var nameInput = document.getElementById('nameInpInFormEdit');
  var emailInput = document.getElementById('emailInpInFormEdit');
  nameInput.value = target.getAttribute('data-name')
  emailInput.value = target.getAttribute('data-email')

  popup.style.display = 'block'
  confirmDelete.style.display = 'none'
  formEdit.style.display = 'inline-block'
  formEdit.style.animation = 'fadeInContentMsg .4s ease-in-out forwards'

  var saveBtn = document.getElementById('save');
  saveBtn.addEventListener('click', function(e){
    console.log(e);
    saveCahnges(id)
  })

  function saveCahnges(id){
    popup.style.display = 'none'

    fetch('https://bala7a-api.herokuapp.com/users/update' + '/' + id, {
      method: 'PUT'
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
  // saveCahnges(iduser)
}
