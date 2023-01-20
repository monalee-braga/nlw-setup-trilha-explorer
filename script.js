const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia já incluso!')
    return
  }

  alert('Dia adicionado com sucesso ✅')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.clear()
  const key = window.btoa('NLWSetup@habits')
  const value = window.btoa(JSON.stringify(nlwSetup.data))
  localStorage.setItem(key, value)
}

function get() {
  const key = window.btoa('NLWSetup@habits')
  const value = JSON.parse(window.atob(localStorage.getItem(key))) || {}
  nlwSetup.setData(value)
  nlwSetup.load()
}

get()
