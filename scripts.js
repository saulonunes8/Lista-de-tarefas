
const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const lista = document.querySelector(".list-task")

let minhaLista = []
 

function adicionarTarefa() {
 
  
    minhaLista.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ""
    mostrarTarefa()

}


function mostrarTarefa() {
   
    let novaLi = " "

    minhaLista.forEach((item, index) => { //index = posição

        novaLi = novaLi + ` 
    <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="check-imagem" onclick="concluirTarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" onclick="deletartarefa(${index})">
    </li>
`

    });

    lista.innerHTML = novaLi
    localStorage.setItem("lista", JSON.stringify(minhaLista))


}

function concluirTarefa(index) {
    minhaLista[index].concluida = !minhaLista[index].concluida
    mostrarTarefa()

}

function deletartarefa(index) {
    minhaLista.splice(index, 1) // quem quero deletar e quantos ites apartir de la.
    mostrarTarefa()
}

function recarregarTarefa() {
    const tarefasDoLocalStorage = localStorage.getItem("lista")

    if (tarefasDoLocalStorage) {
        minhaLista = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefa()

}

recarregarTarefa()
button.addEventListener("click", adicionarTarefa)