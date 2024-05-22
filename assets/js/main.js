let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list .list-item');

let thumb = document.querySelector('.container .thumb .thumb-item');


// Clicando no button next o da direita ele ira para a frente
// Clicando no button back o da esquerda ele ira para a trás
btnNext.onclick = () => {
    moveItemnsOnClick('.next')
}
btnBack.onclick = () => {
    moveItemnsOnClick('.back')
}

function moveItemnsOnClick(type){
    
     let listItems = document.querySelectorAll('.list .list-item');
     let  thumbitems = document.querySelectorAll('.thumb .thumb-item');

    console.log(listItems);
    console.log(thumbitems);

    if(type === 'next'){
        list.appendChild(listItems[0]);
        thumb.appendChild(thumbitems[0]);
    }else{
        list.prepend(listItems[5])
        list.prepend(thumbitems[5])
    }
}