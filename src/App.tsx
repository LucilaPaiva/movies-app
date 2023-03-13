import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BetterMovies, Buscador, DetailsPage, Home, LatestReleases, Login, Logout, Populars, Registro,  } from "./pages";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={ <Home /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="recently" element={ <LatestReleases /> } />
          <Route path="populars" element={ <Populars /> } />
          <Route path="registro" element={ <Registro /> } />
          <Route path="logout" element={ <Logout /> } />
          <Route path="betterMovies" element={ <BetterMovies /> } />
          <Route path="buscador" element={ <Buscador /> } />
          <Route path="movie/:id" element={ <DetailsPage /> } />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
