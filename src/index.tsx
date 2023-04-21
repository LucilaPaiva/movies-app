
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from './context';
// import { Footer, Header, Main, Menu } from "./";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<AuthProvider> 
  <App />
</AuthProvider>

);

