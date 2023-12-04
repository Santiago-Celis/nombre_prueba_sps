import { BrowserRouter, Router, Route } from 'react-router-dom'
import './App.css';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Router>
        <Route path='/' element={<UsersPage />} />
        <Route path='' element='' />
        <Route path='' element='' />
      </Router>
    </BrowserRouter>
    
    </>
  );
}

export default App;
