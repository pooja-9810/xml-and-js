(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  const students = require("../data/student.json");
  
  const getAllStudents = (term, university,valueTerm) =>
    new Promise((resolve) => {
      let data = students;
  
      if(term) {
  
          switch(term) {
            case "student_id":
                  data = data.filter((student) => student.student_id.toLowerCase().includes(valueTerm));
                  break;
              case "first_name":
                  data = data.filter((student) => student.first_name.toLowerCase().includes(valueTerm));
                  break;
              case "last_name":
                  data = data.filter((student) => student.last_name.toLowerCase().includes(valueTerm));
                  break;
              case "gender":
                  data = data.filter((student) => student.gender.toLowerCase() === valueTerm.toLowerCase());
                  break;
              case "university":
                  data = data.filter((student) => student.university.toLowerCase().includes(valueTerm));
                  break;
              case "email_address":
                  data = data.filter((student) => student.email_address.toLowerCase().includes(valueTerm));
                  break;              
              default:
                  break;
          }
      }
      
    
      
      if(university && university != "all") {
          data = data.filter((student) => student.university_name.toLowerCase() === university);
      }
      
      resolve({ code: 200, data: data });
    });
  
  const getStudentById = (id) =>
    new Promise((resolve) => {
      const student = students.find((student) => student.id === Number(id.trim()));
  
      if (student) {
          resolve({ code: 200, data: Array(student) });
      } else {
          resolve({
              code: 404,
              data: { message: `No student found for id ${id}` },
          });
      }
    });
  
  module.exports = {
    getAllStudents,
    getStudentById,
  };
  
  },{"../data/student.json":2}],2:[function(require,module,exports){
  module.exports=[{"student_id":25,"first_name":"Hal","last_name":"Legerton","gender":"Male","university":"Moi University","email_address":"hlegerton0@google.es"},
  {"student_id":48,"first_name":"Aylmer","last_name":"Tattam","gender":"Male","university":"Universidad Tecnológica Nacional","email_address":"atattam1@shop-pro.jp"},
  {"student_id":21,"first_name":"Virgilio","last_name":"Dusting","gender":"Male","university":"Universidad del Istmo","email_address":"vdusting2@dedecms.com"},
  {"student_id":23,"first_name":"Elspeth","last_name":"Tilly","gender":"Female","university":"Soonchunhyang University","email_address":"etilly3@omniture.com"},
  {"student_id":92,"first_name":"Dimitry","last_name":"Broomfield","gender":"Male","university":"Yonsei University","email_address":"dbroomfield4@furl.net"},
  {"student_id":4,"first_name":"Carroll","last_name":"Dearnly","gender":"Female","university":"Northeastern University","email_address":"cdearnly5@auda.org.au"},
  {"student_id":53,"first_name":"Manon","last_name":"Amberg","gender":"Female","university":"Catholic Theological Union","email_address":"mamberg6@baidu.com"},
  {"student_id":100,"first_name":"Flinn","last_name":"Rushbury","gender":"Male","university":"Fachhochschule Bingen","email_address":"frushbury7@ovh.net"},
  {"student_id":5,"first_name":"Quinn","last_name":"Caustick","gender":"Male","university":"Gujarat University Ahmedabad","email_address":"qcaustick8@senate.gov"},
  {"student_id":94,"first_name":"Frasquito","last_name":"Elliff","gender":"Male","university":"Peking University","email_address":"felliff9@google.com.br"}]
  },{}],3:[function(require,module,exports){
  const { getAllStudents, getStudentById } = require("./api/student");
  
  const renderTable = (data) => {
    const tableBody = document.getElementById("table-body");
  
    if (!tableBody) {
      throw new Error("No table element found");
    }
    
    const rows = data.reduce(
      (acc, { student_id, first_name, last_name,  gender,university, email_address }) =>
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
  
    
    const university = event.target.filters_university.value;
    const valueTerm = event.target.input.value;
    
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
  
  },{"./api/student":1}]},{},[3]);