import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Welcome to Your App!</h1>
    <div class="card">
      <h2>🚀 Your UI is now running</h2>
      <p>This is a basic Vite application with a clean, modern interface.</p>
      <button id="counter" type="button">Click me: 0</button>
    </div>
    <p class="footer">
      Ready for your next instructions!
    </p>
  </div>
`

let count = 0
const button = document.querySelector('#counter')
button.addEventListener('click', () => {
  count++
  button.textContent = `Click me: ${count}`
})