import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { Home, LatestReleases, Login, Populars, Registro, Signup } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/latestReleases" element={ <LatestReleases /> } />
        <Route path="/populars" element={ <Populars /> } />
        <Route path="/registro" element={ <Registro /> } />
        <Route path="/signup" element={ <Signup /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
