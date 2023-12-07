//addEventListener('click') é um evento de clique, então quando eu clicar na tela vai acontecer algo pra mim 

function handleMouse(event){
    console.log(event.clientX)
}

document.addEventListener('click', handleMouse)