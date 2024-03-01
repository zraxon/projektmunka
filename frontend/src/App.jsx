import Menu from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";
import Vedett from "./components/Vedett";
import Main from "./components/Main";
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import { UserProvider } from "./context/UserContext";
import { ImageProvider } from "./context/ImageContext";
import ImageUpload from "./components/ImageUpload";
import Images from "./components/Images";
import ImagesBin from "./components/ImagesBin";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  

  return (
    <>
      <UserProvider>
        <ImageProvider>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/vedett" element={<Vedett />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/images" element={<Images />} />
          <Route path="/imagesbin" element={<ImagesBin />}/>
          <Route path="*" element={<Navigate to={'/'} />} />          
        </Routes>
       
      </Router>
      </ImageProvider>
      </UserProvider>
      <ToastContainer />
    </>
  )
}

export default App
