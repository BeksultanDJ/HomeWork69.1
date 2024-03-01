import './App.css'
import SearchPage from "./components/SearchPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ShowDetails from "./components/ShowDetailsPage.tsx";

function App() {

  return (
      <div>
    <Router>
      <div>
          <Routes>
              <Route path="/" element={<SearchPage/>}/>
              <Route path="/shows/:id" element={<ShowDetails/>}/>
          </Routes>
      </div>
    </Router>
      </div>
  )
}

export default App
