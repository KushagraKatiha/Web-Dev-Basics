const http = require("http");

const PORT = 5005;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-type", "application/json");
    res.write(JSON.stringify({ Msg: "Welcome to Men & Women Dummy Data" }));
  } else if (req.url == "/men") {
    res.setHeader("Content-type", "application/json");
    res.write(
      JSON.stringify({
        id: "1",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing",
      })
    );
  } else if (req.url == "/women") {
    res.setHeader("Content-type", "application/json");
    res.write(
      JSON.stringify({
        id: "1",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "XL",
        category: "Clothing",
      })
    );
  } else if (req.url == "/other") {
    res.statusCode = 500;
    res.setHeader("Content-type", "text/html");
    res.write("<h1>Page Not Found</h1>");
  }
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is listning at ${HOSTNAME}:${PORT}`);
});
