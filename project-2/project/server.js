const http = require("http");

const movie = require("./controllers/movie");

const parseURLParams = (value) => {
  const params = new URLSearchParams(value);

  return Array.from(params.entries()).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {}
  );
};

const server = http.createServer(async (req, res) => {
  const [basePath, paramsString] = req.url.split("?");

  if (basePath === "/data/movies" && req.method === "GET") {
    const params = parseURLParams(paramsString);

    const { data, code } = await movie.getAll(params);

    res.writeHead(code, { "Content-Type": "application/json" });
    res.end(data);
  } else if (basePath.match(/\/data\/movies\/\w+/) && req.method === "GET") {
    const id = basePath.split("/")[3];

    const { data, code } = await movie.getById(id);

    res.writeHead(code, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not Found" }));
  }
});

const PORT = 8888;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;