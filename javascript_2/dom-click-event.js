document.getElementById('myButton').onclick = function () {
    document.getElementById('paragraf').innerHTML = "<b>Javascript çok zor.</b>"
}

document.getElementById('myButton2').onclick = () => {
    document.getElementById('paragraf').style.color = 'blue';
    document.getElementById('paragraf').style.fontSize = "30px";
}

document.getElementById('myButton3').onclick = function () {
    document.getElementById('resim').src = "./service-4.jpg"
}


document.getElementById('red').onclick= ()=>{
    document.getElementById('red').style.display="none";
}

document.getElementById('green').onclick= ()=>{
    document.getElementById('green').style.display="none";
}

document.getElementById('blue').onclick= ()=>{
    document.getElementById('blue').style.display="none";
}