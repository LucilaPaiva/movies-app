import { FC, ReactNode, useEffect } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header"
import { Main } from "../Main";
import { useMe } from "../../../hooks";


type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const { loginWithToken, me } = useMe();

  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <>
      <Header />
      {me && <Main>
          { children }
      </Main>}

      <Footer />
    </>
  );
};

export { Layout }

