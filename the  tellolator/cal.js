var num1 = document.getElementById('number1'),
 	num2 = document.getElementById('number2'),
    
   result =document.getElementById('disp');

   result.style.fontSize ="25px";

   result.style.backgroundColor ="#ffdf00";

function add(){
	
var	no1 = Number(num1.value),
    no2 = Number(num2.value );
	  var p = Number(no2 + no1 );
     result.textContent =  "the resultof adding " + " " + no1 + " " +"and" + no2 + " " + "is " + p ;

}
;
function sub(){

var  no1 = Number(num1.value),
    no2 = Number(num2.value );
     var p = Number(no1-no2);


result.textContent =  "the result of subtracting " + " " + no1 + "and" + no2 + " " + "is " + p ;
};
function divi(){

var  no1 = Number(num1.value),
    no2 = Number(num2.value );
     var p = Number(no1/no2);


result.textContent =  "the result of dividing " + " " + no1 + "and" + no2 + " " + "is " + p ;
}
;
function multi(){

var  no1 = Number(num1.value),
    no2 = Number(num2.value );
     var p = Number(no1*no2);


result.textContent =  "the result of multiplying" + " " + no1 + "and" + no2 + " " + "is " + p ;
};
