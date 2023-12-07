//Rest e Spread
//Rest

function showList(empresa, ...clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa)
    })
}

showList('Google', 'Morango', 'Melancia')