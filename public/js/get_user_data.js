document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format": "yyyy-mm-dd"
    });
});

ajax('/getuser', 'POST', getUserData, null);

function getUserData(result) {
    result = JSON.parse(result.response);
    console.log(result);
    document.querySelector('#signup-name').value = result.username;
    document.querySelector('#signup-birthday').value = result.birthday;
}

document.querySelector('#update-submit').onclick = function () {
    let name = document.querySelector('#signup-name').value,
        pass = document.querySelector('#signup-pass').value,
        confpass = document.querySelector('#signup-confpass').value,
        birthday = document.querySelector('#signup-birthday').value;

    if ((pass != confpass) || ((name == '') || (birthday == '') || (pass == ''))) { 
        alert("Passwords do not match. Please try again.");
    } else {
        data = JSON.stringify({ username    : name,
                                password    : pass,
                                birthday    : birthday });
        
        ajax('/update', 'POST', getResult, data);
    }
}

function getResult (response) {
    console.log(response);
    data = JSON.parse(response.response);
    if (data.updatestatus == 1) {
        alert('Данные успешно обновлены!');
    }
    else {
        alert('ошибка обновления');
        console.log(data);
    }
    
}
