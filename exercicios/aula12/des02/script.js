function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 13) {
                //criança
                img.setAttribute('src', 'imagens/criança-m.png')
            } else if (idade < 21) {
                //adoslecente
                img.setAttribute('src', 'imagens/adolescente-m.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            }else if (idade < 99) {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }else {
                //morto
                img.setAttribute('src', 'imagens/morto.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 13) {
                //criança
                img.setAttribute('src', 'imagens/criança-f.png')
            } else if (idade < 21) {
                //adoslecente
                img.setAttribute('src', 'imagens/adolescente-f.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            }else if (idade < 99) {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }else {
                //morto
                img.setAttribute('src', 'imagens/morto.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}