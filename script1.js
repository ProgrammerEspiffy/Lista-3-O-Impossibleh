//Váriaveis
let inputCEP = document.querySelector("#cep");
let localidade = document.querySelector("#CidadeNome");
let Enviar = document.querySelector("#enviar");

//Fetch
const ConsultarCEP = (cep) => {
    var endpoint = "https://viacep.com.br/ws/"+cep+"/json/"

    fetch(endpoint, {
        method: "GET",
        headers: {"Content-Type":"application/json"}
    })
    .then(response => response.json())
    .then(result => {
        //debug
        console.log(result);

        //declaração de Div e  printar no HTML
        localidade.innerHTML = result.localidade
    })
    .catch(erro => console.log(erro));

}

//Função de Click
Enviar.addEventListener("click", () =>{

    if(inputCEP.value.length > 7){
        ConsultarCEP(inputCEP.value)
    }
})