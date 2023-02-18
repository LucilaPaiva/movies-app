import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { Bettermovies, Buscador, Home, LatestReleases, Login, Logout, Populars, Registro,  } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/latestReleases" element={ <LatestReleases /> } />
        <Route path="/populars" element={ <Populars /> } />
        <Route path="/registro" element={ <Registro /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/betterMovies" element={ <Bettermovies /> } />
        <Route path="/buscador" element={ <Buscador /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;