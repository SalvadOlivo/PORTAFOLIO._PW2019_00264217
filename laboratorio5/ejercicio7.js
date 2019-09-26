function fibonacci(num){
    var a=0;
    var b=1;
    
    for(i=0; i<num;i++){
    var numeroTemporal=a;
    a=b;
    b=numeroTemporal+b;
    
    console.log(a+" ");
    }
    
    }

    fibonacci(10);