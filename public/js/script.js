document.querySelector('.push').onclick = function () {

    // данные из input type = radio
    // console.log(document.querySelector('.radio-input[checked="checked"]').value);

    let radio = document.querySelectorAll('.radio-input');
    //console.log(radio);
    //radio[0].hidden = true;
    for (let i = 0; i < radio.length; i = i + 1) {
        //console.log(radio[i].checked);
        if (radio[i].checked) {
            console.log(radio[i].value);
        }
    }

    let p = document.querySelectorAll('p');
    console.log(p);
    for (let i = 0; i < p.length; i = i + 1) {
        p[i].style.color = 'red';
    }

    let option = document.querySelectorAll('#my-select option');
    console.log(option);
    for (let i = 0; i < option.length; i = i + 1) {
        // console.log(option[i].selected);
        if (option[i].selected) {
            console.log(option[i].innerHTML);
        }
    }
}