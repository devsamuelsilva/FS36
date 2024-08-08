// const listAllTodos = ( ) => {
//     fetch ('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => /*console.log(data)*/)
// }

// Exibir um objeto com a quantidade(QTD) e DATA
// const listAllTodos = ( ) => {
//     fetch ('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => console.log({
//         qtd: data.lenght,
//         data: data
//         }))
// }

// 2 - Exibir um obj com a qtd comente de um usuario especifico

const listAllTodosPorIdComMap = (id) => {
    fetch (`https://jsonplaceholder.typicode.com/todos?userId=${3}`)
    .then(response => response.json())
    .then(data => data.map(data => {
        const quantidade = data.quantidade;
        const dataRegistro = data.data;
      
      console.log(`Usuário ID: ${data.id}`);
      console.log(`Quantidade: ${quantidade}`);
      console.log(`Data: ${dataRegistro}`);
      console.log('----------------------');
    }))
}

//Outro modo de fazer o exercicio 2 com filter por ID

// const listAllTodos = (id) => {
//     fetch (`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
//     .then(response => response.json())
//     .then(data => {
//         const dataFiltered = data.filter(dataUser => dataUser.id = id);
        
//         console.log({
//         qtd: dataFiltered.length,
//         data: dataFiltered
//         })
//     })
// }

// 3 - Criando um Usuario com javascript com Fatch

const criandoUser = id => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'Festa FS22',
          body: 'FS22 melhor que FS36',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(JSON.stringify(json,null,2)));
}

// listAllTodos(4)
// listAllTodosPorIdComMap()
criandoUser()