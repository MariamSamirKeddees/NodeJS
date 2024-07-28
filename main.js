const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";
const fs = require("fs");
const printTodoList = require("./modules/printTodoList");
const allTodoList = require("./modules/genTodoList");
const todoString = fs.readFileSync("./data.json", "utf8");
const todoList = JSON.parse(todoString);

const server = http.createServer((req, res) => {
	switch (req.method) {
		case "GET":
			if (req.url === "/") {
				res.statusCode = 200;
				res.setHeader("Content-Type", "text/html");
				let resBody = "";
				todoList.forEach((todo) => {
					resBody += allTodoList(todo.id, todo.item, todo.status);
				});
				res.end(printTodoList(resBody));
			} else if (req.url.startsWith("/todo/")) {
				const id = req.url.split("/")[2];
				res.statusCode = 200;
				res.setHeader("Content-Type", "text/html");
				let resBody = "";
				todoList.forEach((todo) => {
					if (todo.id === +id) {
						resBody += allTodoList(todo.id, todo.item, todo.status);
					}
				});
				if (resBody === "") {
					res.statusCode = 405;
					res.setHeader("Content-Type", "text/plain");
					res.end("NOT FOUND");
				} else {
					res.end(printTodoList(resBody));
				}
			}
			break;

		case "POST":
			switch (req.url) {
				case "/createItem":
					let body = [];
					req
						.on("data", (chunk) => {
							body.push(chunk);
						})
						.on("end", () => {
							body = Buffer.concat(body).toString();
							const data = JSON.parse(body);
							console.log(data);
							todoList.push(data);
							fs.writeFile("./data.json", JSON.stringify(todoList), (err) => {
								if (err) console.log(err);
							});
						});
					res.end();
					break;
				default:
					res.statusCode = 404;
					res.setHeader("Content-Type", "text/plain");
					res.end("NOT FOUND");
			}
			break;
		default:
			res.statusCode = 405;
			res.setHeader("Content-Type", "text/plain");
			res.end("METHOD NOT ALLOWED");
	}
});

server.listen(port, hostname, () => {
	console.log("server running at http://127.0.0.1:3000");
});