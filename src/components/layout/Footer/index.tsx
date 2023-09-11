import "./styles.scss";
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div >
          Hecho con ♥ por
          <a
            className="footer-link"
            href="https://github.com/LucilaPaiva"
            target="_blank"
          >
             Lucila Paiva <BsGithub />
          </a>
        </div>
      </div>
    </footer>

  );
};

export { Footer };

