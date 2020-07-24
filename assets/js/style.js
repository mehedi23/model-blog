
var searchbtn = document.getElementById('searchbtn');
searchbtn.onclick = function(){
    document.getElementById('search-area').style.top='14px';
}


var headbtn = document.getElementById('headerbtn');
headbtn.onclick = function(){
    document.getElementById('navber').style.top='10px';
}

var headbtn = document.getElementById('navcrose');
headbtn.onclick = function(){
    document.getElementById('navber').style.top='-1000px';
}

var body = document.getElementsByTagName("BODY")[0];
var logobtn = document.getElementById('loginbtn');
logobtn.onclick = function(){
    document.getElementById('log-in-area').style.visibility='visible';
    body.style.overflow='hidden';
}

var logobtn = document.getElementById('logcrosbtn');
logobtn.onclick = function(){
    document.getElementById('log-in-area').style.visibility='hidden';
    body.style.overflowY='scroll';
}