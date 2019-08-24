// from data.js
var tableData = data;

// // Get a reference to the table body
var tbody = d3.select("tbody");

// // BONUS: Refactor to use Arrow Functions!
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");
// Complete the click handler for the form
button.on("click", function () {
  // Select the input element and get the raw HTML node
  var input = d3.select("#datetime");
  // Get the value property of the input element
  var filtered_value = input.property("value");
  console.log(filtered_value);
  // Use the form input to filter the data by datetime
  var filtered_data = tableData.filter(item => {
    return item.datetime === filtered_value;
  });
  tbody.html("");
  filtered_data.forEach((filtered_sighting) => {
    var row = tbody.append("tr");
    Object.entries(filtered_sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});






