function subtext(){
    var a=document.getElementById('number1').value;
    var b=document.getElementById('number2').value;
    document.getElementById('result').innerHTML+=parseInt(a)-parseInt(b);
}