function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Bob", "Alice"];

user.forEach(person => {
  console.log(greeter(person)); //outputs Hello, Bob
  //outputs Hello, Alice
});
//Alternatively:

function greeterArray(people: string[]): string[]{
  return people.map(person => "Hello, " + person);
}
console.log(greeterArray(user));//outputs [ 'Hello, Bob', 'Hello, Alice' ]