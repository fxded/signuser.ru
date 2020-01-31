//ajax(url, method, functionName, dataArray)


document.querySelector('#btnsnd').onclick = function () {
    let fname = document.querySelector('#fname').value,
        lname = document.querySelector('#lname').value,
        data = JSON.stringify({ fname: fname,
                                lname: lname  });
        
    ajax('/', 'POST', showData, data);
}

document.querySelector('#signup-submit').onclick = function () {
    let name = document.querySelector('#signup-name').value,
        pass = document.querySelector('#signup-pass').value,
        email = document.querySelector('#signup-email').value,
        birthday = document.querySelector('#signup-birthday').value,
        sex = document.querySelectorAll('.sex');
        for (let i = 0; i < sex.length; i++) {
            if (sex[i].checked) {
                sex = sex[i].value;
                break;
            }
        }
        data = JSON.stringify({ name    : name,
                                pass    : pass,
                                email   : email,
                                birthday: birthday,
                                sex     : sex
                              });
        
    ajax('/signin', 'POST', showData, data);
}
/*
document.querySelector('#btnsnd3').onclick = function () {
    let id = document.querySelector('#idNote').value,
        url = '/notes/'+id,
        data = null;
    if (!checkId(id)) 
        alert('input valid id');  
    else   
        ajax(url, 'GET', receivGetData, data);
}

document.querySelector('#btnsnd4').onclick = function () {
    let id = document.querySelector('#delIdNote').value,
        url = '/notes/'+id,
        data = null;
    console.log(id.length);    
    if (!checkId(id)) 
        alert('input valid id');  
    else   
        ajax(url, 'DELETE', receivGetData, data);
}

document.querySelector('#btnsnd5').onclick = function () {
    let id = document.querySelector('#idNote').value,
        url = '/notes/'+id,
        nTitle = document.querySelector('#noteTitle').value,
        nBody = document.querySelector('#noteBody').value,
        data = JSON.stringify({ nTitle  : nTitle,
                                nBody   : nBody  });
        
        
    if (!checkId(id)) 
        alert('input valid id');  
    else   
        ajax(url, 'PUT', showData, data);
}

document.querySelector('#btnsnd6').onclick = function () {
        ajax('/notes/all/find', 'GET', receivGetData, null);
}
*/
function receivGetData (data) {
    if (data.response != "") {
        data = JSON.parse(data.response);
    }    
    console.log(data);
    if ('title' in data) {
        document.querySelector('#noteTitle').value = data.title;
        document.querySelector('#noteBody').value = data.text;
        //    newP    = document.createElement("p");
        //getNoteDiv.appendChild(newP);
        //newP.innerHTML =  data.title+'<br>'+data.text;
        
        return;
    } else {
        let delNoteDiv = document.querySelector('#delNoteDiv'),
            newP    = document.createElement("p");
        delNoteDiv.appendChild(newP);
        newP.innerHTML =  JSON.stringify(data);
    }
    let delNoteDiv = document.querySelector('#delNoteDiv'),
        newP    = document.createElement("p");
    delNoteDiv.appendChild(newP);
    newP.innerHTML =  "This note is not found";
}

function showData(data) {
    data = JSON.parse(data.response);
    console.log('user add: ', data);
}

function checkId (id) {
    if (id.length != 24) return false;
    return true;
}
