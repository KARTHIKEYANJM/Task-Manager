
// selectors

const todoInput=document.querySelector('.todo-input');
const todoButtom=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
// const filterOption=document.querySelector('.filter-todo');

//event listeners
document.addEventListener('DOMContentLoaded',getTodos);
todoButtom.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
// filterOption.addEventListener('click',filtertodo);

//functions

function addTodo(event){
    // prevents form from submitting
    event.preventDefault();
    // console.log('hello');

    //Todo div

    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");


    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    saveLocalTodos(todoInput.value);

    //Check button

    const complete=document.createElement('button');

    complete.innerHTML='<i class="fas fa-check"> </i>';

    complete.classList.add("complete-btn");

    todoDiv.appendChild(complete);


    // Trash Button
    const trash=document.createElement('button');

    trash.innerHTML='<i class="fas fa-trash"> </i>';

    trash.classList.add("trash-btn");

    todoDiv.appendChild(trash);

    
    // Append to parent todolist

    todoList.appendChild(todoDiv);

    // clear todo input
    
    todoInput.value="";

}

function deleteCheck(e){
e.preventDefault();
// console.log(e.target);

const item=e.target;
//lets delete the content

if(item.classList[0]==='trash-btn'){
    // item.remove();
    const todo=item.parentElement;
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener('transitionend',function(){
    
        todo.remove();
    
    });
    // todo.remove();
}

//check mark
if(item.classList[0]==="complete-btn"){
    const todo=item.parentElement;
    todo.classList.toggle("completed");

}
}


// function filtertodo(e){
// const todos= todoList.childNodes;
// todos.forEach(function(val){

//     switch(e.target.value){
//         case "all":
//             val[0].style.display='flex';
//             break;
//         case "complete":
//             if(val[0].classList.contains("complete")){
             
//                 val[0].style.display='flex';
//             }
//             else{
//                 val[0].style.display='none';
//             }
//             break;
//             case "uncomplete":
//                 if(!val[0].classList.contains("complete")){
             
//                     val[0].style.display='flex';
//                 }
//                 else{
//                     val[0].style.display='none';
//                 }
//                 break;
        
//        }
// });


// }

function saveLocalTodos(todo){

    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{

        todos=JSON.parse(localStorage.getItem("todos"));

    }

    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));


}


function getTodos(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{

        todos=JSON.parse(localStorage.getItem("todos"));

    }
    todos.forEach(function(todo){

        const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");


    const newTodo=document.createElement("li");
    newTodo.innerText=todo;

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);


    //Check button

    const complete=document.createElement('button');

    complete.innerHTML='<i class="fas fa-check"> </i>';

    complete.classList.add("complete-btn");

    todoDiv.appendChild(complete);


    // Trash Button
    const trash=document.createElement('button');

    trash.innerHTML='<i class="fas fa-trash"> </i>';

    trash.classList.add("trash-btn");

    todoDiv.appendChild(trash);

    
    // Append to parent todolist

    todoList.appendChild(todoDiv);


    });
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{

        todos=JSON.parse(localStorage.getItem("todos"));

    }

    const todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);

    localStorage.setItem('todos',JSON.stringify(todos));
}
