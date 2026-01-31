import { createContext } from "react";

export const ThemeContext = createContext(null);



//Where every the theme and setTheme is getting used If it get's changed from a single place it would be change from every where

//This is a global store all the component insider ThemeProvider can access the context of the ThemeContext
//So the main work of context api is store in a single place and use in multiple places.

//Here Childrens reffer to the 100 components which will be using theme. For example NavBar
//Provider is the actual data and context is the table of data.