// var rightEye = document.getElementById("righteye");
// var leftArm = document.getElementById("leftarm");



// document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(-15deg)";
// document.getElementById("mouth").style.backgroundColor = "pink";
// document.getElementById("rightarm").style.left = ("22%")


 // Put a 2‐pixel‐wide, solid black border around his body.
 document.getElementById("body").style.border = "2px black solid";
 // Round the corners of his mouth.
 document.getElementById("mouth").style.borderRadius = "6px";
 // Put yellow dots around his right eye.
 document.getElementById("righteye").style.border =  "6px black dotted";
 // Change his left arm’s color.
 document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
 // Change the text color.
 document.getElementById("body").style.color = "#FF0000";
 // Give Douglas hair.
 document.getElementById("head").style.borderTop =  "5px black solid";

 var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
function moveUpDown(e){
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + "%";
        top++;
        if (top === 20){
            clearInterval(id);
}
}
}
var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);
function moveRightLeft(e) {
    var robotPart = e.target;
    var id = setInterval(frame, 10) // draw every 10ms
    var left = 0;
    robotPart.style.left = left + "%";
    function frame() {
        if (left === 70) {
            left++;
            clearInterval(id);
}
}
}


