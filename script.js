
document.addEventListener("DOMContentLoaded", function() {
  var addButton = document.getElementById("addProj");
  addButton.addEventListener("click", handleAdd);
});

function handleAdd() {
  var title = document.getElementById("projTitle").value.trim();
  var url   = document.getElementById("projURL").value.trim();
  var desc  = document.getElementById("projDesc").value.trim();

  if (title === "") {
    alert("Please give the project a name.");
    return;
  }
  if (url === "") {
    url = "#"; 
  }
  if (desc === "") {
    desc = "No description";
  }

  var card = document.createElement("article");
  card.className = "project-card";

  var h2 = document.createElement("h2");
  h2.textContent = title;

  var p = document.createElement("p");
  p.textContent = desc;

  var a = document.createElement("a");
  a.className = "open";
  a.href = url;
  a.textContent = "Open " + title;
  a.target = "_blank";
  a.rel = "noopener";

  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(a);

  document.getElementById("projects").appendChild(card);

  
  document.getElementById("projTitle").value = "";
  document.getElementById("projURL").value = "";
  document.getElementById("projDesc").value = "";
}
