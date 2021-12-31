
function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#f7c97e'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#a6adbf'
    } else {
        //Boa noie!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#011243'
    }
}
