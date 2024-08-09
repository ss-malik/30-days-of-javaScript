const tableData = document.querySelector(".tablePerson");

const data = [
  { id: 1, userName: "Salman", Rollno: 41 },
  { id: 2, userName: "Anwar", Rollno: 35 },
  { id: 3, userName: "Ramu", Rollno: 45 },
];

for (let i = 0; i < data.length; i++) {
  let row = `<tr>
<td>${data[i].id}</td>
<td>${data[i].userName}</td>
<td>${data[i].Rollno}</td>
</tr>`;
  tableData.innerHTML += row;
}
