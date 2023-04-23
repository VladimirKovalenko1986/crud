!function(){var n="http://localhost:4040";function o(o){return fetch("".concat(n,"/books/").concat(o)).then((function(n){return n.json()})).then(console.log)}fetch("".concat(n,"/books")).then((function(n){return n.json()})).then(console.log),o(2),o(4)}();
//# sourceMappingURL=get.a430b41e.js.map
