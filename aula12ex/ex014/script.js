function carregar() {
        var msg = window.document.getElementById("msg")
        var img = window.document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()
        msg.innerHTML = `Agora são ${hora} horas.`
        if (hora > 0 && hora < 12) {
            img.src = 'fotomanha.png'
            document.body.style.background = '#e2cd9f'
           //BOM DIA 
        } else if (hora >= 12 && hora < 18) {
            //BOA TARDE
            img.src = 'fototarde.jpg'
            document.body.style.background = '#b9846f'
        } else {
            //BOA NOITE
            img.src = 'fotonoite.jpg'
            document.body.style.background = '#515154'
        }
}