import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header"
import { Main } from "../Main";
import { Menu } from "../Menu";

type Props = {
  children: ReactNode 
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      <Main>
          { children }
      </Main>

      <Footer />
    </>
  );
};

export { Layout }

