//ajax(url, method, functionName, dataArray)


document.querySelector('#login-submit').onclick = function () {
    let email = document.querySelector('#login-email').value,
        password = document.querySelector('#login-password').value,
        data = JSON.stringify({ email: email,
                                password: password  });
        
    ajax('/login', 'POST', showCabinet, data);
}

document.querySelector('#signup-submit').onclick = function () {
    let name = document.querySelector('#signup-name').value,
        pass = document.querySelector('#signup-pass').value,
        confpass = document.querySelector('#signup-confpass').value,
        email = document.querySelector('#signup-email').value,
        birthday = document.querySelector('#signup-birthday').value,
        sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    if ((pass != confpass) || ((name == '') || (birthday == '') || (pass == ''))) { 
        alert("Passwords do not match. Please try again.");
    } else {
        data = JSON.stringify({ username    : name,
                                password    : pass,
                                email       : email,
                                birthday    : birthday,
                                sex         : sex });
        
        ajax('/signin', 'POST', showData, data);
    }    
}

function showData(data) {
    data = JSON.parse(data.response);
    console.log('user cred: ', data);
}

function showCabinet(data) {
    if (data == 401) {
        console.log(data);
        alert('Wrong email or password.');
    } else {
        console.log('ok',data);
        document.write (data.response);
    }
}

function logFunc (data) {
    console.log(data.response);
    if (data.response) {
        data = JSON.parse(data.response);
//        window.location.href = 'cabinet.html';
        document.querySelector('#user').innerHTML = 'Congratulations ' + data.name;
    } else {
        console.log('user not found !')
    }
}
