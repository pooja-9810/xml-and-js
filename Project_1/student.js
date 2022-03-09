const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  };
  
  const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        callback(target.responseXML);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  };
  
  const generateTableRow = (item) => {
 
    const id = item.getElementsByTagName(`id`);
    const gender = Array.from(item.getElementsByTagName(`gender`))[0];
    const studentname = Array.from(item.getElementsByTagName(`studentname`))[0];
    const major = Array.from(item.getElementsByTagName(`major`))[0];
    const enrollmentdate = Array.from(item.getElementsByTagName(`enrollmentdate`))[0];
  
    return `<tr>
        <td>${id}</td>
        <td>${gender}</td>
        <td>${studentname.textContent}</td>
        <td>${major.textContent}</td>
        <td>${enrollmentdate.textContent}</td>
    </tr>`;
  };
  
  const renderTable = (xmlData) => {
    const table = document.getElementById("student-table");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `student`
    );
  
    nodes.map((studentNode) =>
      table.appendChild(htmlToElement(generateTableRow(studentNode)))
    );
  };
  
  loadData(`./student.xml`,renderTable);
  const onReset = () => {
    window.location.replace(window.location.pathname);
  };