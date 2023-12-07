//addEventListener('click') é um evento de clique, então quando eu clicar na tela vai acontecer algo pra mim 

function handleMouse({clientX, clientY}){
    console.log(clientX,clientY)
}

const frutas = ['banana', 'uva']
const [fruta1, fruta2] = frutas
console.log(fruta2)

document.addEventListener('click', handleMouse)
