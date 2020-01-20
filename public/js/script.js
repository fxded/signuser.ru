function hello() {
    console.log('Hello');
    hello2();
}

function hello2() {
    console.log('hello-2-2-2-22');
}


let btn = document.querySelector('#btn'); // кнопка
console.log(btn.id);
btn.onclick = hello;
// hello();
//btn.hidden = true;


let showModal = document.querySelector('#modal-show'); // кнопку show modal

function show() {
    let modal = document.querySelector('.modal');
    //modal.hidden = true;
    modal.style.display = 'block';
    modal.style.backgroundColor = 'pink';
}

showModal.onclick = show;
//border-radius: 20px;
//border  - 5px;