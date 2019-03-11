'use strict'
let body = document.body;
body.style.textAlign = 'center';
let title = document.createElement('h2');
title.classList.add('red-text');
title.textContent = 'Hello';
title.style.textAlign='center'
let div = document.querySelector('.first');
div.append(title);
div.innerHTML += '<ul class="myList"><li><p>end endOchen</p></li><li><p>stranno</p></li></ul>'
let myList = document.querySelector('.myList');
myList.style.listStyle = 'none';
myList.style.color = 'blue';

div.insertAdjacentHTML('beforebegin', '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, facilis.</p>')
let text = document.lastElementChild;
text.classList.add('green');
let textGreen = document.querySelector('.green');
textGreen.style.color = 'green';

let image = document.createElement('img');
image.src='https://i.ytimg.com/vi/5530I_pYjbo/maxresdefault.jpg';
div.append(image);
image.classList.add('img-style');
image.style.display = 'block';
image.style.margin = 'auto';
image.style.backgroundColor='aqua';
image.style.padding = '20px';


