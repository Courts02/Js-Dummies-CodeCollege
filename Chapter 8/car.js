// var object = {
//     "key1": 3,
//     "key2": true
// };

// console.log(object["key1"])

var object = {
    "1": "Mom",
    "2": "Daniel",
    "3": "Tristen",
}

console.log(typeof object["3"])

var dreamCar = {
    "Make" : "Porsche ",
    "Model" : " 03",
    "Color" : "Green",
    "Year" : 2003,
    "BodyStyle" : "Luxury Car",
    "Price" : 75000
};

document.getElementById("modelyear").innerHTML = dreamCar.Year;
document.getElementById("pricetag").innerHTML = dreamCar.Price
document.getElementById("body").innerHTML = dreamCar.Make + " GT3 RS" + dreamCar.Model
document.getElementById("body").style.backgroundColor = dreamCar.Color
