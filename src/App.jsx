import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ToDoApp from './components/ToDoApp'

function App() {

  return (
    <>
        <Navbar />
        
        <main>
            <ToDoApp />
        </main>

        <Footer />
    </>
  )
}

export default App
