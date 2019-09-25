var contador = 0;
var numero = 5;

function ocurrenc(arr,numero){



    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == numero){
            contador = (contador + 1) ;

        }
        
        
    }

    console.log("la ocurrencia del numero " + numero + " es: " + contador);

}

ocurrenc([1,5,5,6,5],numero);