const { getAllStudents, getStudentById } = require("./api/student");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  
  const rows = data.reduce(
    (acc, { student_id, first_name, last_name, gender, university, email_address}) =>
      acc +
      `<tr>
        <td>${student_id}</td>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td>${gender}</td>
        <td>${university}</td>
        <td>${email_address}</td>
      
    </tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

getAllStudents().then(({ data }) => renderTable(data));  

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.filters.value;

  const valueTerm = event.target.input.value;

  const university= event.target.filters_university.value;
  
  if(term === `id`) {
    getStudentById(valueTerm).then(({ data }) => renderTable(data));
  } else {
    getAllStudents(term.toLowerCase(), university.toLowerCase(),valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
  }
};

const onReset = () => {
  window.location.replace(window.location.pathname);
  getAllStudents().then(({ data }) => renderTable(data));
};

document.getElementById("Student Details").addEventListener("submit", onSubmit);
document.getElementById("Student Details").addEventListener("reset", onReset);