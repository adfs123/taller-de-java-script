var sm =736000;
var aux=80000;
var pago="";
var rt="";
var salary= parseInt(prompt("enter your salary"));
var rf = parseInt(prompt(("Enter your source rent")));
var dia = Number(prompt("Enter the number of days worked"));
var retention = "";
if(dia>30){
alert ("Maximum days30");
var pago = parseInt (salary+aux);
if (salary <= (sm *2)) {
 payment = salary + aux;
console.log("will be granted trasport aid then your payment will be" + pago);
}else{ 
    
retention = (rf * salary )/100;
    rt =( salary - retention);
    console.log (rt);
    }
    } 


