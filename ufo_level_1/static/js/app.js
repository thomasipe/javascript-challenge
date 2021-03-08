// from data.js
var tableData = data;

//**************************************************************** */
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  function selectDate(ufo) {
    return ufo.datetime === inputValue;
}
var dateSelected = data.filter(selectDate);
console.log(dateSelected);

// Now create all of the table stuff and populate with the date selected data

// Reference to the table body
var tbody = d3.select("tbody");

data.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

}
//***************************************************************** */


 
  