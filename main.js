let express = require("express");

let app = express()

app.get("/add", function(req, res) {
  const num1 = parseInt(req.query.num1)
  const num2 = parseInt(req.query.num2)
  const results = num1 + num2
  return res.json(results)
})





 app.post("/multiply", function (req, res) {
  const num1 = parseInt(req.query.num1)
  const num2 = pareseInt(req.query.num2)
  const results = num1 * num2
  return res.json(results)

 })


 app.get("/negate", function (req, res) {
  const num1 = parseInt(req.query.num1)
  const results = - num1
  return res.json(results)

 })

app.listen(4000, () => 
  console.log(`Example app listening on port 4000!`))