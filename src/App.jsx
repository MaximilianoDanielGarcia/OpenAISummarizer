import './App.css'
import Demo from './components/Demo'
import Hero from './components/Hero'

function App() {

  return (
    <main className='min-h-screen w-full'>
      <div className='main'>
        <div className="gradient">

        </div>
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App
