let btn_prev=document.querySelector('.prev');
let btn_next=document.querySelector('.next');

let images = document.querySelectorAll('.photos img');

let i = 0;

btn_prev.addEventListener('click', ()=>{
    images[i].className='';
    --i ;
    if(i<0){ i=images.length-1};
    images[i].className='showed';
})

btn_next.addEventListener('click', ()=>{
    images[i].className='';
    ++i;
    if(i>images.length-1) {i=0};
    images[i].className='showed';
})