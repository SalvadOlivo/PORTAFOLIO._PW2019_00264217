//calculadora de area circulo
var area;
function calcular(radio){
    if(radio < 0 || radio == 0){
        console.log("-1");

    }else{
        area = ((Math.PI)*(Math.sqrt(radio)))
        console.log("el area del circulo es: " + area);

    }

}

calcular(5);
