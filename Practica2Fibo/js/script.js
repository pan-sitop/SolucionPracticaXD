function calcularAhorro(){
    let meses=parseInt(document.getElementById("meses").value);
    
    if(isNaN(meses)||meses<=0){
        document.getElementById("resultado").innerHTML="Ingrese un número de meses válido.";
        return;
    }

    let a=0;
    let b=1;
    let c;
    let total=0;
    let reporte="<strong>Detalle mensual:</strong><br>";

    for(let i=1;i<=meses;i++){
        c=a+b;
        a=b;
        b=c;
        total=total+a;
        reporte=reporte+"Mes "+i+": Bs. "+a+"<br>";
    }

    reporte=reporte+"<br><strong>Total Ahorrado: Bs. "+total+"</strong>";
    document.getElementById("resultado").innerHTML=reporte;
}