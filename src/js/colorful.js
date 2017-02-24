$(".colorful, h2")
  .each(function() {
    return this.innerHTML = this.innerText
      .replace(/./g,"<span>$&</span>");
});