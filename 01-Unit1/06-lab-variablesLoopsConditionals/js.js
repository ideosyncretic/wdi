var orders = [];

var guestOrder = 0;
var totalBill = 0;

var price = {
  salad: 2,
  soup: 3
}

guestName = prompt("Hi, what's your name?", "Type your name");

var guestNumber = prompt("Table for how many today, " + guestName + "?", "Type a number");
guestNumber = parseInt(guestNumber);

alert("Great! Take your seats. I'll just go around the table and get your orders.");

for (var i = 1; i <= guestNumber; i++) {
  guestOrder = prompt("Hi, would you like some $" + price.salad + " salad, or $" + price.soup + " soup?", "Type 'salad' or 'soup'");
  guestOrder = guestOrder.toLowerCase(); orders.push(guestOrder);
  console.log(guestOrder)
};

for (var i = 0; i <= orders.length; i++) {
  if (orders[i] === "salad") {
    totalBill += price.salad;
  } else if (orders[i] === "soup") {
    totalBill += price.soup;
  }
};

console.log(totalBill);

alert("Hope you've enjoyed your meal! Your bill is $" + totalBill)
