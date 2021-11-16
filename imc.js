function calcula_imc(){
    altura = document.imcForm.altura.value
    peso = document.imcForm.peso.value

    calculo = (peso/(altura*altura))

    if(calculo<18.5){
        alert("você está abaixo do peso, índice:" + calculo)
    }

    else if (calculo>=18.5 && calculo<=24.9){
        alert("você está com o peso ideal, índice:" + calculo)
    }

    else if (calculo>=25 && calculo<=29.9){
        alert("você está com sobrepeso, índice:" + calculo)
    }

    else if (calculo>=30 && calculo<=29.9){
        alert("você está com obesidade, índice:" + calculo)
    }

    else if (calculo>=40){
        alert("você está com obesidade mórbida, índice:" + calculo)
    }
}