//PEGANDO OS IDs DOS COMPONENTES ===

var bt = document.getElementById('bthora') // ID BOTAO
var time = document.getElementById('tempo')
var timeutc = document.getElementById('utc')

//DEFININDO VARIAVEIS PARA TRABALHAR COM AS DATAS ===

var agora = new Date()
var ano = agora.getFullYear()
var mes = agora.getMonth()
var dia = agora.getDate()
var hora = agora.getHours()
var min = agora.getMinutes()
var sec = agora.getSeconds()
var diasemana = agora.getDay()

//EVENTOS DO BOTAO ===

bt.addEventListener('click', definirmes)
bt.addEventListener('click', definirhora)
bt.addEventListener('click', diadasemana)
bt.addEventListener('click', diasfinais)

bt.addEventListener('click', clicar)


//FUNCAO QUE ESCREVE O TEXTO ===

function clicar(){
    
    time.innerHTML = `Agora são ${hora}, exatos ${min} minutos e ${sec} segundos de ${diasemana}. <br>
    Hoje e dia ${dia} de ${mes} de ${ano}.`

}


//FUNCAO QUE CONVERTE O NUMERO DO MES PARA O NOME DO MES ===

function definirmes(){

    switch (mes){
        case 0: 
        mes = `Janeiro`
        break
        case 1: 
        mes = `Fevereiro`
        break
        case 2: 
        mes.value = `Marco`
        break
        case 3: 
        mes = `Abril`
        break
        case 4: 
        mes = `Maio`
        break
        case 5: 
        mes = `Junho`
        break
        case 6: 
        mes = `Julho`
        break
        case 7: 
        mes = `Agosto`
        break
        case 8: 
        mes = `Setembro`
        break
        case 9: 
        mes = `Outubro`
        break
        case 10: 
        mes = `Novembro`
        break
        case 11: 
        mes = `Dezembro`
        break
    }
}

//FUNCAO QUE CONVERTE A HORA ===

function definirhora(){

    if(hora <= 11){
    for(var i=0; i<=11; i++ ){

        if(hora == 0){
            hora = `Meia noite`
        }
        if(hora == 1){
            hora = `1 da manhã`
        }
        if(hora == 2){
            hora = `2 da manhã`
        }
        if(hora == 3){
            hora = `3 da manhã`
        }
        if(hora == 4){
            hora = `4 da manhã`
        }
        if(hora == 5){
            hora = `5 da manhã`
        }
        if(hora == 6){
            hora = `6 da manhã`
        }
        if(hora == 7){
            hora = `7 da manhã`
        }
        if(hora == 8){
            hora = `8 da manhã`
        }
        if(hora == 9){
            hora = `9 da manhã`
        }
        if(hora == 10){
            hora = `10 da manhã`
        }
        if(hora == 11){
            hora = `11 da manhã`
        }

    }
}

    if(hora >= 12){
        for(var i=0; i>=12; i++ ){

            if(hora == 0){
                hora = `Meio dia`
            }
            if(hora == 1){
                hora = `1 da tarde`
            }
            if(hora == 2){
                hora = `2 da tarde`
            }
            if(hora == 3){
                hora = `3 da tarde`
            }
            if(hora == 4){
                hora = `4 da tarde`
            }
            if(hora == 5){
                hora = `5 da tarde`
            }
            if(hora == 6){
                hora = `6 da tarde`
            }
            if(hora == 7){
                hora = `7 da noite`
            }
            if(hora == 8){
                hora = `8 da noite`
            }
            if(hora == 9){
                hora = `9 da noite`
            }
            if(hora == 10){
                hora = `10 da noite`
            }
            if(hora == 11){
                hora = `11 da noite`
            }

    }
    }
}

//FUNCAO QUE CONVERTE O NUMERO DA SEMANA PELO NOME DO DIA DA SEMANA  ===

function diadasemana(){
    switch(diasemana){

        case 0:
            diasemana = `um domingo`
            break
            case 1:
                diasemana = `uma segunda-feira`
                break
                case 2:
                diasemana = `uma terca-feira`
                break
                case 3:
                diasemana = `uma quarta-feira`
                break
                case 4:
                diasemana = `uma quinta-feira`
                break
                case 5:
                diasemana = `uma sexta-feira`
                break
                case 1:
                diasemana = `um sabado`
                break



    }
}

function diasfinais(){

    var diastotais = 30
    var diasparaacabar = 0
    var i = 0

    while(i==13){
        diasparaacabar += diastotais
        i++

    }
    

    console.log(diasparaacabar)
 
}



