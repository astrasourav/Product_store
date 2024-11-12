import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

function App() {

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  )
}

export default App
