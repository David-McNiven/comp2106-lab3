//Write a function that Accept 3 QueryString parameters: method, x, and y
//- Possible values for the method parameter are: "add", "subtract", "multiply", and "divide"
//- If the method value is anything else, show an error message
//- Determine which math operation to run based on the value of the method parameter
//- Perform this math operation on the other 2 values (x and y)
//- Display the full math operation and its result on the page in this format: x [method] y = [result]

//- Sample URL: http://localhost:3000/lab3?method=add&x=16&y=4
//- Sample Output: 16 + 4 = 20

//- Sample URL: http://localhost:3000/lab3?method=subtract&x=16&y=4
//- Sample Output: 16 - 4 = 12

//- Sample URL: http://localhost:3000/lab3?method=multiply&x=16&y=4
//- Sample Output: 16 * 4 = 64

//- Sample URL: http://localhost:3000/lab3?method=divide&x=16&y=4
//- Sample Output: 16 / 4 = 4

var connect = require('connect');
var url = require('url');

var app = connect();

var calculate = function(req,res){
  var qs = url.parse(req.url, true).query;
  var method = qs.method;
  var x = parseInt(qs.x);
  var y = parseInt(qs.y);
  if (method === 'add') {
    var result = x + y;
    res.end(x + ' + ' + y + ' = ' + result);
  } else if (method === 'subtract') {
    var result = x - y;
    res.end(x + ' - ' + y + ' = ' + result);
  } else if (method === 'multiply') {
    var result = x * y;
    res.end(x + ' * ' + y + ' = ' + result);
  } else if (method === 'divide') {
    var result = x / y;
    res.end(x + ' / ' + y + ' = ' + result);
  } else {
    res.end('ERROR: no such method exists.');
  }
};

app.use('/lab3', calculate);
app.listen(3000);
