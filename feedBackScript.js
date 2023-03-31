const scriptURL = 'https://script.google.com/macros/s/AKfycbyXoOzykVzLsB7PvsvC30HowzSizN06T85B18Skpx-0iNwgYEGJjaavzOdUQ41-FYyVUQ/exec'
  const form = document.forms['form-to-sheets']

  const success = document.getElementById('success');
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          success.innerHTML = "Feedback Successfully Submitted"

          setTimeout(function(){
            success.innerHTML = ""
          }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
