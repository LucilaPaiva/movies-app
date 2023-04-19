import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  BetterMovies,
  Buscador,
  DetailsPage,
  Home,
  LatestReleases,
  Login,
  Logout,
  Populars,
  Registro,
} from "./pages";
import { AuthProvider, StoreProvider } from "./context";

function App() {
  return (
    <AuthProvider>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="latestReleases" element={<LatestReleases />} />
              <Route path="populars" element={<Populars />} />
              <Route path="registro" element={<Registro />} />
              <Route path="logout" element={<Logout />} />
              <Route path="betterMovies" element={<BetterMovies />} />
              <Route path="buscador" element={<Buscador />} />
              <Route path="movie/:id" element={<DetailsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </AuthProvider>
  );
}

export default App;
