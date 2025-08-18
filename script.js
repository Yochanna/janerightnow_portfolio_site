
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const overlay = $("#overlay");
const frame = $("#viewerFrame");
const titleEl = $("#viewerTitle");
const openNewTab = $("#openNewTab");
const closeBtn = $("#closeViewer");
const backdrop = $("#backdrop");

function slugify(str) {
  return (str || "")
    .toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}


function openViewer(title, url) {
  titleEl.textContent = title || "Preview";
  frame.src = url;
  openNewTab.href = url;
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  closeBtn.focus();
}
function closeViewer() {
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  frame.src = "about:blank";
}
closeBtn.addEventListener("click", closeViewer);
backdrop.addEventListener("click", closeViewer);
window.addEventListener("keydown", (e) => e.key === "Escape" && closeViewer());


function bindCard(card) {
  const url = card.getAttribute("data-url") || "#";
  const title = card.querySelector("h2")?.textContent?.trim() || "Preview";
  const btn = card.querySelector(".open");

  if (btn) btn.addEventListener("click", () => url === "#" ? alert("No preview yet.") : openViewer(title, url));
  card.addEventListener("click", (e) => {
    if (e.target.closest(".actions")) return; // avoid double fire
    url === "#" ? alert("No preview yet.") : openViewer(title, url);
  });
}
$$(".project-card").forEach(bindCard);


const KEY = "portfolio.projects.v2";
const load = () => JSON.parse(localStorage.getItem(KEY) || "[]");
const save = (list) => localStorage.setItem(KEY, JSON.stringify(list));

function addProjectToDOM(p, alsoSave = true) {
  const card = document.createElement("article");
  card.className = "project-card user-project";
  card.setAttribute("data-url", p.url);
  card.innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.desc || ""}</p>
    <div class="actions"><button class="open">Open preview</button></div>
  `;
  $("#projects").appendChild(card);
  bindCard(card);
  if (alsoSave) { const all = load(); all.push(p); save(all); }
}
load().forEach(p => addProjectToDOM(p, false));

$("#addProj").addEventListener("click", () => {
  const title = $("#projTitle").value.trim();
  let url = $("#projURL").value.trim();
  const desc = $("#projDesc").value.trim();
  if (!title) return alert("Please enter a title first.");

  if (!url) url = `projects/${slugify(title)}/`; // default folder
  addProjectToDOM({ title, url, desc });

  
  $("#projTitle").value = $("#projURL").value = $("#projDesc").value = "";
});
