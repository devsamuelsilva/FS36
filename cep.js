const buscarCep = (cep) => {
   fetch(`https://brasilapi.com.br/api/cep/v2/${cep}}`)
    .then(response => response.json())
    .then(data => console.log(data))       
}
buscarCep('62850000')