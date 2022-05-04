//falta ej1

function sumando() {  
    var a,b,suma;  
    a = document.getElementById("num1").value;  
    b = document.getElementById("num2").value;  

    suma=parseFloat(a)+parseFloat(b);  

document.getElementById("sumando").innerHTML = suma;  
}  

/*

function res_ej3() {
    var cadena = document.getElementById("palabra").value;
    var numero = document.getElementById("repe").value;
    console.log(cadena+" "+numero);
    for(i=1;i<=numero;i++){
        document.getElementById (i+"."+cadena+"\n");
    }
}

*/

function conv_to_fh(){
    var cent = document.getElementById("temp_cent").value;
    var fahrenheit=((cent*9)/5)+32;

    alert(fahrenheit+"F");
    }

function conv_to_cent(){
        var fh = document.getElementById("temp_fh").value;
        var cent1=((5/9) * (fh - 32));
        alert(cent1+"C");
    }

//falta ej5

function par_imp() {
    var num5 = document.getElementById("txt_e6").value;
    if(num5%2==1) {
        alert("El numero introcido es impar")
    } else {
        alert("El numero introducido es par")
    }
    
}

function rellenar() {
    var nombre = document.getElementById("name").value;
    var edad = document.getElementById("age").value; 
    var ciudad = document.getElementById("ct").value;
    document.getElementById("parrafo").innerHTML = ("Mi nombre es "+nombre+", tengo "+edad+" años. Nací en la ciudad de "+ciudad+".");
}