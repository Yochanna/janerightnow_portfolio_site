const btn = document.getElementById("btn");
const out = document.getElementById("out");

let n = 0;
btn.addEventListener("click", () => {
  n++;
  out.textContent = `You clicked ${n} time${n === 1 ? "" : "s"} 🎉`;
});





