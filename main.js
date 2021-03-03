let input = document.querySelector(".input");
let container = document.querySelector(".container");
let btnAgregar = document.querySelector(".boton_agregar");
class Item {
    constructor(toDo){
        this.crearDiv(toDo);
    }

    crearDiv(toDo){
        let toDoItem = document.createElement("input");
        toDoItem.value = toDo;
        toDoItem.disabled = true;
        toDoItem.classList.add("item_input");
        toDoItem.type = "text";

        let divItem = document.createElement("div");
        divItem.classList.add("item");

        let btnEditar = document.createElement("button");
        btnEditar.innerHTML = '<i class="fas fa-lock"></i>';
        btnEditar.classList.add("boton_editar");

        let btnRemover = document.createElement("button");
        btnRemover.innerHTML = '<i class="fas fa-trash-alt"></i>';
        btnRemover.classList.add("boton_remover");

        container.appendChild(divItem);
        divItem.appendChild(toDoItem);
        divItem.appendChild(btnEditar);
        divItem.appendChild(btnRemover);
        
            btnEditar.addEventListener("click", function(){
                toDoItem.disabled = !toDoItem.disabled;
                if(toDoItem.disabled == true){
                    btnEditar.innerHTML = '<i class="fas fa-lock"></i>';
                }
                else {
                    btnEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
                }
            })
            btnRemover.addEventListener("click", function(){
                divItem.remove()
            })
    }
}
function checkInput(){
    if(input.value != ""){
        new Item(input.value);
    }
    input.value = "";
}

btnAgregar.addEventListener("click", checkInput);

function enter(){
    let keyEnter = event.keyCode;
    if(keyEnter == 13){
        checkInput();
    };
}

window.onkeydown = enter;