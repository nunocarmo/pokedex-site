import { Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom"
import Main from "./pages/MainPage"
import PokeFullInfo from "./pages/PokeFullInfo"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"


function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://beta.pokeapi.co/graphql/v1beta",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/1" />} />
          <Route path="/:page" element={<Main />} />
          <Route path="/pokeinfo/:id" element={<PokeFullInfo />} />
        </Routes>
      </div>
    </ApolloProvider>
  )
}

export default App
