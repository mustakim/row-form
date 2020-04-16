// const csv = require('csv-parser');
// const fs = require('fs');

// fs.createReadStream('data.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     console.log(row);
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//   });





  

var totalAmount = 5000;

document.getElementById('total-amount').innerHTML = totalAmount;
var name, amount;


document.querySelector('form.form').addEventListener('submit', function(e) {
    e.preventDefault();
    let x = document.querySelector('form.form').elements;

    name = x['name'].value;
    amount = x['amount'].value;

    totalAmount -= amount;
    document.getElementById('total-amount').innerHTML = totalAmount;



    console.log("name: ", name);
    console.log("amount: ", amount);
    console.log("total amount: ", totalAmount);
});

const rows = [
    [name, amount, totalAmount],
];

let csvContent = "data:text/csv;charset=utf-8," 
    + rows.map(e => e.join(",")).join("\n");

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link); // Required for FF
    
    link.click(); // This will download the data file named "data.csv".