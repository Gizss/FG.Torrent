for (let i = 1; i <= 10; i++) {
    document.getElementsByName(`nome${i}`)[0].value = localStorage.getItem(`nome${i}`)
    document.getElementsByName(`diag${i}`)[0].value = localStorage.getItem(`diag${i}`)
    document.getElementsByName(`ras${i}`)[0].value = localStorage.getItem(`ras${i}`)
    document.getElementsByName(`pres${i}`)[0].value = localStorage.getItem(`pres${i}`)
    document.getElementsByName(`rec${i}`)[0].value = localStorage.getItem(`rec${i}`)
    document.getElementsByName(`int${i}`)[0].value = localStorage.getItem(`int${i}`)
    document.getElementsByName(`obs${i}`)[0].value = localStorage.getItem(`obs${i}`)

}

function salvar() {
    for (let i = 1; i <= 10; i++) {
        localStorage.setItem(`nome${i}`, document.getElementsByName(`nome${i}`)[0].value)
        localStorage.setItem(`diag${i}`, document.getElementsByName(`diag${i}`)[0].value)
        localStorage.setItem(`ras${i}`, document.getElementsByName(`ras${i}`)[0].value)
        localStorage.setItem(`pres${i}`, document.getElementsByName(`pres${i}`)[0].value)
        localStorage.setItem(`rec${i}`, document.getElementsByName(`rec${i}`)[0].value)
        localStorage.setItem(`int${i}`, document.getElementsByName(`int${i}`)[0].value)
        localStorage.setItem(`obs${i}`, document.getElementsByName(`obs${i}`)[0].value)
    }
    window.alert("salvo!")
}

function preLimpar(){
    document.getElementsByClassName("confirma")[0].style.display = 'flex'
}
function limpar() {
    localStorage.clear()
    window.alert("Todos os dados foram limpos!")
    window.location.reload()
}

function cancelar() {
    document.getElementsByClassName("confirma")[0].style.display = 'none'
}









// localStorage.clear() Limpar o localStorage