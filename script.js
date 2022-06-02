let tarefa= []

const addTarefa = () => {
    let tarefa = document.getElementById("tarefa").value = ""

    if(localStorage.getItem("tarefas") != null){
        tarefas = JSON.parse(localStorage.getItem("tarefas"))

    }
    let data = new Date();
    let date = `${data.getUTCDay()}/${data.getUTCMonth()}/${data.getUTCFullYear()}`;
    
tarefas.push([data, tarefa])
console.log(tarefas)

}
