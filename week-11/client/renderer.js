const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.send();
  });

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  if (nameTerm) {
    source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
  }

  const rows = source.reduce(
    (acc, { id, name, description, price }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${name}</td><td>${description}</td><td>${price}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

loadData(`https://xml-and-js-1-qfs5mkiev-pooja-9810.vercel.app/assignments/assignment/products`).then((data) =>
  renderTable(data)
);

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.name.value;

  loadData(`https://xml-and-js-1-qfs5mkiev-pooja-9810.vercel.app/assignments/assignment/products`).then((data) =>
    renderTable(data, term)
  );
};

const onReset = () => {
  loadData(`https://xml-and-js-1-qfs5mkiev-pooja-9810.vercel.app/assignments/assignment/products`).then((data) =>
    renderTable(data)
  );
};
