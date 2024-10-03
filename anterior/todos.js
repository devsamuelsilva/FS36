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

// const listAllTodosPorIdComMap = (id) => {
//     fetch (`https://jsonplaceholder.typicode.com/todos?userId=${3}`)
//     .then(response => response.json())
//     .then(data => data.map(data => {
//         const quantidade = data.quantidade;
//         const dataRegistro = data.data;
      
//       console.log(`Usuário ID: ${data.id}`);
//       console.log(`Quantidade: ${quantidade}`);
//       console.log(`Data: ${dataRegistro}`);
//       console.log('----------------------');
//     }))
// }

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

// const criandoUser = id => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Festa FS22',
//           body: 'FS22 melhor que FS36',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(JSON.stringify(json,null,2)));
// }

//4- Modificando um usuario com javascript com fatch PUT - adicionado o ID no final do path e modificado o Body

// const modifyUser = id => {
//     fetch('https://jsonplaceholder.typicode.com/posts/54', {
//         method: 'PUT',
//         body: JSON.stringify({
//           title: 'Festa FS26',
//           body: 'FS22 melhor que FS36',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(JSON.stringify(json,null,2)));
// }

//5 - Modificando um usuario com javascript com fatch PATCH - diferenca dele pro PUT e que o PUT e pra atualizar tudo e o PTCH pra fazer uma atualizacao parcial
// const modifyUserPatch = id => {
//     fetch('https://jsonplaceholder.typicode.com/posts/54', {
//         method: 'PATCH',
//         body: JSON.stringify({
//           title: 'Festa FS26',
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(JSON.stringify(json,null,2)));
// }

// 6 - DELETANDO o usuaio

const deleteUser = id => {
    fetch('https://jsonplaceholder.typicode.com/posts/54', {
        method: 'DELETE',
    })
}
// listAllTodos()
// listAllTodosPorIdComMap(54)
// criandoUser()
// modifyUser()  // Modificando o usuario com id 1
// modifyUserPatch()
deleteUser()