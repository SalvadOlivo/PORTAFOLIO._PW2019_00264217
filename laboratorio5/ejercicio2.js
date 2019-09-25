var sum = 0;
var promedio;
function suma(arr){
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];       
    }
    promedio = sum/arr.length;

    console.log("las suma es: " + sum);
    console.log("el promedio es: " + promedio);

}

suma([1,2,3,4,5,6,7,8,9]);