import './App.css'
import Navbar from './component/Navbar/Navbar'
import Project from './component/Projects/Projects'
import {Routes, Route} from "react-router-dom"
import FileExplorer from './component/Projects/FileExplorer/FileExplorer'
function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
        <Route 
          path="/"
          element={
            <>
            
            <div className='first-screen-body'>
              <h1>UI Garage</h1>
              <p>Here Lies all the random Frontend things I found interesting was not lazy enough to code</p>
            </div>
            <Project/>
          </>
          }
        />
        <Route path="/projects/file-explorer" element={<FileExplorer />} />
        </Routes>
    </>
    


    
   
  )
}

export default App
