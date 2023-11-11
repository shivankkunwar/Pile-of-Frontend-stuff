import './App.css'
import Navbar from './component/Navbar'
import Project from './component/Projects/Projects'
function App() {
  

  return (
    <>
      <Navbar/>
      <div className='first-screen-body'>
        <h1>UI Garage</h1>
        <p>Here Lies all the random Frontend things I found interesting was not lazy enough to code</p>
      </div>
      <Project/>
    </>
  )
}

export default App
