let info = prompt("Enter your name");
a = new Date().getDay();
if (a===1){
    document.getElementById("myName").innerHTML = `${info}!`+"<br>"+
    new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+" Pazartesi";
}
if (a===2){
    document.getElementById("myName").innerHTML = `${info}!`+"<br>"+
    new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+" Salı";
}
if (a===3){
    document.getElementById("myName").innerHTML = `${info}!`+"<br>"+
    new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+" Çarşamba";
}
if (a===4){
    document.getElementById("myName").innerHTML = `${info}!`+"<br>"+
    new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+" Perşembe";
}
if (a===5){
    document.getElementById("myName").innerHTML = `${info}!`+"<br>"+
    new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+" Cuma";
}
if (a===6){
    document.getElementById("myName").innerHTML = `${info}!`+"<br>"+
    new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+" Cumartesi";
}
if (a===7){
    document.getElementById("myName").innerHTML = `${info}!`+"<br>"+
    new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+" Pazar";
}