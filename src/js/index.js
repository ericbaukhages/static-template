function component() {
  const elem = document.createElement("div")

  elem.innerHTML = "hello world"

  return elem
}

document.body.appendChild(component())
