function tagFunction(arr, ...args) {
  console.log(arr);
  console.log(args);
}

test("Tag Function", () => {
  const name = "Rizki";
  const age = 19;

  tagFunction`Hello my name is ${name}, i am ${age} years old`;
  tagFunction`Bye ${name}, see you later `;
});

test("Tag Function sql", () => {
  const name = "mangga";
  const price = 10000;

  tagFunction`SELECT * FROM products WHERE name = ${name} AND price = ${price}`;
});
