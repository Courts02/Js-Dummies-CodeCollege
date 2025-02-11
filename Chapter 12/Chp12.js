var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {

    if (currentPosition >= 418) {
        alert("OOOOOOO!");
        console.log("Crash!");
        clearInterval(animation);
        resetTrain();
    }
}

function stopTrain() {
    if (trainPosition < 400) {
        clearInterval(animation);
    }
}

function resetTrain() {
    trainSpeed = 250;
    trainPosition = 0;
    train.style.left = '0px';
}


function greetmath(a, b) {
    console.log(a + b);
};


// function bye(name) {
//     console.log("Goodbye" + name)
// }


