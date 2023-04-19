import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  BetterMovies,
  Buscador,
  DetailsPage,
  Home,
  LatestReleases,
  Login,
  Populars,
  Registro,
} from "./pages";
import { StoreProvider } from "./context";
import { useMe } from "./hooks";
import { useEffect } from "react";

function App() {

  const { loginWithToken } = useMe();

  useEffect(() => {
    loginWithToken();
  }, []);


  return (
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="latestReleases" element={<LatestReleases />} />
              <Route path="populars" element={<Populars />} />
              <Route path="registro" element={<Registro />} />
              <Route path="betterMovies" element={<BetterMovies />} />
              <Route path="buscador" element={<Buscador />} />
              <Route path="movie/:id" element={<DetailsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    
  );
}

export default App;
