import Menu from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";
import Vedett from "./components/Vedett";
import { Carousel } from "./components/Main";
import { slides } from "./components/maindata.json";
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import { UserProvider } from "./context/UserContext";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  

  return (
    <>
      <UserProvider>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<Carousel data = {slides} />} />
          <Route path="/belepes" element={<Login />} />
          <Route path="/regisztracio" element={<Register />}/>
          <Route path="/vedett" element={<Vedett />} />
          <Route path="*" element={<Navigate to={'/'} />} />          
        </Routes>
       
      </Router>
      </UserProvider>
      <ToastContainer />
    </>
  )
}

export default App
