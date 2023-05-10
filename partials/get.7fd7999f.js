function o(o){return fetch(`http://localhost:4040/books/${o}`).then((o=>o.json())).then(console.log)}fetch("http://localhost:4040/books").then((o=>o.json())).then(console.log),o(2),o(4);//!!!!! Оброблення помилки 404
//!!!! Оброблення помилки 404 через asiox не треба
//# sourceMappingURL=get.7fd7999f.js.map
