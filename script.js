//addEventListener('click') é um evento de clique, então quando eu clicar na tela vai acontecer algo pra mim 

function handleMouse(event){
    const x = event.clientX
    const y = event.clientY
    console.log(x,y)
}

document.addEventListener('click', handleMouse)