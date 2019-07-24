import abc from "./main";
import app from "./app";
import "./index.css";

console.log(abc);

var container = document.getElementById("main");

container.addEventListener("click", function() {
  container.style.backgroundColor = "green";
});

console.log(container);
var node = document.createElement("h1");
container.appendChild(node);
// container.appendChild(<h1>Hello</h1>);
