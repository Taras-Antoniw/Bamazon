
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
              
          //Select row

          connection.query("SELECT * FROM products WHERE item_id = ?",[postData.productId],  
            function(err, res) {
              if (err) throw err;
              console.log(res[0].product_name);
              if (res[0].product_id === null) {console.log("Product not found")}
              else {
                if (postData.productQuantity > res[0].stock_quantity) 
                 {
                  output = "Insufficient stock to fill meet your order requirement for" 
                  +res[0].product_name+"\nProduct code: "+res[0].item_id;
                  console.log(output);
                }
                else {
                  var temp = res[0].stock_quantity - postData.productQuantity;
                  var total = postData.productQuantity * res[0].price;
                  output = "Thank you for puchasing: "+res[0].product_name+
                  "\nProduct Code: "+res[0].item_id+
                  "\nThe total for your order is: "+total;

                  console.log(output);
                  connection.query("UPDATE products SET stock_quantity= ? WHERE item_id = ?", 
                  [temp, postData.productId], 
                      function(err, res) {
                        if (err) throw err;
                       connection.end();
                        });
                        }
                      }     
              });
            });
        });
  }
