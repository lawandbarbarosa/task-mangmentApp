import './App.css'
import Login from './pages/register/login/Login'
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import SignUp from './pages/register/signup/Signup'
import Profile from "../src/pages/register/profile/Profile"
import Home from '../src/pages/Home/Home'
import User from './pages/users/User'
import Fav from './pages/Home/favourite/Fav'
import AddingTask from './components/AddingTask'
import { useSelector } from 'react-redux'


function App() {

  const {users} = useSelector((state)=> state.users )

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={ !users ? <Login /> : <Navigate to="/login" />  } />
      <Route path='/signup' element={ !users ? <SignUp /> : <Navigate to="/" /> } />
      <Route path='/profile' element={<Profile />} />
      <Route path='/' element={ users ?  <Home /> : <Navigate to="/signup" /> } />
      <Route path='/users' element={<User />} />
      <Route path='/fav' element={<Fav />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
