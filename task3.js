function celsius_to_fahrenheit(c){
    var f = (9/5 * c)+ 32;
    return f;
}
function fahrenheit_to_celsius(f){
    var c = (f-32) * 5/9;
    return c;
}
function celsius_to_kelvin(c){
    var k = c + 273.15;
    return k;
}
function kelvin_to_celsius(k){
    var c = k - 273.15;
    return c;
}
function fahrenheit_to_kelvin(f){
    var k = (f + 459.67) * 5/9;
    return k;
}
function kelvin_to_fahrenheit(k){
    var f = (k * 9/5) - 459.67;
    return f;
}
function convert(){
    var temp = document.getElementById("temp").value;
    var input = document.getElementById("input").value;
    var output = document.getElementById("output").value;
    var res = document.getElementById("result");
    var ans;
    if(input=="celsius" && output=="fahrenheit"){
        ans = celsius_to_fahrenheit(parseFloat(temp));
    }
    else if(input=="fahrenheit" && output=="celsius"){
        ans = fahrenheit_to_celsius(parseFloat(temp));
    }
    else if(input=="celsius" && output=="kelvin"){
        ans = celsius_to_kelvin(parseFloat(temp));
    }
    else if(input=="kelvin" && output=="celsius"){
        ans = kelvin_to_celsius(parseFloat(temp));
    }
    else if(input=="fahrenheit" && output=="kelvin"){
        ans = fahrenheit_to_kelvin(parseFloat(temp));
    }
    else if(input=="kelvin" && output=="fahrenheit"){
        ans = kelvin_to_fahrenheit(parseFloat(temp));
    }
    res.innerHTML = temp + " °" + input + " is equal to " + ans.toFixed(2) + " °" + output;
}