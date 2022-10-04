//Váriaveis
let inputRUA = document.querySelector("#rua");
let CEP = document.querySelector("#Cep");
let ENviar = document.querySelector("#Enviar");

//Fetch
const ConsultarRUA = (rua) => {
    var endpoint = "https://viacep.com.br/ws/SP/S%C3%A3o%20Paulo/"+rua+"/json/"

    fetch(endpoint, {
        method: "GET",
        headers: {"Content-Type":"application/json"}
    })
    .then(response => response.json())
    .then(result => {
        //debug
        console.log(result);

        //declaração de Div e  printar no HTML
        CEP.innerHTML = result.Cep
    })
    .catch(erro => console.log(erro));

}

//Função de Click
ENviar.addEventListener("click", () =>{

    if(inputRUA.value.length > 0){
        ConsultarRUA(inputRUA.value)
    }
})