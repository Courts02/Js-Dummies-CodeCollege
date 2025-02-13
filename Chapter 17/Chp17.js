// //Listing 17.1
// for (var i = 10; i > 0; i--) {
//     alert(i);
// }
// alert("Blast Off!");

// //Listing 17.2
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];

// for (var i = 0; i < myFriends.length; i++){
//  alert(myFriends[i] + " is my friend.");
// }

// //Listing 17.3
// alert(Math.random());

// //Listing 17.4
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// var randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);

//Listing 17.5
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

var maxTemp = 100;
var minTemp = 0;
generateWeather();

function generateWeather() {
    for (var i = 0; i < days.length; i++) {
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" +
            weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + 
            tempToday + " degrees.</div>";
    }
}

// 2D array (array of arrays)


// let fruits = ["banana", "raspberry", "cherry", "strawberry", "blueberry"];

// for (let i = 0; i < fruits.length; i++) {
//     alert(fruits[i]); // alert creates a pop-up for the fruit.
// }

// let fruits = ["banana", "raspberry", "cherry", "strawberry", "blueberry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]); // Logs each fruit to the console.
// }


