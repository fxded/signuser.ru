//ajax(url, method, functionName, dataArray) {
// POST -> date = '2018-12-30'


document.querySelector('#btnsnd').onclick = function () {
    let fname = document.querySelector('#fname'),
        lname = document.querySelector('#lname');
    
    let data = { fname1: fname.value,
                 lname1: lname.value  };
    ajax('/', 'POST', showData(data), requestData(data));
}



function showData(data) {
    //data = JSON.parse(data);
    console.log(data);
}
