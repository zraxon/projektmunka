import Menu from "./components/Menu";
import Settings from "./components/Settings";
import Vedett from "./components/Vedett";
import Main from "./components/Main";
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Sema from "./components/Sema";
import { UserProvider } from "./context/UserContext";
import { AdatProvider } from "./context/AdatContext";
import { FilmProvider}  from "./context/FilmekContext";


function App() {
  

  return (
    <>
      <Router>
      <UserProvider>
        <FilmProvider>
        <AdatProvider>
        <Menu/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filmek/:filmId" element={<Sema />} />
          <Route path="/settings" element={<Settings />}/>
          <Route path="/vedett" element={<Vedett />} />
          <Route path="*" element={<Navigate to={'/'} />} />          
        </Routes>
        </AdatProvider>
        </FilmProvider>
        </UserProvider>
      </Router>
    </>
  )
}

export default App
