function o(o){return fetch(`http://localhost:4040/books/${o}`).then((o=>o.json())).then(console.log)}fetch("http://localhost:4040/books").then((o=>o.json())).then(console.log),o(2),o(4);
//# sourceMappingURL=get.d2a5cfa8.js.map
