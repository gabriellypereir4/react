//addEventListener('click') é um evento de clique, então quando eu clicar na tela vai acontecer algo pra mim 

function handleMouse(event){
    const {clientX, clientY} = event
    console.log(clientX,clientY)
}

document.addEventListener('click', handleMouse)
