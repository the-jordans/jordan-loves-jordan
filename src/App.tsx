import './App.css'

declare const __APP_VERSION__: string
const VERSION_NUMBER = __APP_VERSION__

function App() {
  return (
    <main className="centered">
      <h1>
        <span className="line1">JORDAN LOVES JORDAN</span>
        <span className="line2">COMING 2028</span>
      </h1>
      <div className="version" aria-hidden="true">
        {`v${VERSION_NUMBER}`}
      </div>
    </main>
  )
}

export default App
