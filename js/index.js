let erro = "Senha incorreta! Você não tem permissão para editar o arquivo."
let login = "Digite a senha para editar o arquivo."



function abrir(plano) {
    let plan = `pasta${plano}`
    //  document.getElementById(`conteudo${plano}`).innerHTML = localStorage.getItem(plano)
    let display = document.getElementById(`${plan}`).style.display = "none"
    if (display == "none") {
        document.getElementById(`${plan}`).style.display = "block"
    } else {
        document.getElementById(`${plan}`).style.display = "none"
    }
}
function editar(plano) {
    let plan = plano
    let password = window.prompt(login)
    if (password == "123") {
        document.getElementById(`salvar${plan}`).style.display = "block"
        document.getElementById(`conteudo${plan}`).setAttribute("contenteditable", "true")
        document.getElementById(`conteudo${plan}`).focus()
    }
    else {
        window.alert(erro)
    }
}
function salvar(plano) {
    let plan = plano
    window.alert("Salvo!")
    document.getElementById(`salvar${plan}`).style.display = "none"
    document.getElementById(`conteudo${plan}`).setAttribute("contenteditable", "false")
    //   localStorage.setItem(plan, document.getElementById(`conteudo${plan}`).innerHTML)
}

function fechar(plano) {
    let plan = plano
    document.getElementById(`salvar${plan}`).style.display = "none"
    document.getElementById(`pasta${plan}`).style.display = 'none'
    document.getElementById(`conteudo${plan}`).setAttribute("contenteditable", "false")
}



// Copiar LOGIN ou SENHA ao clicar em cima
function copiarLogin(n) {
    let textoCopiado = document.getElementById(`login${n}`).innerText
    console.log(textoCopiado)
    navigator.clipboard.writeText(textoCopiado)
    document.execCommand('copy')
    document.getElementById('textoCopiado').innerText = `"${textoCopiado}"`
    document.getElementsByClassName('popup')[0].style.bottom = '0'
    document.getElementsByClassName('popup')[0].style.opacity = '1'
    setTimeout(none, 3000)
    function none() {
        document.getElementsByClassName('popup')[0].style.bottom = '-170px'
        document.getElementsByClassName('popup')[0].style.opacity = '0'
    }

}

function copiarSenha(n) {
    let textoCopiado = document.getElementById(`senha${n}`).innerText
    console.log(textoCopiado)
    navigator.clipboard.writeText(textoCopiado)
    document.execCommand('copy')
    document.getElementById('textoCopiado').innerText = `"${textoCopiado}"`
    document.getElementsByClassName('popup')[0].style.bottom = '0'
    document.getElementsByClassName('popup')[0].style.opacity = '1'
    setTimeout(none, 3000)
    function none() {
        document.getElementsByClassName('popup')[0].style.bottom = '-170px'
        document.getElementsByClassName('popup')[0].style.opacity = '0'
    }
}

function editarSenha() {
    let usuario = document.getElementsByClassName("usuario")
    for (let i = 0; i < usuario.length; i++) {
        usuario[i].setAttribute('contenteditable', 'true')

    }
}


function editaa() {
    // Executa o Leitor e o Editor de arquivo
let {readFile, writeFile} = require('fs')
let nome = "Fabiano Gonçalves Machado"
// Edita o aquivo ("NomeDoArquivo", "TextoQueQuiser")
writeFile("arquivo.txt", `fala cmg, ${nome}`, () => {
    console.log("escreveu com sucesso")
})
// Ler o arquivo ("NomeDoArquivo", "FormatoDoArquivo")
readFile("arquivo.txt", "utf8", (erro, texto) => {
        console.log(texto)
    }
)
}