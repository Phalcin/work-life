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
