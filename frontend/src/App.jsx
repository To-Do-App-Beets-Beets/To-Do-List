import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import theme from './theme';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
         {/* para usar o contexto de autenticação, o */}
        <Routes />
    </BrowserRouter>
  );
}

export default App; 