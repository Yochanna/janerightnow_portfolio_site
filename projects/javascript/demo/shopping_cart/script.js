var nums       = [1, 2, 3, 4];
var items      = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices     = [7.50, 9.50, 8.50, 7.50];
var quantities = [0, 0, 0, 0];
var totals     = [0, 0, 0, 0];


function add_selection(i) {
  quantities[i]++;
  totals[i] = prices[i] * quantities[i];
  display_all();
}


function remove_selection(i) {
  if (quantities[i] > 0) {
    quantities[i]--;
    totals[i] = prices[i] * quantities[i];
  }
  display_all();
}


function display_all() {
  var html = "<table>"
           + "<tr>"
           +   "<th>Num</th>"
           +   "<th>Item</th>"
           +   "<th>Price</th>"
           +   "<th>Quantity</th>"
           +   "<th>Total</th>"
           +   "<th>Add</th>"
           +   "<th>Remove</th>"
           + "</tr>";

  for (var i = 0; i < items.length; i++) {
    html += "<tr>"
         +   "<td>" + nums[i] + "</td>"
         +   "<td>" + items[i] + "</td>"
         +   "<td>$" + prices[i].toFixed(2) + "</td>"
         +   "<td>" + quantities[i] + "</td>"
         +   "<td>$" + totals[i].toFixed(2) + "</td>"
         +   "<td><button onclick='add_selection(" + i + ")'>Add</button></td>"
         +   "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>"
         + "</tr>";
  }

  html += "</table>";
  document.getElementById("demo").innerHTML = html;
}


function checkout() {
  var sum = totals.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  document.getElementById("total").innerHTML =
    "Total Price: $" + sum.toFixed(2);
}






