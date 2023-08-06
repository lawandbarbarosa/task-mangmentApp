import { setLogout } from "../../../redux/userSlice";
import { setTasks } from "../../../redux/taskSlice";
import { useDispatch } from "react-redux";



export const useLogout = ()=>{

    const dispatch = useDispatch()

    const Logout = ()=>{
     
        localStorage.removeItem("Users")
        dispatch(setLogout())
        dispatch(setTasks({ payload: null }));
        console.log("logout")
    }

    return {Logout}

} 