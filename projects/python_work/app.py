# pyright: reportMissingImports=false
from js import document  # type: ignore

def count_words(event):
    text = document.getElementById("text").value
    words = [w for w in text.replace("\n", " ").split(" ") if w.strip()]
    chars = len(text)
    out = f"Words: {len(words)}\nCharacters (including spaces): {chars}"
    document.getElementById("stats").innerText = out

document.getElementById("btn-count").addEventListener("click", count_words)
