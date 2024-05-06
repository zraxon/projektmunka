import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Menu from "./components/Menu";
import Main from "./components/Main";
import Settings from "./components/Settings";
import Vedett from "./components/Vedett";
import Jegyarak from './components/JegyArak/Jegyarak';
import Vetitesek from './components/Vetitesek/Vetitesek';
import Sema from "./components/Sema";
import Kosar from "./components/Kosar/Kosar";

import { UserProvider } from "./context/UserContext";
import { AdatProvider } from "./context/AdatContext";
import { FilmProvider}  from "./context/FilmekContext";
import { JegyProvider } from "./context/JegyarakContext";
import { VetitesProvider } from "./context/VetitesekContext";
import { KosarProvider } from "./context/KosarContext";


function App() {
  

  return (
    <>
      <Router>
      <UserProvider>
        <FilmProvider>
        <AdatProvider>
        <JegyProvider>
        <VetitesProvider>
        <KosarProvider>
        <Menu/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filmek/:filmId" element={<Sema />} />
          <Route path="/jegyarak" element={<Jegyarak />} />
          <Route path="/vetitesek" element={<Vetitesek />} />
          <Route path="/settings" element={<Settings />}/>
          <Route path="/kosar" element={<Kosar />}/>
          <Route path="/vedett" element={<Vedett />} />
          <Route path="*" element={<Navigate to={'/'} />} />          
        </Routes>
        </KosarProvider>
        </VetitesProvider>
        </JegyProvider>
        </AdatProvider>
        </FilmProvider>
        </UserProvider>
      </Router>
    </>
  )
}

export default App
