
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  });
  
  function afterConnection() {
      //var request = process.argv.slice(2).join(" ");
      //var info = process.argv[3];
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
      

  inquirer  
    .prompt ([
      {
        type: "input",
        message: "Please input product ID for product you wish to purchase",
        name: "productId"
        },
        {
        type: "input",
        message: "Please enter quantity",
        name: "productQuantity"
        }

        
    ])
    
    .then(function(postData){
      var output = "Product to purchase: "+postData.productId+
      "\nNumber of units to purchase: "+postData.productQuantity;
      console.log(output); 
    })

    connection.end();
    });
  }