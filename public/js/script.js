//ajax(url, method, functionName, dataArray)


document.querySelector('#btnsnd').onclick = function () {
    let fname = document.querySelector('#fname').value,
        lname = document.querySelector('#lname').value,
        data = JSON.stringify({ fname: fname,
                                lname: lname  });
        
    ajax('/', 'POST', showData, data);
}

document.querySelector('#btnsnd2').onclick = function () {
    let nTitle = document.querySelector('#noteTitle').value,
        nBody = document.querySelector('#noteBody').value,
        data = JSON.stringify({ nTitle  : nTitle,
                                nBody   : nBody  });
        
    ajax('/notes', 'POST', showData, data);
}

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
    if ('fname' in data) {
        console.log('data: '+data.lname, data.fname);
    } else if ('_id' in data) {
        console.log('data: ',JSON.stringify(data));
        let noteDiv = document.querySelector('#noteDiv'),
            newP    = document.createElement("p");
        noteDiv.appendChild(newP);
        newP.innerHTML = 'id this note is: ' + data._id;
    }
}

function checkId (id) {
    if (id.length != 24) return false;
    return true;
}
