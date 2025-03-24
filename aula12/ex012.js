var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 && hora > 6) {
    console.log(`BOM DIA!`)
} else if (hora <= 18) {
    console.log(`BOA TARDE!`)
} else if(hora > 18 && hora < 24) {
    console.log(`BOA NOITE`)
} else if (hora >= 1 && hora < 6) {  
    console.log(`BOA MADRUGADA`)
}