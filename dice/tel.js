var  p = document.getElementById('panel') ;
$('#panel').fadeOut(3000).fadeIn(4000);
function roller(){

	var dice = Math.floor(1+Math.random()*6);
/*if (dice===1) {p.style.backgroundColor ="#a6f2c4"};
if (dice===2) {p.style.backgroundColor ="#22ff4a"};
if (dice===3) {p.style.backgroundColor ="#ee34fa"};
if (dice===4) {p.style.backgroundColor ="#ffde34"};
if (dice===5) {p.style.backgroundColor ="#f2dcf5";}
if (dice===6) {p.style.backgroundColor ="#bd5fc2"}; */



switch (dice){
	case "1": 
p.style.backgroundColor ="#a6f2c4" ;
break ;

default:
if (dice===2) {p.style.backgroundColor ="#22ff4a"};
if (dice===3) {p.style.backgroundColor ="#ee34fa"};
if (dice===4) {p.style.backgroundColor ="#ffde34"};
if (dice===5) {p.style.backgroundColor ="#f2dcf5";}
if (dice===6) {p.style.backgroundColor ="#bd5fc2"}
}

p.textContent = dice };
