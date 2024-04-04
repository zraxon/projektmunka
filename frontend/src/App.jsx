import Menu from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";
import Vedett from "./components/Vedett";
import Main from "./components/Main";
import { slides } from "./components/maindata.json";
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Sema from "./components/Sema";
import { UserProvider } from "./context/UserContext";


function App() {
  

  return (
    <>
      <UserProvider>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filmek/:filmNev" element={<Sema />} />
          <Route path="/belepes" element={<Login />} />
          <Route path="/regisztracio" element={<Register />}/>
          <Route path="/vedett" element={<Vedett />} />
          <Route path="*" element={<Navigate to={'/'} />} />          
        </Routes>
       
      </Router>
      </UserProvider>
    </>
  )
}

export default App
