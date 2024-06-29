let obj = [
  { index: 1, name: "salman", salary: 10000 },
  { index: 2, name: "Annu", salary: 30000 },
  { index: 3, name: "Ann", salary: 40000 },
  { index: 4, name: "sAL", salary: 60000 },
];

function reduceFun(acc, curr) {
  // console.log(acc);
  return acc + curr.salary;
}

let totalSalary = obj.reduce(reduceFun, 0);
console.log(totalSalary);
