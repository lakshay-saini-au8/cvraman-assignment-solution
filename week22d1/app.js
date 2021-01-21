// 1. Fetch the data from http://jsonplaceholder.typicode.com/comments
// 2. Create a new array but each object should contain only postId, body
// 3. Create a filtered array with respect to the body’s character limit to less than or
// equal to 100 characters.
// 4. Try to analyse the data, by giving a count of posts with respect to post ID.

const data = fetch("http://jsonplaceholder.typicode.com/comments");
data
  .then((res) => res.json())
  .then((jsonData) => {
    const countData = {};
    const newArr = jsonData
      .filter((item) => {
        if (item.body.length <= 150) {
          return true;
        }
      })
      .map((item) => ({ postId: item.postId, body: item.body }));
    newArr.forEach((item) => {
      let id = String(item.postId);
      if (Object.keys(countData).includes(String(id))) {
        countData[id] = countData[id] + 1;
      } else {
        countData[id] = 1;
      }
    });
    console.log(newArr);
    console.log(countData);
  });

var foo = "bar";
function greet() {
  console.log(foo);
  var foo = "foo";
}

greet();
