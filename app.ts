const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Emmanuel",
  lastName: "Mensah",
  age: 20,
};

console.log(
  `My name is ${person.firstName} ${person.lastName} and i am ${person.age} years old`,
);

function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Emmanuel",
    age: 20,
    location: "China",
  };
}

const res = printUser();
// the cave of adulam global

// Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.

// Env
// controlling the behaviour of the software
