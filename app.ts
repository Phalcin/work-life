function greet(person: string = "Morning") {
  return `Good morning ${person}`;
}
const res = greet();
console.log(res);
