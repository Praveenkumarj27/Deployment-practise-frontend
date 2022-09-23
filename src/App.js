import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Passwordreset from './Components/Passwordreset';
import Dashboard from './Components/Dashboard';
import ResetPasswordPage from './Components/ResetPasswordPage';
import Signup from './Components/Signup';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/register' element={<Signup/>} />
          <Route path='/resetpassword' element={<Passwordreset/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/reset-password-page' element={< ResetPasswordPage/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
