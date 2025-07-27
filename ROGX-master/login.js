
var a = 0;
document.getElementById("toggle-button").innerHTML = "Login";
document.getElementById("log").style.width = "450px";
function move() {

    if (a == 0) {
        document.getElementById("toggle-button").innerHTML = "SignUp";
        document.getElementById("log").style.animationName = "lefttoright";
        setTimeout(function demo() {}, 2000);
        document.getElementById("log").style.left = "450px";
        
        a = 1;
    }
    else if (a == 1) {
        document.getElementById("toggle-button").innerHTML = "Login";
        document.getElementById("log").style.animationName = "righttoleft";
        setTimeout(function demo() {}, 2000);
        document.getElementById("log").style.left = "-20px";
        
        a = 0;
    }

}

