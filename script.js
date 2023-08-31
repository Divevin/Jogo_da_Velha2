
function clicar(quadrado){
    if(quadrado.innerText == ""){
        quadrado.innerText = "X"
    }else if(quadrado.innerText == "X"){
        quadrado.innerText = "O"
    }else{
        quadrado.innerText = ""
    }
}

let quadrado = document.querySelectorAll(".quadradinho")

function desenhaJogo(){
    let jogo = document.querySelector(".jogo")
    for(let i=0; i<9; i++){
        jogo.innerHTML += `<div class = 'quadradinho' id ='q${i}' onclick='clicar(this)'></div>`
    }
}

desenhaJogo()


