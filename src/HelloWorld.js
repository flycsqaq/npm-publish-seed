class HelloWorld {
  say() {
    let div = document.createElement('div')
    div.innerHTML = 'hello world'
    document.body.appendChild(div)
  }
}