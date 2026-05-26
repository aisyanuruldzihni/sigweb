var tombol = document.getElementById("darkBtn");

tombol.onclick = function(){

var body = document.body;

body.classList.toggle("dark");

if(body.classList.contains("dark")){
tombol.innerHTML = "&#9728; Light Mode";
alert("Dark mode aktif");
}else{
tombol.innerHTML = "&#127769; Dark Mode";
alert("Dark mode nonaktif");
}

};