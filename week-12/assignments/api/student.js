const students = require("../data/student.json");

const getAllStudents = (term,university,valueTerm) =>
  new Promise((resolve) => {
    let data = students;

    if(term) {

        switch(term) {
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
                data = data.filter((student) => student.email_address.includes(valueTerm));
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
