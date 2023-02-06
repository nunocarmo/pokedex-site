import { Route, Routes } from "react-router-dom"
import Main from "./pages/MainPage"
import PokeFullInfo from "./pages/PokeFullInfo"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokeinfo/:id" element={<PokeFullInfo />} />
      </Routes>
    </div>
  )
}

export default App
