import Menu from "./components/Menu";
import Register from "./components/Register";
import Vedett from "./components/Vedett";
import Main from "./components/Main";
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Sema from "./components/Sema";
import { UserProvider } from "./context/UserContext";
import { FilmProvider}  from "./context/FilmekContext";


function App() {
  

  return (
    <>
      <Router>
      <UserProvider>
        <FilmProvider>
        <Menu/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filmek/:filmId" element={<Sema />} />
          <Route path="/regisztracio" element={<Register />}/>
          <Route path="/vedett" element={<Vedett />} />
          <Route path="*" element={<Navigate to={'/'} />} />          
        </Routes>
        </FilmProvider>
        </UserProvider>
      </Router>
    </>
  )
}

export default App
