const http = require("http");
const fs = require("fs");
const httpPort = 3000;

const staticServer = (res, url) => {
  const path = url.substr(1);
  fs.readFile(path, "utf-8", (err, content) => {
    const type = path.split(".")[1];
    const contentTypeMap = {
      svg: "image/svg+xml",
      css: "text/css",
      js: "application/javascript",
    };
    res.writeHead(200, {
      "Content-Type": `${contentTypeMap[type]}; charset=utf-8`,
    });
    res.end(content);
  });
};

http
  .createServer((req, res) => {
    const url = req.url;
    // 处理静态文件
    if (url.endsWith(".js") || url.endsWith(".css") || url.endsWith(".svg")) {
      staticServer(res, url);
    } else {
      fs.readFile("index.html", "utf-8", (err, content) => {
        res.writeHead(200, {
          "Content-Type": "text/html; charset=utf-8",
        });

        res.end(content);
      });
    }
  })
  .listen(httpPort, () => {
    console.log("Server listening on: http://localhost:%s", httpPort);
  });