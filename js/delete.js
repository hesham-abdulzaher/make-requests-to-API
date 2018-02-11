function deleteData(id) {
  var popup = document.getElementById('popup')
  var contentMSG = document.getElementById('content')
  popup.style.display = 'block'
  contentMSG.style.animation = 'fadeInContentMsg .4s ease-in-out forwards'
  console.log(contentMSG);

  document.querySelectorAll('button').forEach(function(button){
    button.addEventListener('click', function(clickEvent){
      var IDbutton = clickEvent.target.id
      getIdButton(IDbutton)
      return IDbutton
    })
  })

  function getIdButton(idOfButtun){
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
      setTimeout(function(){
        location.reload();
      }, 2000)
    }
  }

}
