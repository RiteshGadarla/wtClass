const http = require("http");
const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");

const server = http.createServer((req, res) => {
    const path = req.url.toLowerCase();

    if (path === "/" || path === "/home") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html.replace("{{%TITLE%}}", "Home").replace("{{%CONTENT%}}", "You are in Home page"));
    }
    else if (path === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html.replace("{{%TITLE%}}", "About").replace("{{%CONTENT%}}", "You are in About page"));
    }
    else if (path === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html.replace("{{%TITLE%}}", "Contact").replace("{{%CONTENT%}}", "You are in Contact page"));
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(html.replace("{{%TITLE%}}", "404").replace("{{%CONTENT%}}", "Error 404: Page not found!"));
    }

    console.log(`Request received for: ${path}`);
});

server.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});