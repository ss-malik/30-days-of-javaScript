const data = [
  { id: 1, title: "first", salary: 25001 },
  { id: 2, title: "Second", salary: 30000 },
  { id: 3, title: "third", salary: 16669 },
  { id: 4, title: "fourth", salary: 49990 },
];

const dataUpperCase = data.map((el) => el.title.toUpperCase());

console.log("map", dataUpperCase);

// filter

const salayAbove20k = data.filter((ele) => ele.salary > 20000);

console.log("filter", salayAbove20k);

// find

const salaryAbove25k = data.find((el) => el.salary > 25000);
console.log("find", salaryAbove25k);

// reduce

const sumOfAllSalary = data.reduce((acc, cur) => acc + cur.salary, 0);
const sumOfAllSalary1 = data.reduce((acc, cur) => acc + cur.salary);

console.log("sumOfAllSalary-reduce", sumOfAllSalary);
console.log("reduce without initial value of accumulator", sumOfAllSalary1);

console.log("orignalArray", data);
