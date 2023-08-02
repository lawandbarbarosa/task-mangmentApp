import './App.css'
import Login from './pages/register/login/Login'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import SignUp from './pages/register/signup/Signup'
import Profile from "../src/pages/register/profile/Profile"
import Home from '../src/pages/Home/Home'
import User from './pages/users/User'
import Fav from './pages/Home/favourite/Fav'
import AddingTask from './components/AddingTask'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/home' element={<Home />} />
      <Route path='/users' element={<User />} />
      <Route path='/fav' element={<Fav />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
