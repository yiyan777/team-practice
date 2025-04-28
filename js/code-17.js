const user17 = document.querySelector(".user-17").textContent="吳依穎";
user17.innerHTML = `
        <h2>User17到此一遊</h2>
        <button class="user17-btn">換顏色</button>
        `;
const user17Name = document.querySelector(".user-17 h2");
const user17Btn = document.querySelector(".user17-btn");

user17Name.style.color = "red";
user17Name.style.background = "gray";

user17Btn.addEventListener("click", () => {
  user17Name.style.color = generateColor();
  user17Name.style.background = getgenerateColor();
});

function getRandomColor() {
  return "#" + Math.random().toString(16).slice(2, 8).padEnd(6, "0");
}
