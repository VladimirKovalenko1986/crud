!function(){var t="https://6448213150c25337443949ec.mockapi.io/api/todos/",e=function(e){return console.log("POST"),axios.post(t,e)},n=function(e){return console.log("DELETE: \n\tid: ".concat(e)),axios.delete("".concat(t,"/").concat(e))},o=document.getElementById("myInput"),c=1;function a(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c,o=document.createElement("li"),a=document.createTextNode(t);o.appendChild(a),o.dataset.id=n,e&&(o.className="checked"),myUL.appendChild(o),i(o)}function i(t){var e=document.createElement("SPAN"),n=document.createTextNode("×");e.className="close",e.appendChild(n),t.appendChild(e)}var d=function(t,e){return{text:t,isDone:e}};var s=document.getElementById("myUL");document.getElementById("addBtn").addEventListener("click",(function(){var t=o.value.trim();""!==t?(a(t),o.value="",function(t){var n=d(t,arguments.length>1&&void 0!==arguments[1]&&arguments[1]);e(n),c+=1}(t)):alert("You mast write something!")})),s.addEventListener("click",(function(e){var o,c,a=e.target;"LI"===a.tagName?(a.classList.toggle("checked"),o=a.dataset.id,c=a.classList.contains("checked"),console.log("PUT: \n\tid: ".concat(o," \n\tstatus: ").concat(c)),axios.put("".concat(t,"/").concat(o),{isDone:c})):a.classList.contains("close")&&(a.parentNode.remove(),n(a.parentNode.dataset.id))})),window.addEventListener("DOMContentLoaded",(function(){(console.log("GET"),axios.get(t).then((function(t){return t.data}))).then((function(t){return t.forEach((function(t){return a(t.text,t.isDone,t.id)})),console.log(t),t})).then((function(t){c=0===t.length?1:Number(t[t.length-1].id)+1}))}))}();
//# sourceMappingURL=to-do.69094cd1.js.map