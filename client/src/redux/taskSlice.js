import { createSlice } from "@reduxjs/toolkit";


const loadFavouritesFromLocalStorage = () => {
  try {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      return JSON.parse(storedFavourites);
    }
  } catch (error) {
    console.error("Error loading favourites from LocalStorage:", error);
  }
  return [];
};

export const TaskSlice = createSlice({
  name: "task", // Provide a name for your slice
   initialState : {
    tasks: [],
    Favourites:loadFavouritesFromLocalStorage(),
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    createTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },
    AddToFavourite:(state,action)=>{
      state.Favourites.push(action.payload);

      localStorage.setItem("favourites", JSON.stringify(state.Favourites));
    },
    deletFromFavourite:(state,action)=>{
    state.Favourites = state.Favourites.filter(
      (fav)=> fav._id !== action.payload
    );
    localStorage.setItem("favourites", JSON.stringify(state.Favourites));
    }
  },
});

export const { 
  setTasks,
   createTask, 
   deleteTask,
   AddToFavourite,
   deletFromFavourite }
    = TaskSlice.actions;

export default TaskSlice.reducer;
