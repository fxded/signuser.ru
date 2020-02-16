//logout.js 
                                
document.querySelector('#logout').onclick = function () {
    ajax('/logout', 'GET', logoutFunc, {});    
}

function logoutFunc (data) {
    console.log(data);
    location.href = '/';
}
