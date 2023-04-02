const scriptURL = 'https://script.google.com/macros/s/AKfycbyXoOzykVzLsB7PvsvC30HowzSizN06T85B18Skpx-0iNwgYEGJjaavzOdUQ41-FYyVUQ/exec'
i  const form = document.forms['form-to-sheets']

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

//Range Code

const range = document.getElementById('range')
range.addEventListener('input', (e) => {
  const value = +e.target.value
  const label = e.target.nextElementSibling

  const range_width = getComputedStyle(e.target).getPropertyValue('width')
  const label_width = getComputedStyle(label).getPropertyValue('width')
  const num_width = +range_width.substring(0,range_width.length -2)
  const num_label_width = +label_width.substring(0,label_width.length -2)

  const max =+e.target.max
  const min =+e.target.min

  // const left = value * (num_width/max) - num_label_width/2
  // label.style.left = `${left}px`

  console.log()
  label.innerHTML = value
})
