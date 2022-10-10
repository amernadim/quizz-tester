import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog";
import ErrorPage from "./component/ErrorPage";
import Home from "./component/Home";
import Root from "./component/Root";
import Statistics from "./component/Statistics"

const router = createBrowserRouter([
  {path : '/' ,
   element: <Root/> ,
   errorElement: <ErrorPage/>,
   children : [
    {path : '/' , element : <Home/>},
    {path : '/home' ,
     loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
     element : <Home/>},
    {path : '/statistics' , element : <Statistics/>},
    {path : '/blog' , element : <Blog/>}
  ]}
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;

