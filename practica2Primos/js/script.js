function verificarPrimo(){
    let numero=parseInt(document.getElementById("numero").value);
    
    if(isNaN(numero)||numero<=0){
        document.getElementById("resultado").innerHTML="Error: Ingrese un código numérico entero positivo.";
        return;
    }

    let contador=0;
    
    for(let i=1;i<=numero;i++){
        if(numero%i===0){
            contador++;
        }
    }

    if(contador===2){
        document.getElementById("resultado").innerHTML="El código "+numero+" es válido y seguro (Es Primo).";
    }else{
        document.getElementById("resultado").innerHTML="El código "+numero+" es vulnerable (No es Primo).";
    }
}