// let i = 0;

// while (i < 5) {
//   console.log(i); // This will print numbers 0 to 4
//   i++; // Increment i by 1
// }

// declare globals
var money = 20;
var lunches = 0;

// display lunch budget
document.getElementById("money").innerHTML = money;

// listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/* buys specified number of sandwiches per day at current prices */
function buyLunches() {
    resetForm(); // Reset the game state for a new order

    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var currentDay = 0;  // Track which day of the week it is currentDay++ increments it after each iteration, so it will go through the days in the correct order

    while (money > 0 && currentDay < days.length) {
        var priceToday = getSandwichPrice();
        var numberOfSandwiches = parseInt(document.getElementById("numSandwiches").value);  // Convert to integer
        var totalPrice = priceToday * numberOfSandwiches;

        if (money >= totalPrice) {
            money = money - totalPrice;
            lunches++;
            document.getElementById("receipt").innerHTML += "<p>On " + days[currentDay] + ", sandwiches are: $" + priceToday + ". You have $" + money.toFixed(2) + " left.</p>";
        } else {
            document.getElementById("receipt").innerHTML += "<p>Today, sandwiches are: $" + priceToday + ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
            money = 0; // Not enough money, so set money to 0
        }
        
        currentDay++; // Move to the next day in the week
    }

    document.getElementById("receipt").innerHTML += "<p>You bought " + lunches + " lunches this week.</p>";
}

/* gets the current price of sandwiches */
function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (1 - 0) + 1).toFixed(2);
    return sandwichPrice;
}

/* resets the game so that a new order can be placed */
function resetForm() {
    money = 20;
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";
}