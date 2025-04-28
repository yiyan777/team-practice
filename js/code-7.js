const user7 = document.querySelector(".user-7");
const user7Img = document.createElement("img");
const user7Text = document.createElement("div");

user7.textContent = "";
user7Text.textContent = "痛みを感じる 神羅關稅!";
user7Text.classList.add(".text");

user7Img.src = "https://images.chinatimes.com/newsphoto/2025-03-24/1024/20250324004771.jpg";
user7Img.style.width = "300px";

user7.appendChild(user7Text);
user7.appendChild(user7Img);

user7Text.addEventListener("click", () => {
    window.open("https://tw.stock.yahoo.com/quote/2330.TW","_blank");
});