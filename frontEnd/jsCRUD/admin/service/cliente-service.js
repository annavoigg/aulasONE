// conexão com a api por meio do fetch, pedindo os dados e retornando uma resposta

const listaClientes = () => {
    
    //fetch faz o get (buscar os dados) automaticamente e retorna uma promise (ujma promessa de que teremos uma resposta)
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {

        if (resposta.ok){

            return resposta.json()
        }
        throw new Error ('Não foi possível listar os clientes.')
    })
}


// fazendo uma nova comunicação com a API usando o método post (causa a mudança de estado, neste caso modificando nossa lista de clientes a cada adição)
const criaCliente = (nome, email) => {

    //fetch usado para buscar os clientes cadastrados
    return fetch(`http://localhost:3000/profile`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })

    })
    .then( resposta => {

        if(resposta.ok){

            return resposta.body;
        }

        throw new Error ('Não foi possível criar novo cliente.')
    })

}

const removeCliente = (id) => {

    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta => {

        if(!resposta.ok){
            throw new Error ('Não foi possível remover o cliente.')
        }
    })
}

const detalhaCliente = (id) => {

    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {

        if(resposta.ok){

            return resposta.json();
        }
        throw new Error ('Não foi possível detalhar o cliente.')
    })
}

const atualizaCliente = (id, nome, email) => {

    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })

    .then( resposta => {

        if(resposta.ok){

            return resposta.json()
        }

        throw new Error ('Não foi possível atualizar o cliente.')
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}

