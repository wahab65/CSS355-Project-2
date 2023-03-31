

const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')


//for bucketList container
form.addEventListener('submit', (e) => {
  e.preventDefault()
  addToDo()
})

function addToDo(todo){
  let todoText = input.value

  if(todo){
    todoText = todo.text
  }
console.log(todoText)
if(todoText){
  const todoEl = document.createElement('li')
  if(todo && todo.completed){
    todoEl.classList.add('completed')
  }
    todoEl.innerText = todoText

    todoEl.addEventListener('click', () =>
          todoEl.classList.toggle('completed'))

    todoEl.addEventListener('contextmenu', (e) =>{
      e.preventDefault()
      todoEl.remove()
    })


    todosUL.appendChild(todoEl)

    input.value = ''
 }
}
//for random image generator
const container = document.querySelector('.image-container')
const unsplashURL= 'https://source.unsplash.com/random/'
const rows = 5

for(let i =0; i< rows*3; i++){

  const img = document.createElement('img')
  img.src = `${unsplashURL}${getRandomSize()}/?travel`
  console.log(img)
  container.appendChild(img)

}
function getRandomSize(){
  return `${getRandomNr()}x${getRandomNr()}`
}
function getRandomNr(){
  return Math.floor(Math.random()*10)+300
}
