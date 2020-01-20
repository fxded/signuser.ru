// парный тег
document.querySelector('p').innerHTML += ' Пример span <b>Hi</b>';
document.querySelector('p').innerText += ' Пример span <b>Hi</b>';
// -----------------------

document.querySelector('h1').outerHTML = '<h2>jjjj</h2>';
document.querySelector('h2').outerText = '<h2>jjjj</h2>';
// ----------------------

document.querySelector('div').insertAdjacentHTML('beforebegin', 2222);
document.querySelector('div').insertAdjacentHTML('afterbegin', 333);
document.querySelector('div').insertAdjacentHTML('afterend', 5555);
document.querySelector('div').insertAdjacentHTML('beforeend', 4444);

//-----------------------

document.querySelector('.one span').innerHTML = 9999;
// ----------------------
console.log(document.querySelector('img').alt);
document.querySelector('img').alt = 'yellow cat';


console.log(document.querySelector('img').src);
document.querySelector('img').src = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-48.png';

document.querySelector('title').innerText = 'Lesson 4';

console.log(document.querySelector('link').href);
document.querySelector('link').href = 'css/style2.css';

// -------------------------
console.log(document.querySelector('input').value);
document.querySelector('input').value = '13.12.2018';
document.querySelector('input').type = 'range';