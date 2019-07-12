document
  .querySelectorAll(".colorful")
  .forEach(v => (v.innerHTML = v.innerText.replace(/./g, "<span>$&</span>")));
