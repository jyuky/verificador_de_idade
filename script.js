function verificar() {
    var data = new Date();
    var ano = data.getFullYear();

    var fano = document.getElementById('txtano').value
    var res = document.getElementById('res')
    if (fano == 0 || fano > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'moco.png')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhor.png')
            }




        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'moca.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}