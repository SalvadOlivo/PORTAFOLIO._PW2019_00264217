let arreglo = new Array(); 

for (let i = 0; i < 20; i++) {
    arreglo.push(numeroal = (Math.floor(Math.random()*100)+1));
   
}
function rand(num){
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] == num){
            console.log("has adivinado el numero!");
        }else{
            console.log("gracias por participar")
        }
        
        
    }

}

rand(5);

 

