let todoInput = document.querySelector('#todoinput')
let submit = document.querySelector('#submit')
let list = document.querySelector('#list')
let form = document.querySelector('#form')




function addTodo(e) {
    e.preventDefault()

    
    

    let li = document.createElement("li")
    li.innerText += todoInput.value
    
    setTimeout(() => {

        todoInput.value = '';
    }, 500)
    
    list.appendChild(li)

    let deleted = document.createElement('button')
    deleted.innerText = "Delete"
    deleted.classList.add("delete")
    li.appendChild(deleted)


let deleteIt = document.querySelectorAll('.delete')



    deleted.addEventListener('click', e => {
        Array.from(list.removeChild(li))
        
    })

    
}










form.addEventListener("submit", addTodo)