const dom = document.querySelector(".user-16");
const a = document.createElement("a");
const text = document.createTextNode("今天是星期一早上(十六蹲)");
dom.textContent = "";
a.href = "https://www.youtube.com/watch?v=btPv0-d3NbE";
a.appendChild(text);
dom.appendChild(a);
