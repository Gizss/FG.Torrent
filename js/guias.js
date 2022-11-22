// Variáveis dos Inputs
function gerar() {
    let plano = document.getElementById("plano").value
    let guia = document.getElementById("guia").value
    let senha = document.getElementById("senha").value
    let carteira = document.getElementById("carteira").value
    let nome = document.getElementById("nome").value
    let medico = document.getElementById("medico").value
    let crm = document.getElementById("crm").value
    let tipo = document.getElementById("tipo").value
    let carater = document.getElementById("carater").value
    let leito = document.getElementById("leito").value
    let proced1 = document.getElementById("proced1").value
    let proced2 = document.getElementById("proced2").value
    let proced3 = document.getElementById("proced3").value
    let proced4 = document.getElementById("proced4").value
    let proced5 = document.getElementById("proced5").value
    let qtd1 = document.getElementById("qtd1").value
    let qtd2 = document.getElementById("qtd2").value
    let qtd3 = document.getElementById("qtd3").value
    let qtd4 = document.getElementById("qtd4").value
    let qtd5 = document.getElementById("qtd5").value



    // Salva os dados no LocalStorage
    localStorage.setItem("plano", plano)
    localStorage.setItem("guia", guia)
    localStorage.setItem("senha", senha)
    localStorage.setItem("carteira", carteira)
    localStorage.setItem("nome", nome)
    localStorage.setItem("medico", medico)
    localStorage.setItem("crm", crm)
    localStorage.setItem("tipo", tipo)
    localStorage.setItem("carater", carater)
    localStorage.setItem("leito", leito)
    localStorage.setItem("cod1", proced1)
    localStorage.setItem("cod2", proced2)
    localStorage.setItem("cod3", proced3)
    localStorage.setItem("cod4", proced4)
    localStorage.setItem("cod5", proced5)
    localStorage.setItem("qtd1", qtd1)
    localStorage.setItem("qtd2", qtd2)
    localStorage.setItem("qtd3", qtd3)
    localStorage.setItem("qtd4", qtd4)
    localStorage.setItem("qtd5", qtd5)

    // Abre a guia
    window.open("../html/guiaint.html")
}

// Muda a acomodação ao solicitar UTI
function room() {
    if (proced1.value == "10104020" || proced1.value == "10104011") {
        leito.value = "UTI"
        console.log("certo")
    }
}