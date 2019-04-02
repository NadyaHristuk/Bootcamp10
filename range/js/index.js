let rng=document.getElementById('r1');//rng - это Input
let p=document.getElementById('one'); // p - абзац

function fun1() {	
	p.innerHTML=rng.value;
}
rng.addEventListener('input', fun1);



let rng2=document.getElementById('r2');//rng - это Input
let div=document.getElementById('test'); // div - блок test
function fun2() {  
div.style.width=rng2.value+'px';
}
rng2.addEventListener('input', fun2);


