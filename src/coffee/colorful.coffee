$ ".colorful, h2"
  .each ->
    this.innerHTML = this.innerText
      .replace /./g,"<span>$&</span>"