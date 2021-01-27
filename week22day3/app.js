import express from "express";

const app = express();
app.use(express.json());
app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  const add = String(parseInt(num1) + parseInt(num2));
  res.send(add);
});
app.get("/mul/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const add = String(parseInt(num1) * parseInt(num2));
  res.send(add);
});
app.get("/div/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const add = String(parseInt(num1) / parseInt(num2));
  res.send(add);
});
app.get("/sub/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const add = String(parseInt(num1) - parseInt(num2));
  res.send(add);
});

const PORT = 1111;

app.listen(PORT, console.log(`Server is running at ${PORT} no `));

/*
CURD
post -
route = localhost/api/v1/todo/create
{
    title:"",
    body:""
}

for id use uuid package

push post data in this array
data = []

{
    id:"",
    title:"",
    body:"",
    isCompleted:"",
    createdAt:"""

}



get -
route = localhost/api/v1/todo/all
{
    count:no of todo,
    todos:[{}]
}


*/
