function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')//formulário ano =fano
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero ='Homem'
            if (idade >= 0 && idade <15){
               //menino  
               img.setAttribute('src','menino.png')
            }else if (idade >=15 && idade <40){
                //homem
                img.setAttribute('src','homem.png')
            }else if (idade >40){
                //idoso
                img.setAttribute('src','idoso.png')
            }    

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <15){
                //menina 
                img.setAttribute('src','menina.png')
             }else if (idade >=15 && idade <40){
                 //mulher
                 img.setAttribute('src','mulher.png')
             }else if (idade >40){
                 //idosa
                 img.setAttribute('src','idosa.png')
             }    
        
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

